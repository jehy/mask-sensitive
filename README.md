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
## Modes

* secure - return "***"
* length - return equal to length number of "*"
* half - mask first and last 1/4
* every - mask every third char
* middle - mask middle with "***"