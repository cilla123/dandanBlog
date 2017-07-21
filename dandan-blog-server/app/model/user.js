'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    id: Number,     // 用户id
    nickName: String,   // 用户的昵称
    username: String, // 用户名
    age: String, // 用户年龄
    address: String, // 用户地址
    password: String, // 用户密码
    phone: String, // 用户手机
    description: String, // 用户描述
    meta: {     // 创建时间与更新时间
      createAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
        default: Date.now(),
      },
    },
  });

  return mongoose.model('User', UserSchema);
};

