#Mak sensitive

[![Build Status](https://travis-ci.org/jehy/mask-sensitive.svg?branch=master)](https://travis-ci.org/jehy/mask-sensitive)

Masks sensitive data with several options

##Installation
```bash
npm install mask-sensitive
```

##Usage
```js
var
  mask          = require('mask-sensitive'),
  password='very sensitive data',
  masked=mask(password,{mode:'secure'})
```
## Arguments
```js
/**
 * @param data{string} string for masking
 * @param [options]{Object} modes: secure (replace with "***"), length(replace with equal number of "*") and half (mask 1/4 of start and 1/4 of end);
 */
```