const express = require('express')
const assert = require('http-assert')
const createError = require('http-errors')

const Router = express.Router()

// 获取资源
Router.get('/', async (req, res, next) => {
  try {
    const docs = await req.Model.find(req.body)
    res.json(docs)
  } catch (err) {
    next(createError(400))
  }
})

// 创建资源
Router.post('/', async (req, res, next) => {
  try {
    const doc = await req.Model.create(req.body)
    res.status(200).send(doc)
  } catch (err) {
    // console.log(err.MongoServerError.indexOf('duplicate key error'))
    const errMsg = Object.entries(err.errors)[0][1]
    next(createError(400, errMsg))
  }
})

// 更新资源
Router.put('/:id', (req, res, next) => {
  const params = req.body
  res.status(200).send('ok')
})

// 删除资源
Router.delete('/:id', (req, res, next) => {
  const params = req.body
  res.status(200).send('ok')
})

module.exports = Router
