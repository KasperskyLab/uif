import React, {
  forwardRef,
  memo,
  useCallback,
  useMemo
} from 'react'

import { useLoadingStatus } from '../../hooks'
import { CreateImagePath, HandleScreenSelect, ScreenInternalState } from '../../types'

import {
  Image,
  PreviewButton,
  PreviewFailure,
  PreviewLoading
} from './PreviewCommon'

type PreviewSimpleProps = {
  screen: ScreenInternalState,
  onClick: HandleScreenSelect,
  createSrc?: CreateImagePath,
  isSelected?: boolean,
  isLazy?: boolean
}

const PreviewSimpleRaw = forwardRef<HTMLElement, PreviewSimpleProps>(
  (
    {
      screen,
      onClick,
      createSrc,
      isSelected,
      isLazy = true
    },
    ref
  ) => {
    const [status, onLoadSuccess, onLoadFailure] = useLoadingStatus()

    const src = useMemo(() => {
      return createSrc
        ? createSrc(screen.preview)
        : screen.preview
    }, [screen])

    const handleClick = useCallback(() => {
      onClick(screen)
    }, [screen, onClick])

    return (
      <PreviewButton
        onClick={handleClick}
        ref={ref}
        isSelected={isSelected}
      >
        {status === 'loading' && <PreviewLoading />}
        {status === 'failure' && <PreviewFailure />}
        <Image
          src={src}
          alt=""
          loading={isLazy ? 'lazy' : 'eager'}
          onLoad={onLoadSuccess}
          onError={onLoadFailure}
        />
      </PreviewButton>
    )
  }
)

export const PreviewSimple = memo(PreviewSimpleRaw)
