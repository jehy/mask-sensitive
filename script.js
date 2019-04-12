'use strict';

function maskLen(data) {
  var i;
  var str = '';
  for (i = 0; i < data.length; i++) {
    str += '*';
  }
  return str;
}

function maskHalf(data) {
  var i;
  var maskNum = data.length / 4;
  data = data.split('');
  for (i = 0; i < maskNum; i++) {
    data[i] = '*';
    data[data.length - i - 1] = '*';
  }
  return data.join('');
}

function maskEvery(data) {
  var i;

  data = data.split('');
  for (i = 0; i < data.length / 3; i++) {
    data[i * 3] = '*';
  }
  return data.join('');
}


function maskMiddle(data) {
  var quarter = data.length / 4;
  return data.substr(0, quarter) + '***' + data.substr(3 * quarter);
}

function maskSecure() {
  return '***';
}
/**
 * @param data{string} string for masking
 * @param [options]{Object} modes: secure (replace with "***"),
 * length(replace with equal number of "*") and half (mask 1/4 of start and 1/4 of end);
 */

function mask(data, options) {
  var maskMe = data;
  if (typeof data !== 'string') {
    maskMe = JSON.stringify(data);
  }
  if (data === null || data === undefined || data.length < 4) {
    return maskSecure();
  }
  if (!options) {
    options = {};
  }
  if (!options.mode) {
    options.mode = 'secure';
  }

  if (options.mode === 'length') {
    return maskLen(maskMe);
  }
  if (options.mode === 'half') {
    return maskHalf(maskMe);
  }
  if (options.mode === 'every') {
    return maskEvery(maskMe);
  }
  if (options.mode === 'middle') {
    return maskMiddle(maskMe);
  }
  return maskSecure();
}

module.exports = mask;
