'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499761646843_4863';

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1/dandan_blog',
    options: {}
  }


  return config;
};
