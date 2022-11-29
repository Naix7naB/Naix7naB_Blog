const express = require('express')
const User = require('../models/User')
const assert = require('http-assert')
const createError = require('http-errors')

const { getPubKey } = require('../core/rsa')
const { encrypt, decrypt, sendToken, handleError } = require('../plugins/utils')

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

// 注册
Router.post('/register', async (req, res, next) => {
  try {
    req.body.password = encrypt(req.body.password)
    const user = await User.create(req.body)
    res.json(sendToken(user, '注册成功'))
  } catch (err) {
    next(createError(422, handleError(err)))
  }
})

// 登录
Router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  const user = await User.findOne({ username }).select('+password')
  assert(user, 422, '用户不存在')
  assert.equal(password, decrypt(user.password), 422, '账号或密码错误')
  res.json(sendToken(user, '登录成功'))
})

module.exports = Router
