import { TablePersistentStorageKeys, TablePersistentStorageProps } from './types'

type PersistentStorageActionProps<K> = {
  storageKey: string,
  featureKey: K
}

export const getPersistentStorageValue = <K extends TablePersistentStorageKeys>({
  storageKey,
  featureKey
}: PersistentStorageActionProps<K>): undefined | TablePersistentStorageProps[K] => {
  const stringState = localStorage.getItem(storageKey)
  if (!stringState) {
    return
  }
  const state: TablePersistentStorageProps = JSON.parse(stringState)
  return state[featureKey]
}

export const updatePersistentStorage = <K extends TablePersistentStorageKeys>({
  storageKey,
  featureKey,
  updatedValue
}: PersistentStorageActionProps<K> & { updatedValue: TablePersistentStorageProps[K] }): void => {
  try {
    const oldStateString = localStorage.getItem(storageKey)
    if (!oldStateString) {
      console.log(`[hexa-ui]: state with key ${storageKey} wasn't found. Creating a new one to save ${featureKey}`)
    }
    const oldState: TablePersistentStorageProps = JSON.parse(oldStateString || '{}')
    const newState: TablePersistentStorageProps = {
      ...oldState,
      [featureKey]: updatedValue
    }
    localStorage.setItem(storageKey, JSON.stringify(newState))
  } catch (error) {
    console.error(`[hexa-ui]: Error while saving ${featureKey} to localStorage.`, error)
  }
}