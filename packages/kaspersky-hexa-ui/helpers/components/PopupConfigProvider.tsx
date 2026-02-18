import React from 'react'

type PopupConfig = {
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  usePortal?: boolean
}

const Context = React.createContext<PopupConfig>({})

export const PopupConfigProvider: React.FC<{
  children: React.ReactNode
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  usePortal?: boolean
}> = ({ children, getPopupContainer, usePortal }) => {
  const value = React.useMemo(() => ({ getPopupContainer, usePortal }), [getPopupContainer, usePortal])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const usePopupConfig = (defaultValue?: Partial<PopupConfig>) => {
  const context = React.useContext(Context)
  return {
    ...defaultValue,
    ...context
  }
}