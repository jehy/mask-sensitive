'use strict';

var maskLen = function (data) {
  var str = '';
  for (var i = 0; i < data.length; i++)
    str += '*';
  return str;
};

var maskHalf = function (data) {
  var maskNum = data.length / 4;
  data = data.split('');
  for (var i = 0; i < maskNum; i++) {
    data[i] = '*';
    data[data.length - i - 1] = '*';
  }
  return data.join('');
};

var maskEvery = function (data) {

  data = data.split('');
  for (var i = 0; i < data.length / 3; i++)
    data[i * 3] = '*';
  return data.join('');
};


var maskMiddle = function (data) {
  var quarter = data.length / 4;
  return data.substr(0, quarter) + '***' + data.substr(3 * quarter);
};

var maskSecure = function (data) {
  return '***';
};
/**
 * @param data{string} string for masking
 * @param [options]{Object} modes: secure (replace with "***"), length(replace with equal number of "*") and half (mask 1/4 of start and 1/4 of end);
 */

var mask = function (data, options) {
  var maskMe = data;
  if (typeof data !== 'string') {
    maskMe = JSON.stringify(data);
  }
  if (data === null || data === undefined || data.length < 4)
    return maskSecure(data);
  if (options === undefined)
    options = {};
  if (options.mode === undefined)
    options.mode = 'secure';

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
  else//if(options.mode==='secure')
    return maskSecure(maskMe);
};

module.exports = mask;