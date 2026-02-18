import { IDisposable, ITerminalAddon, Terminal } from '@xterm/xterm'

export abstract class BasicDataTransferAddon implements ITerminalAddon {
  protected _terminal: Terminal | undefined
  protected _socket: WebSocket
  protected _disposables: IDisposable[]

  constructor (webSocket: WebSocket) {
    this._socket = webSocket
    this._disposables = []

    this.registerHandler(this.addSocketListener('close', (ev) => this.onSocketClose(ev)))
    this.registerHandler(this.addSocketListener('open', (ev) => this.onSocketOpen(ev)))
    this.registerHandler(this.addSocketListener('error', (ev) => this.onSocketError(ev)))
    this.registerHandler(this.addSocketListener('message', (ev) => this.onSocketMessage(ev)))
  }

  activate (terminal: Terminal): void {
    this._terminal = terminal

    this.registerHandler(terminal.onData((data) => this.onData(data)))
  }

  dispose (): void {
    this._disposables.forEach((d) => d.dispose())
    this._socket.close()
  }

  protected registerHandler = <T extends IDisposable>(d: T): T => {
    this._disposables.push(d)
    return d
  }

  protected checkSocketIsOpen = (): boolean => {
    switch (this._socket.readyState) {
      case WebSocket.OPEN:
        return true
      case WebSocket.CONNECTING:
        throw new Error('[XTerm DataTransferAddon] Addon was loaded before socket was open')
      case WebSocket.CLOSING:
        console.warn('[XTerm DataTransferAddon] Addon socket is closing')
        return false
      case WebSocket.CLOSED:
        throw new Error('[XTerm DataTransferAddon] Addon socket is closed')
      default:
        throw new Error('[XTerm DataTransferAddon] Unexpected socket state')
    }
  }

  protected onSocketOpen = (ev: Event) => {}
  protected onSocketClose = (ev: CloseEvent) => this.dispose()
  protected onSocketError = (ev: Event) => this.dispose()

  protected abstract onData: (data: string) => void
  protected abstract onSocketMessage: (ev: MessageEvent) => void

  protected addSocketListener = <K extends keyof WebSocketEventMap>(type: K, handler: (this: WebSocket, ev: WebSocketEventMap[K]) => any): IDisposable => {
    this._socket.addEventListener(type, handler)
    return {
      dispose: () => {
        if (!handler) return
        this._socket.removeEventListener(type, handler)
      }
    }
  }
}
