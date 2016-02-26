'use strict';

var assert = require('assert');
var download = require('./');

describe('test', function(){

  // You should add more tests here
  
  it('test download',function(done) {
    var url = 'http://registry.npmjs.org/version-checker/-/version-checker-0.1.5.tgz';
    download(url, {dest: 'tmp/version-checker.tgz'}, function (err, res) {
      assert.equal(err, undefined);
      assert.ok(res);
      done();
    })
  });

  it('test download and extract',function(done) {
    var url = 'http://registry.npmjs.org/version-checker/-/version-checker-0.1.3.tgz';
    download(url, {ext: true, dest: 'tmp/version-checker-0.1.3.tgz'}, function (err, res) {
      assert.equal(err, undefined);
      assert.ok(res);
      done();
    })
  });

  it('test wrong url',function(done) {
    var url = 'http://registry.npmjs.org/version-checker/-/';
    download(url, function (err, res) {
      assert.equal(res, undefined);
      assert.ok(err);
      done();
    })
  });

  it('test wrong url with extract',function(done) {
    var url = 'http://registry.npmjs.org/version-checker/-/';
    download(url, {ext: true, dest: 'tmp/version-checker-0.1.3.tgz'}, function (err, res) {
      assert.equal(res, undefined);
      assert.ok(err);
      done();
    })
  });
});