import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import { Terminal as XTerminal } from '@xterm/xterm'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { MockClient } from './__mocks__/mock-client'
import { TerminalBasicDataTransferAddon } from './addons'
import { Terminal } from './Terminal'
import { TerminalProps } from './types'

const meta: Meta<TerminalProps> = {
  title: 'Hexa UI Components/Terminal',
  component: Terminal,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {},
  decorators: [
    (Story, context) => (
      <StoryColumn style={{ minWidth: '100px', maxWidth: '400px' }}>
        <Story {...context}/>
      </StoryColumn>
    )
  ],
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<TerminalProps>

/* Client-server communication works as follows:
  { method: 'input', data: ... } is sent from client to server when terminal input occurs
  { method: 'output', data: ... } is sent from server to client when terminal output is generated
*/

export class CommonDataTransferAddon extends TerminalBasicDataTransferAddon {
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

    this._socket.send(JSON.stringify({ method: 'input', data: data }))
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

const mockClient = new MockClient()
mockClient.connect()
const customAttachAddon = new CommonDataTransferAddon(mockClient as unknown as WebSocket)

export const Basic: Story = {
  render: () => {
    return (
      <div style={{ width: '1232px', height: '1000px' }}>
        <Terminal
          dataTransferAddon={customAttachAddon}
        />
      </div>
    )
  }
}
