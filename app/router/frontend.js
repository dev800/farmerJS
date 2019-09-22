module.exports = app => {
  app.router.get('/', app.controller.frontend.homeController.index);
};
