# my-wget

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

```
npm install --save my-wget
```

## Usage

### download(url, [options], cb);

`option`:

* `dest` (**string**): destination of the downloaded file.
* `ext` (**boolean**): extract file

```js
var download = require('my-wget');

var url = 'path to file';
download(url, {dest: 'path to destination', ext: false}, function (err, res) {
  // do something
})

// Or just omit the option, so it will download it into the current directory
download(url, function (err, res) {
  // do something
})
```

## Created with
[Yeoman](https://npmjs.org/package/yo) and [Generator-simple-package](https://npmjs.org/package/generator-simple-package)

## License
MIT © [NghiaTTran](https://github.com/nghiattran)

[npm-image]: https://badge.fury.io/js/my-wget.svg
[npm-url]: https://npmjs.org/package/my-wget
[travis-image]: https://travis-ci.org/nghiattran/my-wget.svg?branch=master
[travis-url]: https://travis-ci.org/nghiattran/my-wget
[daviddm-image]: https://david-dm.org/nghiattran/my-wget.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nghiattran/my-wget
[coveralls-image]: https://coveralls.io/repos/nghiattran/my-wget/badge.svg
[coveralls-url]: https://coveralls.io/github/nghiattran/my-wget
