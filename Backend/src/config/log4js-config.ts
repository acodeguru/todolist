const config = {
  appenders: {
    app: {
      type: 'dateFile',
      filename: process.env.LOG_LOCATION + process.env.FILE_SEPERATOR + process.env.LOG_FILE_NAME_JS,
      layout: {
        type: 'pattern',
        pattern: `{ "timestamp": "%d{ISO8601_WITH_TZ_OFFSET}", "level": "%p", "service": "${process.env.SERVICE_NAME}", ` +
          `"container": "${process.env.CONTAINER_NAME}", "message": %x{message}%x{user}%x{resolver} }`,
        tokens: {
          user: function (logEvent) {
            const data = logEvent.data[1];
            if (data && data.user) {
              return `, "user": "${data.user}"`
            } else {
              return '';
            }
          },
          resolver: function (logEvent) {
            const data = logEvent.data[1];
            if (data && data.resolver) {
              return `, "resolver": "${data.resolver}"`
            } else {
              return '';
            }
          },
          message: function (logEvent) {
            return logEvent.data[0] ? `${JSON.stringify(logEvent.data[0])}` : '""';
          },
        }
      }
    }
  },
  categories: {
    default: {
      appenders: ['app'],
      level: process.env.LOG_LEVEL
    }
  }
}

export default config;