import express from 'express'
import path from 'path'
import webpack from 'webpack'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import config from 'webpack.config.js'

const app = express()

app.use(bodyParser.json())

const developmentMode = process.env.NODE_ENV
