# load-directory

[![CircleCI](https://img.shields.io/circleci/project/suddi/load-directory/master.svg)](https://circleci.com/gh/suddi/load-directory)
[![codecov](https://codecov.io/gh/suddi/load-directory/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/load-directory)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46408c666119432abee43f991b79cc68)](https://www.codacy.com/app/suddir/load-directory)
[![npm](https://img.shields.io/npm/v/load-directory.svg)](https://www.npmjs.com/package/load-directory)
[![npm](https://img.shields.io/npm/dt/load-directory.svg)](https://www.npmjs.com/package/eslint-config-suddi)
[![Greenkeeper badge](https://badges.greenkeeper.io/suddi/load-directory.svg)](https://greenkeeper.io/)
[![David](https://img.shields.io/david/suddi/load-directory.svg)](https://david-dm.org/suddi/load-directory)
[![David](https://img.shields.io/david/dev/suddi/load-directory.svg)](https://david-dm.org/suddi/load-directory?type=dev)
[![license](https://img.shields.io/github/license/suddi/load-directory.svg)](https://raw.githubusercontent.com/suddi/load-directory/master/LICENSE)

[![codecov](https://codecov.io/gh/suddi/load-directory/branch/master/graphs/commits.svg)](https://codecov.io/gh/suddi/load-directory)

````
npm install --save load-directory
````

## API

````js
const Require = require('load-directory');

Require.all(<path-to-directory>, <options>);
````

Default configuration, can be overwritten with user-defined options:
````js
{
    filter: /^((?!index).+)*\..*$/,                         // index.js will be ignored by default
    excludeDirs: /^\.(git|svn)$/,                           // .git, .svn directories will be ignored by default
    recursive: true,                                        // true, if files are to be required by traversing nested directories
    map: module.exports.Strategies.Filename.pascalCase,     // pascalCase will be applied by default
    resolve: function (func) {                              // resolving of files will be simply return module.exports by default
        return func;
    }
};
````

## Usage

````js
const Require = require('load-directory');

Require.all(__dirname, {
    excludeDirs :  /^primitive$/,                   // will exclude the directory "primitive"
    map: Require.Strategies.Filename.pascalCase     // will use Pascal Case to map the required filenames
});
````

A few strategies are provided on requiring files and setting filenames on require
eg. Given the file structure:
````
.
└── utils
    ├── generate_filename.js
    └── predict_value.js
    └── templates
        └── standard.js
        └── ultimate.js
````

## Examples using strategies

````js
const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.lowerCase
});
console.log(Utils);
// { generate_filename: [Function],
//   predict_value: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.upperCase
});
console.log(Utils);
// { GENERATE_FILENAME: [Function],
//   PREDICT_VALUE: [Function],
//   TEMPLATES: { STANDARD: [Function], ULTIMATE: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.dotCase
});
console.log(Utils);
// { 'generate.filename': [Function],
//   'predict.value': [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.headerCase
});
console.log(Utils);
// { 'Generate-Filename': [Function],
//   'Predict-Value': [Function],
//   Templates: { Standard: [Function], Ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.paramCase
});
console.log(Utils);
// { 'generate-filename': [Function],
//   'predict-value': [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.sentenceCase
});
console.log(Utils);
// { 'Generate filename': [Function],
//   'Predict value': [Function],
//   Templates: { Standard: [Function], Ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.snakeCase
});
console.log(Utils);
// { generate_filename: [Function],
//   predict_value: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.camelCase
});
console.log(Utils);
// { generateFilename: [Function],
//   predictValue: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.pascalCase
});
console.log(Utils);
// { GenerateFilename: [Function],
//   PredictValue: [Function],
//   Templates: { Standard: [Function], Ultimate: [Function] } }

const Utils = Require.all(__dirname + 'utils', {
    map: Require.Strategies.Filename.functionCase
});
console.log(Utils);
// { generateFilename: [Function],
//   predictValue: [Function],
//   Templates: { standard: [Function], ultimate: [Function] } }
````

For more workable examples, please see [fixtures](test/integration/fixtures).

