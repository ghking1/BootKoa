const router = require('koa-router')()

module.exports = router

router.get('/wxqr', async (ctx, next) => {
    ctx.body = "hi"
})
