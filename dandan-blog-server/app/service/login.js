/**
 * Created by ben on 2017/7/21.
 */
'use strict';

module.exports = app => {
  class LoginService extends app.Service {

    // 检查用户是否存在
    * checkUser(phone) {
      const isExist = yield this.ctx.model.User.find({
        phone: phone
      });
      return isExist.length != 0 ? true : false;
    }

    // 添加用户
    * add(user) {

    }
  }
  return LoginService;
};