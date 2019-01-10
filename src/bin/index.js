
import Koa from 'koa'
import koaLogger from 'koa-logger'
import logger from '../utils/logger'
import initRouter from '../modules'
import config from '../../config'

const app = new Koa()

app.use(koaLogger())

initRouter(app)

const init = async () => {
  try {
    app.listen(config.port, () => {
      logger.info(`[SERVER RUNNING][${config.port}]`)
    })
  } catch (err) {
    logger.error(`[ERROR][${err || err.stack}]`)
  }
}

init()

export default app
