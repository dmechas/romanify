# romanify [![Build Status](https://travis-ci.org/goblindegook/romanify.svg?branch=master)](https://travis-ci.org/goblindegook/romanify)

Convert Arabic-Indic numerals to their Roman equivalents.

## Install

```
$ npm install --save romanify
```

## Usage

ECMAScript 5:

```js
var romanify = require('romanify').default

romanify(2016) // => 'MMXVI'
romanify(0)    // => Error
```

ECMAScript 2015+:

```js
import romanify from 'romanify'

romanify(2016) // => 'MMXVI'
romanify(0)    // => Error
```

## License

MIT © [Luís Rodrigues](https://github.com/goblindegook)
