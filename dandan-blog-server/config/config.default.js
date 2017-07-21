'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499761646843_4863';

  // mongoose配置
  config.mongoose = {
    url: 'mongodb://127.0.0.1/dandan_blog',
    options: {},
  };

  // 视图模版
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // 配置csrf
  config.security = {
    ctoken: false,
    csrf: false,
  };

  // cors配置
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return config;
};