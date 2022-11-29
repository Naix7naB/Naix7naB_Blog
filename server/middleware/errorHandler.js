const multer = require('multer')

const ERROR_CODE_MAP = {
  LIMIT_FILE_SIZE: '超出文件限制大小',
  LIMIT_FILE_COUNT: '超出文件限制上传数量',
  LIMIT_UNEXPECTED_FILE: '文件上传失败'
}

const ERROR_STATUS_MAP = {
  401: '请先登录后操作',
  403: '暂无权限,请联系管理员'
}

module.exports = options => {
  return (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      err.status = 422
      err.message = ERROR_CODE_MAP[err.code]
    }
    if (err.status in ERROR_STATUS_MAP) {
      err.message = ERROR_STATUS_MAP[err.status]
    }
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500).send({
      code: err.status,
      message: err.message
    })
  }
}
