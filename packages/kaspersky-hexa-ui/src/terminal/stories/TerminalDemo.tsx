import { Terminal as XTerminal } from '@xterm/xterm'
import React, { useMemo } from 'react'

import { MockClient } from '../__mocks__/mock-client'
import { TerminalBasicDataTransferAddon } from '../addons'
import { Terminal } from '../Terminal'

class CommonDataTransferAddon extends TerminalBasicDataTransferAddon {
  activate (terminal: XTerminal) {
    super.activate(terminal)

    this.registerHandler(terminal.onBinary((data) => this._onBinary(data)))
  }

  dispose (): void {}

  deactivate () {
    this._socket.close()
  }

  private _onBinary = (data: string) => {
    if (!this.checkSocketIsOpen()) return

    const buffer = new Uint8Array(data.length)
    for (let i = 0; i < data.length; ++i) {
      buffer[i] = data.charCodeAt(i) & 255
    }
    this._socket.send(JSON.stringify({ method: 'input', data: buffer }))
  }

  onData = (data: string) => {
    if (!this.checkSocketIsOpen()) return

    this._socket.send(JSON.stringify({ method: 'input', data }))
  }

  onSocketMessage = (ev: MessageEvent) => {
    try {
      const message = JSON.parse(ev.data)
      if (message.method === 'output') {
        this._terminal?.write(message.data)
      }
    } catch (e) {
      console.error('Error parsing message:', e)
    }
  }
}

type TerminalDemoProps = {
  width?: string,
  height?: string,
  showOutput?: boolean
}

export const TerminalDemo = ({
  width = '1232px',
  height = '1000px',
  showOutput = false
}: TerminalDemoProps) => {
  const dataTransferAddon = useMemo(() => {
    const mockClient = new MockClient()
    mockClient.connect()

    if (showOutput) {
      setTimeout(() => {
        mockClient.send(JSON.stringify({ method: 'input', data: '\r' }))
      }, 200)
    }

    return new CommonDataTransferAddon(mockClient as unknown as WebSocket)
  }, [showOutput])

  return (
    <div style={{ width, height }}>
      <Terminal dataTransferAddon={dataTransferAddon} />
    </div>
  )
}
