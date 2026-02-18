import { useCallback, useState } from 'react'

import { LoadingStatus } from '../types'

export const useLoadingStatus = (): [LoadingStatus, () => void, () => void] => {
  const [status, setStatus] = useState<LoadingStatus>('loading')

  const onLoadSuccess = useCallback(() => {
    setStatus('success')
  }, [setStatus])

  const onLoadFailure = useCallback(() => {
    setStatus('failure')
  }, [setStatus])

  return [status, onLoadSuccess, onLoadFailure]
}
