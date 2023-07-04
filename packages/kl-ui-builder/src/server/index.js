const path = require('path')
const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const nunjucks = require('nunjucks')
const socketIO = require('socket.io')
const favicon = require('serve-favicon')

const formHelper = require('./forms')

const app = express()
let io
let settings
let availablePlugins
let customFields

nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//* ******************** Server setup *********************

app.set('view engine', 'html')

app.use(compression())

//* *************************************************

function initSocketHelpers () {
  io.on('connection', (socket) => {
    formHelper.attachToSocket(socket)
  })
}

//* ******************** Routes *********************

app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.get('/', (req, res) => {
  const pageGlobals = {
    socketUrl: 'http://localhost:2000',
    pluginId: process.env.pluginId,
    customFields: JSON.stringify(customFields),
    availablePlugins
  }

  res.render('index', pageGlobals)
})

//* *************************************************

module.exports = {
  start () {
    function startServer () {
      const CLIENT_PATH = path.join(__dirname, '..', 'client')
      app.use('/js', express.static(path.join(CLIENT_PATH, 'js')))
      app.use('/css', express.static(path.join(CLIENT_PATH, 'css')))
      const server = http.Server(app)
      io = socketIO(server)
      initSocketHelpers()
      server.listen(process.env.port, '0.0.0.0', () => {
        console.log(`UI Builder is listening on http://localhost:${process.env.port}`)
      })
    }

    startServer()
  },
  stop () {
    process.exit()
  },
  setup (config) {
    availablePlugins = config.availablePlugins || []
    settings = config
    settings.paths = settings.paths || {}
    settings.paths.projectRoot = settings.paths.projectRoot || path.resolve('../')
    const filesFdr = path.resolve(settings.paths.projectRoot, 'client')
    settings.paths.forms = settings.paths.forms || path.resolve(filesFdr, 'ui')
    process.env.port = settings.port || 2000
    process.env.formsFolderPath = settings.paths.forms
    process.env.pluginId = settings.pluginId || ''
    process.env.jsPath = process.env.jsPath || __dirname
    process.env.cssPath = process.env.cssPath || __dirname
    customFields = config.customFields || {}
  }
}
