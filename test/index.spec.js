const MyEnv = require('../');
const expect = require('chai').expect;
const path = require('path').resolve(__dirname, './ecosystem.config.js');

describe('my-env', () => {
  describe('before', () => {
    it('process.env should not be set', () => {
      expect(process.env.MONGO_DB).to.be.undefined;
    });
  });
  describe('after', () => {
    beforeEach(() => {
      MyEnv({
        path: path
      })
    });

    it('process.env should be set', () => {
      expect(process.env.MONGO_DB).to.be.eql('MONGO_DB_production');
    });
  });
});