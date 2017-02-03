'use strict';
var mask = require('../script');

describe('maskSensitive', function () {

  it('should mask without params', function (done) {
    var data = 'sensitive';
    var masked = mask(data);
    if (masked !== '***')
      done('not masked without params!');
    else done();

  });


  it('should mask objects', function (done) {
    var data = {'smth': 'sensitive'};
    var masked = mask(data);
    if (masked !== '***')
      done('object not masked!');
    else done();

  });


  it('should mask with length mode', function (done) {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'length'});
    if (masked !== '**************')
      done('Not masked with length!');
    else done();
  });


  it('should mask with half mode', function (done) {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'half'});
    if (masked !== '****itive ****')
      done('Not masked with half mode!');
    else
      done();

  });

  it('should mask with every mode', function (done) {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'every'});
    if (masked !== '*en*it*ve*da*a')
      done('Not masked with half mode!');
    else
      done();
  });


  it('should mask with middle mode', function (done) {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'middle'});
    if (masked !== 'sen***data')
      done('Not masked with middle mode!');
    else
      done();
  });


  it('should mask null values', function (done) {
    var data = null;
    var fail = false;
    var masked = mask(data, {mode: 'middle'});
    if (masked !== '***') {
      done('Not masked with middle mode! (result was '+masked+')');
      return;
    }

    masked = mask(data, {mode: 'every'});
    if (masked !== '***') {
      done('Not masked with every mode! (result was '+masked+')');
      return;
    }
    masked = mask(data, {mode: 'secure'});
    if (masked !== '***') {
      done('Not masked with secure mode! (result was '+masked+')');
      return;
    }
    masked = mask(data, {mode: 'half'});
    if (masked !== '***') {
      done('Not masked with half mode! (result was '+masked+')');
      return;
    }
    masked = mask(data, {mode: 'length'});
    if (masked !== '***') {
      done('Not masked with length mode! (result was '+masked+')');
      return;
    }
    done();
  });


  it('should mask with middle mode', function (done) {
    var data = 'sensitive data';
    var masked = mask(data, {mode: 'middle'});
    if (masked !== 'sen***data')
      done('Not masked with middle mode!');
    else
      done();
  });


  it('should mask less then three chars with ***', function (done) {
    var data = 'a';
    var fail = false;
    var masked = mask(data, {mode: 'middle'});
    if (masked !== '***') {
      done('Not masked with middle mode! (result was '+masked+')');
      return;
    }

    masked = mask(data, {mode: 'every'});
    if (masked !== '***') {
      done('Not masked with every mode! (result was '+masked+')');
      return;
    }
    masked = mask(data, {mode: 'secure'});
    if (masked !== '***') {
      done('Not masked with secure mode! (result was '+masked+')');
      return;
    }
    masked = mask(data, {mode: 'half'});
    if (masked !== '***') {
      done('Not masked with half mode! (result was '+masked+')');
      return;
    }
    masked = mask(data, {mode: 'length'});
    if (masked !== '***') {
      done('Not masked with length mode! (result was '+masked+')');
      return;
    }
    done();
  });


});