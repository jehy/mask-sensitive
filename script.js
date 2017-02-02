'use strict';

var maskLen = function (data) {
  var str = '';
  for (var i = 0; i < data.length; i++)
    str += '*';
  return str;
};

var maskHalf = function (data) {

  if (data.length < 4)
    return maskLen(data);
  var i;
  var maskNum = data.length / 4;
  data = data.split('');
  for (i = 0; i < maskNum; i++)
    data[i] = '*';
  for (i = 0; i < maskNum; i++)
    data[data.length - i - 1] = '*';
  return data.join('');
};

var maskEvery = function (data) {
  if (data.length < 3)
    return maskSecure(data);

  data = data.split('');
  for (var i = 0; i < data.length / 3; i++)
    data[i * 3] = '*';
  return data.join('');
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
  else//if(options.mode==='secure')
    return maskSecure(maskMe);
};

module.exports = mask;