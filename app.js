module.exports = app => {
  app.once('server', server => {
    // websocket
  });

  app.on('error', (err, ctx) => {
    // report error
  });

  app.on('request', ctx => {
    // log receive request
  });

  app.on('response', ctx => {
    ctx.logger.info(`${ctx.response.status} ${ctx.response.message}`)
  });
};
