module.exports = app => {
  const { router, controller, passport } = app;

  router.get('/', controller.frontend.homeController.index);
  router.get('/logout', controller.frontend.passportController.logout);
  router.get('/login', controller.frontend.passportController.login);
  router.post('/login', passport.authenticate('local', { successRedirect: '/auth/callback' }));
  router.get('/auth/callback', controller.frontend.passportController.authCallback);
};
