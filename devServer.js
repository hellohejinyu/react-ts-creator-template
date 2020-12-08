const config = require('./webpack.config.dev')
const express = require('express')
const openBrowser = require('react-dev-utils/openBrowser')
const webpack = require('webpack')
const path = require('path')

const port = 8800

const app = express()
const compiler = webpack({ ...config, stats: { preset: 'minimal' } })

app.use(require('webpack-dev-middleware')(compiler))

app.use(require('webpack-hot-middleware')(compiler))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie'
  )
  next()
})

app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

const ip = '127.0.0.1'

function startServer(port) {
  app
    .listen(port, () => {
      if (openBrowser(`http://${ip}:${port}`)) {
        console.log(`Server Started. Listen http://${ip}:${port}`)
      }
    })
    .on('error', (e) => {
      if (e.code === 'EADDRINUSE') {
        startServer(port + 1)
      } else {
        throw new Error('Unknown Error')
      }
    })
}

startServer(port)
