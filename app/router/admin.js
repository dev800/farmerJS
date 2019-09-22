module.exports = app => {
  app.router.get('/admin', app.controller.admin.homeController.index);
};
