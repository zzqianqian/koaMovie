const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(async (ctx, next) => {
  let title = 'hello koa2 success'
  await ctx.render('egsPlug', {
    title
  })
  await next()
})
app.listen(4455)
