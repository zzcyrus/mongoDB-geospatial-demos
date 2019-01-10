
import mongoose from 'mongoose'
import logger from './logger'
import config from '../../config'

const mongodbUrl = config.database.url

mongoose.connect(mongodbUrl, { useNewUrlParser: true })
logger.info(`[Connected to mongo url]: ${mongodbUrl}`)
mongoose.Promise = global.Promise

export default mongoose
