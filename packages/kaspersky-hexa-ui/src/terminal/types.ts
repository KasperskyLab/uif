import { ITerminalAddon, Terminal } from '@xterm/xterm'
import { HTMLAttributes } from 'react'

export type TerminalProps = HTMLAttributes<HTMLDivElement> & {
  options?: ConstructorParameters<typeof Terminal>[0],
  dataTransferAddon: ITerminalAddon,
  customAddons?: ITerminalAddon[]
}
