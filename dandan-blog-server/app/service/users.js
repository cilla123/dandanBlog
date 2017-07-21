'use strict';

module.exports = app => {
    class UserService extends app.Service {

        // 查找用户
        * find(uid) {
            let user = '';
            if (uid) {
                user = yield this.ctx.model.User.find({
                    id: uid,
                });
            } else {
                user = yield this.ctx.model.User.find({});
            }
            return user;
        }

        // 添加用户
        * add(user) {
            const User = this.ctx.model.User;
            console.log(User);
            const u = new User(user);
            const userInfo = yield u.save((err) => {
                if(err){
                    console.log('插入失败');
                };
            });
            return userInfo
        }
    }
    return UserService;
};