#Mak sensitive

[![Build Status](https://travis-ci.org/jehy/mask-sensitive.svg?branch=master)](https://travis-ci.org/jehy/mask-sensitive)
[![Coverage Status](https://coveralls.io/repos/github/jehy/mask-sensitive/badge.svg?branch=master)](https://coveralls.io/github/jehy/mask-sensitive?branch=master)
[![dependencies Status](https://david-dm.org/jehy/mask-sensitive/status.svg)](https://david-dm.org/jehy/mask-sensitive)
[![devDependencies Status](https://david-dm.org/jehy/mask-sensitive/dev-status.svg)](https://david-dm.org/jehy/mask-sensitive?type=dev)

Masks sensitive data with several different methods.

##Installation
```bash
npm install mask-sensitive
```

##Usage
```js
var
  mask = require('mask-sensitive'),
  password = 'very sensitive data',
  masked = mask(password, {mode: 'secure'});
```
## Modes

* `secure` - return "***";
* `length` - return equal to length number of "*";
* `half` - mask first and last 1/4;
* `every` - mask every third char;
* `middle` - replace middle with "***";

By default, `secure` method is used.

##Important
* All data less then 4 chars will be masked with `secure` mode;
* null is masked as ***.