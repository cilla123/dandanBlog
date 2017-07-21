'use strict';
const mm = require('egg-mock');
const assert = require('assert');

describe('test/app/controller/user.test.js', () => {
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

    it('should GET /user', () => {
        return app.httpRequest()
            .get('/user')
            .expect(200);
    });
});