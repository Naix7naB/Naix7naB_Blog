const express = require('express')
const assert = require('http-assert')
const createError = require('http-errors')

const { getPubKey } = require('../core/rsa')

const Router = express.Router()

// 获取公钥
Router.get('/key', async (req, res, next) => {
  const pubKey = await getPubKey()
  assert(pubKey, 422, '获取密钥失败')
  res.status(200).send({
    code: 10000,
    message: '获取密钥成功',
    data: { pubKey }
  })
})

module.exports = Router
