const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    let title = 'hello koa2 success'
    await ctx.render('egsPlug', {
      title
    })
  } else if (ctx.request.path === '/one') {
    let title = 'hello koa2 success Two'
    await ctx.render('1', {
      title
    })
    //   ctx.response.body = 'list'
  }
  await next()
})
app.listen(4465)
