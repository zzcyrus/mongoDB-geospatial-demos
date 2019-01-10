
import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

function initRouter (app) {
  fs.readdirSync(__dirname).forEach((file) => {
    const modPath = path.join(__dirname, file)
    if (file !== 'shared' && fs.statSync(modPath).isDirectory()) {
      /* eslint-disable import/no-dynamic-require, global-require */
      const router = require(`${modPath}/router`)
      const routes = router.default
      const baseUrl = router.baseUrl

      const instance = new Router({ prefix: baseUrl })

      routes.forEach((config) => {
        const {
          method = '',
          route = '',
          handlers = []
        } = config

        const lastHandler = handlers.pop()

        instance[method.toLowerCase()](route, ...handlers, async (ctx, next) => {
          await lastHandler(ctx, next)
        })

        app.use(instance.routes())
        app.use(instance.allowedMethods())
      })
    }
  })
}

export default initRouter
