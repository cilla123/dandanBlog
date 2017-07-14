'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        * index(){
            this.ctx.body = yield this.ctx.model.User.find({});
        }
    }   
    return UserController;
}