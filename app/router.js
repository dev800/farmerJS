// app/router.js
module.exports = app => {
  require('./router/frontend')(app);
  require('./router/admin')(app);
};
