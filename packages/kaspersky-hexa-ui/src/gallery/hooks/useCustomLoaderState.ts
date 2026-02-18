import {
  useCallback,
  useEffect,
  useReducer,
  useRef
} from 'react'

import {
  CurrentImage,
  CustomLoader,
  HandleChangeCurrentImage,
  HandleScreenSelectCustomLoad,
  LoadingStatusWithLoader,
  ScreenInternalStateWithCustomLoad,
  ScreensListType,
  Uuid
} from '../types'

type UseCustomLoaderStateParams = {
  screensList: ScreensListType,
  valueFromProps: CurrentImage | undefined,
  onChangeFromProps: HandleChangeCurrentImage | undefined,
  handleCustomImageLoad: CustomLoader
}

export const useCustomLoaderState = ({
  screensList,
  valueFromProps,
  onChangeFromProps,
  handleCustomImageLoad
}: UseCustomLoaderStateParams) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      valueFromProps,
      screensList
    },
    createInitialState
  )

  const onSelectScreen: HandleScreenSelectCustomLoad = useCallback((screen) => {
    if (onChangeFromProps) {
      onChangeFromProps(screen?.full || null)
    } else {
      dispatch({
        type: 'selectScreen',
        payload: screen?.uuid || null
      })
    }
  }, [dispatch, onChangeFromProps])

  const onLoadScreen = useCallback(async (screenName: string) => {
    try {
      dispatch({ type: 'loadScreenStart', payload: screenName })
      const loadedSrc = await handleCustomImageLoad(screenName)
      dispatch({ type: 'loadScreenSuccess', payload: { screenName, src: loadedSrc } })
    } catch (err) {
      console.error(err)
      dispatch({ type: 'loadScreenFailure', payload: screenName })
    }
  }, [handleCustomImageLoad])

  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) return

    dispatch({ type: 'resetScreensList', payload: screensList })
  }, [screensList])

  useEffect(() => {
    if (isFirstMount.current) return

    dispatch({ type: 'updateValueFromProps', payload: valueFromProps })
  }, [valueFromProps])

  useEffect(() => {
    isFirstMount.current = false
  }, [])

  return {
    screensListInternal: state.screensListInternal,
    selectedUuid: state.selectedUuid,
    onSelectScreen,
    onLoadScreen
  }
}

type State = {
  selectedUuid: string | null,
  screensListInternal: ScreenInternalStateWithCustomLoad[]
}

type Action =
  | { type: 'selectScreen', payload: string | null }
  | { type: 'loadScreenStart', payload: string }
  | { type: 'loadScreenSuccess', payload: { screenName: string, src: string } }
  | { type: 'loadScreenFailure', payload: string }
  | { type: 'resetScreensList', payload: ScreensListType }
  | { type: 'updateValueFromProps', payload: UseCustomLoaderStateParams['valueFromProps'] }

function reducer (state: State, action: Action): State {
  switch (action.type) {
    case 'selectScreen':
      return {
        ...state,
        selectedUuid: action.payload
      }
    case 'loadScreenStart':
      return {
        ...state,
        screensListInternal: updateScreensList(
          state.screensListInternal,
          {
            screenName: action.payload,
            status: 'loading'
          }
        )
      }
    case 'loadScreenSuccess':
      return {
        ...state,
        screensListInternal: updateScreensList(
          state.screensListInternal,
          {
            screenName: action.payload.screenName,
            src: action.payload.src,
            status: 'success'
          }
        )
      }
    case 'loadScreenFailure':
      return {
        ...state,
        screensListInternal: updateScreensList(
          state.screensListInternal,
          {
            screenName: action.payload,
            status: 'failure'
          }
        )
      }
    case 'resetScreensList':
      return {
        selectedUuid: null,
        screensListInternal: createInitialScreensListState(action.payload)
      }
    case 'updateValueFromProps':
      return {
        ...state,
        selectedUuid: createInitialSelectedUuidState(state.screensListInternal, action.payload)
      }
    default:
      exhaustiveActionCheck(action)
      return state
  }
}

function updateScreensList (
  prevList: ScreenInternalStateWithCustomLoad[],
  { screenName, src, status }: { screenName: string, src?: string, status: LoadingStatusWithLoader }
) {
  return prevList.map((screen) => {
    const doesFullNameMatch = screen.full === screenName
    const doesPreviewNameMatch = screen.preview === screenName

    if (doesFullNameMatch && doesPreviewNameMatch) {
      return {
        ...screen,
        previewStatus: status,
        previewSrc: src || null,
        fullStatus: status,
        fullSrc: src || null
      }
    }

    if (doesFullNameMatch) {
      return {
        ...screen,
        fullStatus: status,
        fullSrc: src || null
      }
    }

    if (doesPreviewNameMatch) {
      return {
        ...screen,
        previewStatus: status,
        previewSrc: src || null
      }
    }

    return screen
  })
}

type CreateInitialCountParam = {
  valueFromProps: UseCustomLoaderStateParams['valueFromProps'],
  screensList: ScreensListType
}

function createInitialState ({ valueFromProps, screensList }: CreateInitialCountParam): State {
  const screensListInternal = createInitialScreensListState(screensList)
  const selectedUuid = createInitialSelectedUuidState(screensListInternal, valueFromProps)

  return {
    selectedUuid,
    screensListInternal
  }
}

function createInitialScreensListState (screensList: ScreensListType): ScreenInternalStateWithCustomLoad[] {
  return screensList.map((s, index) => {
    return {
      uuid: `${index}${Date.now()}`,
      preview: typeof s === 'string'
        ? s
        : s.preview,
      full: typeof s === 'string'
        ? s
        : s.full,
      previewStatus: 'outsideOfViewport',
      fullStatus: 'outsideOfViewport',
      previewSrc: null,
      fullSrc: null
    }
  })
}

function createInitialSelectedUuidState (
  screensListInternal: ScreenInternalStateWithCustomLoad[],
  valueFromProps: UseCustomLoaderStateParams['valueFromProps']
): Uuid {
  const selectedScreen = screensListInternal.find((s) => s.full === valueFromProps)

  return selectedScreen
    ? selectedScreen.uuid
    : null
}

function exhaustiveActionCheck (type: never) {
  return type
}
