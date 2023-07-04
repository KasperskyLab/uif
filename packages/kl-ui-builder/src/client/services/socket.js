module.exports = function () {
  const io = require('socket.io-client')
  const socketInstance = io('/')

  const api = {
    emit: function (msg, arg1, arg2) {
      if (!socketInstance) return

      const args = Array.prototype.slice.call(arguments, 1)
      console.log('socket emit: "' + msg + '"', args)
      socketInstance.emit(msg, arg1, arg2)
    },
    on: function (msg, callback) {
      if (!socketInstance) return

      socketInstance.on(msg, function (data) {
        console.log('socket message: "' + msg + '"', Array.prototype.slice.call(arguments, 0))
        callback.apply(this, arguments)
      })
    },
    off: function (msg, data) {
      if (!socketInstance) return

      socketInstance.off(msg, data)
    }
  }

  runtime.join('socket', api)

  return api
}
