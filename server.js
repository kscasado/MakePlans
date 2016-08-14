import express from 'express'
import path from 'path'
import webpack from 'webpack'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import config from 'webpack.config.js'

const app = express()

app.use(bodyParser.json())

const developmentMode = process.env.NODE_ENV

const isDeveloping = process.env.NODE_ENV !== 'production'
  console.log(isDeveloping)
  if (isDeveloping) {
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('*', function response (req, res) {
      res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')))
      res.end()
    })
  } else {
    app.use(compression())
    app.use(express.static(path.join(__dirname, '../dist')))
    app.get('*', function response (req, res) {
      res.sendFile(path.join(__dirname, '../dist/index.html'))
    })
  }
  const port = 3000
  app.listen(port, () => console.log(`Running on port ${port}`))
})()
