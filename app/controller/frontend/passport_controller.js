const Controller = require('egg').Controller;

class PassportController extends Controller {
  async authCallback() {
    this.ctx.body = 'Hello world@passport.authCallback';
  }

  async login() {
    const ctx = this.ctx;
    const value = `<a href="http://www.domain.com">google</a><script>evilcode…</script>`;

    await ctx.render('frontend/passport/login.nj', {value});
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.query['return_to'] || '/');
  }
}

module.exports = PassportController;
