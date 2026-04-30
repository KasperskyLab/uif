/**
 * Сохранение FileSystemDirectoryHandle в IndexedDB (Chrome/Edge).
 * @see https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 */

const DB_NAME = 'kaspersky-ui-normalization-fsa'
const DB_VERSION = 1
const STORE = 'directoryHandles'

export type DirectoryPersistenceKey = 'normalization-tool' | 'transpile-viewer'

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error ?? new Error('IndexedDB open failed'))
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE)
      }
    }
    req.onsuccess = () => resolve(req.result)
  })
}

export async function savePersistedDirectoryHandle(
  key: DirectoryPersistenceKey,
  handle: FileSystemDirectoryHandle
): Promise<void> {
  const db = await openDb()
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
      tx.objectStore(STORE).put(handle, key)
    })
  } finally {
    db.close()
  }
}

export async function loadPersistedDirectoryHandle(
  key: DirectoryPersistenceKey
): Promise<FileSystemDirectoryHandle | null> {
  const db = await openDb()
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly')
      const r = tx.objectStore(STORE).get(key)
      r.onsuccess = () => {
        const v = r.result
        if (
          v &&
          typeof v === 'object' &&
          'kind' in v &&
          (v as FileSystemHandle).kind === 'directory'
        ) {
          resolve(v as FileSystemDirectoryHandle)
        } else {
          resolve(null)
        }
      }
      r.onerror = () => reject(r.error)
    })
  } finally {
    db.close()
  }
}

export async function ensureDirectoryPermission(
  handle: FileSystemDirectoryHandle,
  mode: 'read' | 'readwrite'
): Promise<boolean> {
  let state = await handle.queryPermission({ mode })
  if (state === 'granted') return true
  if (state === 'prompt') {
    state = await handle.requestPermission({ mode })
  }
  return state === 'granted'
}
