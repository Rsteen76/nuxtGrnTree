
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan');
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use(cors())
// Use native ES6 Promises since mongoose's are deprecated.
mongoose.Promise = global.Promise


// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
}, () => {
  console.log("DB is connected");
});

// Fail on connection error.
mongoose.connection.on('error', error => {
  throw error
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'apple.jpg')));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

const {
  apiRoutes
} = require('../server/routes/index')
const {
  webRoutes
} = require('../server/routes/index')

app.use('/api', apiRoutes);
app.use('/web', webRoutes);

/**
 * Module dependencies.
 */

var debug = require('debug')('mean-app:server')
var http = require('http')

/**
 * Create HTTP server.
 */

var server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break;
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port
  debug('Listening on ' + bind)
}

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
