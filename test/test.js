'use strict';

var mask = require('../script');
var assert = require('chai').assert;

describe('maskSensitive', function () {

  it('should mask without params', function () {
    var data = 'sensitive';
    var masked = mask(data);
    assert.equal(masked, '***');
  });


  it('should mask objects', function () {
    var data = {smth: 'sensitive'};
    var masked = mask(data);
    assert.equal(masked, '***');
  });


  it('should mask with length mode', function () {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'length'});
    assert.equal(masked, '**************');
  });


  it('should mask with half mode', function () {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'half'});
    assert.equal(masked, '****itive ****');
  });

  it('should mask with every mode', function () {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'every'});
    assert.equal(masked, '*en*it*ve*da*a');
  });


  it('should mask with middle mode', function () {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'middle'});
    assert.equal(masked, 'sen***data');
  });


  it('should mask null values', function () {
    var data = null;
    var masked = mask(data, {mode: 'middle'});
    assert.equal(masked, '***');

    masked = mask(data, {mode: 'every'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'secure'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'half'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'length'});
    assert.equal(masked, '***');
  });

  it('should mask less then three chars with ***', function () {
    var data = 'a';
    var masked = mask(data, {mode: 'middle'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'every'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'secure'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'half'});
    assert.equal(masked, '***');
    masked = mask(data, {mode: 'length'});
    assert.equal(masked, '***');
  });


});
