const db = require('./plugins/mongodb')
const path = require('path')
const cors = require('cors')
const logger = require('morgan')
const express = require('express')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')

const resourceMiddleware = require('./middleware/resource')
const jwtMiddleware = require('./middleware/jwtAuth')
const errorMiddleware = require('./middleware/errorHandler')

const { resourceRoute, adminRoute, uploadRoute } = require('./routes')

const { root } = require('./config/base.config')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(root, 'public')))
app.use(express.static(path.join(root, 'uploads')))

app.use(
  cors({
    origin: true,
    maxAge: 1728000,
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, X-Custom-Header, X-Requested-With, Authorization, Token'
  })
)

app.use(jwtMiddleware())

app.use('/api/:resource', resourceMiddleware(), resourceRoute)
app.use('/upload', uploadRoute)
app.use('/admin', adminRoute)

app.use((req, res, next) => {
  next(createError(404))
}, errorMiddleware())

module.exports = app
