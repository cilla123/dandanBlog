/**
 * Created by ben on 2017/7/21.
 */
'use strict';
const mm = require('egg-mock');
const assert = require('assert');

describe('test/app/controller/login.test.js', () => {

  const apiVersion = '/api/v1'

  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /login/new', () => {
    const phone = 15217681427 // 电话
    const isExist = true // 用户是否存在
    if(isExist){
      return app.httpRequest()
        .get(`${apiVersion}/login/new?phone=${phone}`)
        .expect({
          errorCode: 200,
          data: true,
          msg: '用户已存在'
        });
    }else{
      return app.httpRequest()
        .get(`${apiVersion}/login/new?phone=${phone}`)
        .expect({
          errorCode: 200,
          data: false,
          msg: '用户不存在'
        });
    }

  });
});