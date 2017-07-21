'use strict';

module.exports = app => {

  const API_NAME = '/api/v1'

  // 登录
  app.resources('login', `${API_NAME}/login`, 'login');

  // 用户
  app.resources('users', `${API_NAME}/users`, 'users');
};
