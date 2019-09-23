module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    return user;
  });
  app.passport.serializeUser(async (ctx, user) => { });
  app.passport.deserializeUser(async (ctx, user) => { });

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
