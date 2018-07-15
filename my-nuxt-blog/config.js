const IS_DEV = process.env.NODE_ENV !== 'production'

exports.API_ROOT = IS_DEV ? 'http://localhost:4000/' : 'https://api.jkchao.cn/api/'

// exports.STATIC_PATH = 'https://static.jkchao.cn'
