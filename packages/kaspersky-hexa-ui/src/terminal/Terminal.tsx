import { useTheme } from '@design-system/theme'
import { ClipboardAddon } from '@xterm/addon-clipboard'
import { FitAddon } from '@xterm/addon-fit'
import { WebLinksAddon } from '@xterm/addon-web-links'
import { WebglAddon } from '@xterm/addon-webgl'
import { IDisposable, Terminal as XTerminal } from '@xterm/xterm'
import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { TerminalProps } from './types'

const StyledTerminal = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  .xterm-viewport {
    overflow-y: auto;
  }
`

export const Terminal = ({
  options: terminalOptions = {},
  dataTransferAddon,
  customAddons,
  ...props
}: TerminalProps) => {
  const terminalRef = useRef<HTMLDivElement>(null)

  const theme = useTheme()

  const loadAddons = useCallback((term: XTerminal) => {

    const loadWebGL2IfSupported = (): IDisposable => {
      try {
        const canvas = document.createElement('canvas')
        const supported = !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'))
        if (!supported) return { dispose: () => {} }

        const webglAddon = new WebglAddon()
        term.loadAddon(webglAddon)

        return webglAddon.onContextLoss(() => webglAddon.dispose())
      } catch (e) {
        return { dispose: () => {} }
      }
    }

    const webLinksAddon = new WebLinksAddon()
    const clipboardAddon = new ClipboardAddon()
    const fitAddon = new FitAddon()

    term.loadAddon(dataTransferAddon)
    term.loadAddon(webLinksAddon)
    term.loadAddon(clipboardAddon)
    term.loadAddon(fitAddon)
    const { dispose: webglDispose } = loadWebGL2IfSupported()

    fitAddon.fit()

    customAddons && customAddons.forEach((addon) => term.loadAddon(addon))

    const resizeObserver = new ResizeObserver(() => fitAddon.fit())
    resizeObserver.observe(terminalRef.current!)

    return () => {
      resizeObserver.disconnect()
      webglDispose()
    }
  }, [customAddons, dataTransferAddon])

  const handleWheel = useCallback((e: WheelEvent) => {
    const viewport = terminalRef.current?.querySelector('.xterm-viewport')
    if (viewport && viewport.contains(e.target as Node)) {
      e.stopPropagation()
    }
  }, [])

  useEffect(() => {
    if (!terminalRef.current) return
    const term = new XTerminal({
      fontFamily: '"Kaspersky Sans Mono"',
      fontSize: 14,
      theme: {
        background: theme.colors.terminal.bg.theme.background,
        foreground: theme.colors.terminal.text.theme.foreground,
        selectionForeground: theme.colors.terminal.text.theme.selectionforeground,
        cursor: theme.colors.terminal.text.theme.cursor,
        cursorAccent: theme.colors.terminal.text.theme.cursoraccent,
        selectionBackground: theme.colors.terminal.bg.theme.selectionbackground,
        white: theme.colors.terminal.text.ansicolors.white,
        black: theme.colors.terminal.text.ansicolors.black,
        green: theme.colors.terminal.text.ansicolors.green,
        red: theme.colors.terminal.text.ansicolors.red,
        yellow: theme.colors.terminal.text.ansicolors.yellow,
        blue: theme.colors.terminal.text.ansicolors.blue,
        magenta: theme.colors.terminal.text.ansicolors.magenta,
        cyan: theme.colors.terminal.text.ansicolors.cyan,
        brightBlack: theme.colors.terminal.text.ansicolors.brightblack,
        brightGreen: theme.colors.terminal.text.ansicolors.brightgreen,
        brightRed: theme.colors.terminal.text.ansicolors.brightred,
        brightYellow: theme.colors.terminal.text.ansicolors.brightyellow,
        brightBlue: theme.colors.terminal.text.ansicolors.brightblue,
        brightMagenta: theme.colors.terminal.text.ansicolors.brightmagenta,
        brightCyan: theme.colors.terminal.text.ansicolors.brightcyan,
        brightWhite: theme.colors.terminal.text.ansicolors.brightwhite
      },
      ...terminalOptions
    })
    term.open(terminalRef.current)
    const dispose = loadAddons(term)

    term.focus()

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      dispose()
      term.dispose()
    }
  }, [terminalOptions, handleWheel, loadAddons])

  return (
    <StyledTerminal
      ref={terminalRef}
      {...props}
    />
  )
}
