export default {
  port: 9988,
  database: {
    url: 'mongodb://localhost/lbs'
  },
  logger: {
    appenders: {
      cheese: {
        type: 'console'
      }
    },
    categories: {
      default: {
        appenders: ['cheese'],
        level: 'debug'
      }
    }
  }
}
