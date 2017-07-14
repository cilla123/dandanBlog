'use strict';

module.exports = app => {
  app.get('/user', 'user.index');
};
