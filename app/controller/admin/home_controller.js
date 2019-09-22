const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world@admin';
  }
}

module.exports = HomeController;
