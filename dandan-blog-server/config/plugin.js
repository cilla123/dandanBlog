'use strict';

// 增加egg-mongoose插件
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// 解决跨域的插件
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 验证插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
