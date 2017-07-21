'use strict';

module.exports = app => {
  class UsersController extends app.Controller {

    * index() {
      const userId = this.ctx.params.id;
      const userInfo = yield this.ctx.service.users.find(userId);
      this.ctx.body = userInfo;
    }

    * create() {
      const user = this.ctx.request.body;
      const res = yield this.ctx.service.users.add(user);
      this.ctx.body = res;
    }
  }
  return UsersController;
};