import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import {
  CurrentImage,
  HandleChangeCurrentImage,
  HandleScreenSelect,
  ScreenInternalState,
  ScreensListType,
  Uuid
} from '../types'

const createInitialScreensListState = (screensList: ScreensListType): ScreenInternalState[] => {
  return screensList.map((s, index) => {
    return {
      uuid: `${index}${Date.now()}`,
      preview: typeof s === 'string'
        ? s
        : s.preview,
      full: typeof s === 'string'
        ? s
        : s.full
    }
  })
}

const createInitialSelectedUuidState = (
  screensListInternal: ScreenInternalState[],
  currentImageFromProps: CurrentImage | undefined
): Uuid => {
  const selectedScreen = screensListInternal.find((s) => s.full === currentImageFromProps)

  return selectedScreen
    ? selectedScreen.uuid
    : null
}

export const useGalleryState = (
  screensList: ScreensListType,
  valueFromProps: CurrentImage | undefined,
  onChangeFromProps: HandleChangeCurrentImage | undefined
) => {
  const [screensListInternal, setScreensListInternal] = useState(createInitialScreensListState(screensList))
  const [selectedUuid, setSelectedUuid] = useState(createInitialSelectedUuidState(screensListInternal, valueFromProps))

  const onSelectScreen: HandleScreenSelect = useCallback((screen: ScreenInternalState | null) => {
    if (onChangeFromProps) {
      onChangeFromProps(screen?.full || null)
    } else {
      setSelectedUuid(screen?.uuid || null)
    }
  }, [screensListInternal, onChangeFromProps])

  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) return

    setScreensListInternal(createInitialScreensListState(screensList))
  }, [screensList])

  useEffect(() => {
    if (isFirstMount.current) return

    setSelectedUuid(createInitialSelectedUuidState(screensListInternal, valueFromProps))
  }, [screensListInternal, valueFromProps])

  useEffect(() => {
    isFirstMount.current = false
  }, [])

  return {
    screensListInternal,
    selectedUuid,
    onSelectScreen
  }
}
