/**
 * Created by ben on 2017/7/21.
 */
'use strict';

module.exports = app => {
  class LoginController extends app.Controller {

    * index() {
      // const userId = this.ctx.params.id;
      // const userInfo = yield this.ctx.service.users.find(userId);
      // this.ctx.body = userInfo;
    }

    * new() {
      const phone = this.ctx.query.phone
      const isExist = yield this.ctx.service.login.checkUser(phone)
      if(isExist){
        this.ctx.body = {
          errorCode: 200,
          data: isExist,
          msg: '用户已存在'
        }
      }else{
        this.ctx.body = {
          errorCode: 200,
          data: isExist,
          msg: '用户不存在'
        }
      }
    }

    * create() {

    }
  }
  return LoginController;
};

