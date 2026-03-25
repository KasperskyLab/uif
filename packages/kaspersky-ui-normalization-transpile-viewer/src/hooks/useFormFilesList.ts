import { useState, useEffect, useCallback } from 'react'
import { isFormModuleFile } from '@/types/form-dsl'

export interface FormFileItem {
  key: string
  path: string
  title: string
  handle: FileSystemFileHandle
}

export interface FormFileNode {
  key: string
  path: string
  title: string
  isLeaf: boolean
  handle?: FileSystemFileHandle
  children?: FormFileNode[]
}

export function useFormFilesList(
  directoryHandle: FileSystemDirectoryHandle | null
): {
  flatList: FormFileItem[]
  treeNodes: FormFileNode[]
  loading: boolean
  error: string | null
  clearError: () => void
  refresh: () => void
} {
  const [treeNodes, setTreeNodes] = useState<FormFileNode[]>([])
  const [flatList, setFlatList] = useState<FormFileItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  useEffect(() => {
    if (!directoryHandle) {
      setTreeNodes([])
      setFlatList([])
      setError(null)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    async function buildTree(
      dir: FileSystemDirectoryHandle,
      pathPrefix: string
    ): Promise<FormFileNode[]> {
      const nodes: FormFileNode[] = []
      for await (const [name, handle] of dir.entries()) {
        if (cancelled) return []
        if (handle.kind === 'file') {
          if (isFormModuleFile(name)) {
            nodes.push({
              key: pathPrefix + name,
              path: pathPrefix + name,
              title: name,
              isLeaf: true,
              handle: handle as FileSystemFileHandle,
            })
          }
        } else {
          const childPath = pathPrefix + name + '/'
          const children = await buildTree(handle as FileSystemDirectoryHandle, childPath)
          nodes.push({
            key: childPath,
            path: childPath,
            title: name,
            isLeaf: false,
            children: children.length > 0 ? children : undefined,
          })
        }
      }
      nodes.sort((a, b) => {
        if (a.isLeaf !== b.isLeaf) return a.isLeaf ? 1 : -1
        return a.title.localeCompare(b.title)
      })
      return nodes
    }

    function collectFlat(nodes: FormFileNode[], list: FormFileItem[]): void {
      for (const node of nodes) {
        if (node.isLeaf && node.handle) {
          list.push({
            key: node.key,
            path: node.path,
            title: node.title,
            handle: node.handle,
          })
        }
        if (node.children) collectFlat(node.children, list)
      }
    }

    buildTree(directoryHandle, '')
      .then((tree) => {
        if (cancelled) return
        setTreeNodes(tree)
        const list: FormFileItem[] = []
        collectFlat(tree, list)
        setFlatList(list)
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Ошибка чтения каталога')
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [directoryHandle, refreshTrigger])

  const clearError = useCallback(() => setError(null), [])
  const refresh = useCallback(() => setRefreshTrigger((t) => t + 1), [])

  return { flatList, treeNodes, loading, error, clearError, refresh }
}

export function findFileInTree(
  nodes: FormFileNode[],
  key: string
): { path: string; handle: FileSystemFileHandle } | null {
  for (const node of nodes) {
    if (node.key === key && node.isLeaf && node.handle) {
      return { path: node.path, handle: node.handle }
    }
    if (node.children) {
      const found = findFileInTree(node.children, key)
      if (found) return found
    }
  }
  return null
}
