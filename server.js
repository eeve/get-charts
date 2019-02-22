const Koa = require('koa')
const serve = require('koa-static2')
const path = require('path')

const url = require('url')
const { PORT = 8080 } = process.env

const app = new Koa()

function acceptsHtml (header) {
  return header.indexOf('text/html') !== -1 || header.indexOf('*/*') !== -1
}

app.use(function (ctx, next) {
  const headers = ctx.headers
  const reqUrl = ctx.url
  const method = ctx.method

  if (method !== 'GET') {
    return next()
  }
  if (!headers || typeof headers.accept !== 'string') {
    return next()
  }
  if (headers.accept.indexOf('application/json') === 0) {
    return next()
  }

  if (!acceptsHtml(headers.accept)) {
    return next()
  }

  const parsedUrl = url.parse(reqUrl)

  if (parsedUrl.pathname.indexOf('.') !== -1) {
    return next()
  }

  ctx.url = '/index.html'

  return next()
})

app.use(serve('/', path.resolve(__dirname, './app')))

app.listen(PORT)
console.log('服务已启动: ' + PORT)
