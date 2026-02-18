const mockLsLaMessage = `\r\n
total 244684\r\n
drwxr-x--- 11 xdr  xdr         4096 Jul  8 12:36 .\r
drwxr-xr-x  3 root root        4096 Oct  8  2024 ..\r
drwxrwxr-x  3 xdr  xdr         4096 Apr 28 15:08 AST\r
drwxrwxr-x  2 xdr  xdr         4096 Apr  4 13:27 [01;34m.astconfig[0m\r
-rw-------  1 xdr  xdr       119234 Jul  8 12:36 .bash_history\r
-rw-r--r--  1 xdr  xdr          220 Mar 31  2024 .bash_logout\r
-rw-r--r--  1 xdr  xdr         3902 Oct  8  2024 .bashrc\r
drwx------  5 xdr  xdr         4096 Dec 19  2024 [01;34m.cache[0m\r
drwx------  4 xdr  xdr         4096 Dec 12  2024 [01;34m.config[0m\r\n
[?2004hANSI colors\r\n
[00;30m 0030 black\r
[00;31m 0031 red\r
[00;32m 0032 green\r
[00;33m 0033 yellow\r
[00;34m 0034 blue\r
[00;35m 0035 magenta\r
[00;36m 0036 cyan\r
[00;37m 0037 white\r
[00;90m 0090 brightBlack\r
[00;91m 0091 brightRed\r
[00;92m 0092 brightGreen\r
[00;93m 0093 brightYellow\r
[00;94m 0094 brightBlue\r
[00;95m 0095 brightMagenta\r
[00;96m 0096 brightCyan\r
[00;97m 0097 brightWhite\r\n`

export class MockClient {
  private _handlers: {
    open: Array<(ev: Event) => void>,
    message: Array<(ev: MessageEvent) => void>,
    error: Array<(ev: Event) => void>,
    close: Array<(ev: CloseEvent) => void>
  } = {
      open: [],
      message: [],
      error: [],
      close: []
    }

  connect () {
    setTimeout(() => {
      this._triggerEvent('open', new Event('open'))
      this._sendWelcomeMessage()
    }, 100)
  }

  private _sendWelcomeMessage () {
    setTimeout(() => {
      this._triggerMessage({
        method: 'output',
        data: '[?2004hmock@dcdcdc-dcdcd-1:~$ '
      })
    }, 150)
  }

  send (data: string) {
    const message = JSON.parse(data)
    let output = message.data
    if (output === '\r') {
      output = mockLsLaMessage
    }
    if (message.method === 'input') {
      setTimeout(() => {
        this._triggerMessage({
          method: 'output',
          data: output
        })
      }, 50)
    }
  }

  close () {
    this._triggerEvent('close', new CloseEvent('close'))
    this._handlers = { open: [], message: [], error: [], close: [] }
  }

  private _triggerEvent (type: 'open' | 'error' | 'close', event: Event) {
    if (type === 'close') return this._handlers[type].forEach(handler => handler(event as CloseEvent))
    this._handlers[type].forEach(handler => handler(event))
  }

  private _triggerMessage (message: { method: string, data: string }) {
    const event = new MessageEvent('message', {
      data: JSON.stringify(message)
    })
    this._handlers.message.forEach(handler => handler(event))
  }

  addEventListener<K extends keyof WebSocketEventMap> (
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any
  ) {
    if (type === 'open') {
      this._handlers.open.push(listener as (ev: Event) => void)
    } else if (type === 'message') {
      this._handlers.message.push(listener as (ev: MessageEvent) => void)
    } else if (type === 'error') {
      this._handlers.error.push(listener as (ev: Event) => void)
    } else if (type === 'close') {
      this._handlers.close.push(listener as (ev: CloseEvent) => void)
    }
  }

  removeEventListener<K extends keyof WebSocketEventMap> (
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any
  ) {
    let handlers: any[]
    if (type === 'open') {
      handlers = this._handlers.open
    } else if (type === 'message') {
      handlers = this._handlers.message
    } else if (type === 'error') {
      handlers = this._handlers.error
    } else if (type === 'close') {
      handlers = this._handlers.close
    } else {
      return
    }

    const index = handlers.indexOf(listener)
    if (index !== -1) {
      handlers.splice(index, 1)
    }
  }

  get readyState () {
    return WebSocket.OPEN
  }
}
