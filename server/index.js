
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


// const index = require('./server/routes/index');
const {
  apiRoutes
} = require('../server/routes/index')
const {
  webRoutes
} = require('../server/routes/index')

app.use('/api', apiRoutes);
app.use('/web', webRoutes);

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
