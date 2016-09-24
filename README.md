# load-directory

[![CircleCI](https://img.shields.io/circleci/project/suddi/load-directory.svg?maxAge=2592000)](https://circleci.com/gh/suddi/load-directory)
[![codecov](https://codecov.io/gh/suddi/load-directory/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/load-directory)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46408c666119432abee43f991b79cc68)](https://www.codacy.com/app/suddir/load-directory?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=suddi/load-directory&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/load-directory.svg?maxAge=2592000)](https://www.npmjs.com/package/load-directory)
[![license](https://img.shields.io/github/license/suddi/load-directory.svg?maxAge=2592000)](https://github.com/suddi/load-directory/blob/master/LICENSE)

[![codecov](https://codecov.io/gh/suddi/load-directory/branch/master/graphs/commits.svg)](https://codecov.io/gh/suddi/load-directory)

````
npm install load-directory
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
const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.lowerCase
});
console.log(Utils);
// { generate_filename: [Function],
//   predict_value: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.upperCase
});
console.log(Utils);
// { GENERATE_FILENAME: [Function],
//   PREDICT_VALUE: [Function],
//   TEMPLATES: { STANDARD: [Function], ULTIMATE: [Function] } }

const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.snakeCase
});
console.log(Utils);
// { generate_filename: [Function],
//   predict_value: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.camelCase
});
console.log(Utils);
// { generateFilename: [Function],
//   predictValue: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.pascalCase
});
console.log(Utils);
// { GenerateFilename: [Function],
//   PredictValue: [Function],
//   Templates: { Standard: [Function], Ultimate: [Function] } }

const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.functionCase
});
console.log(Utils);
// { generateFilename: [Function],
//   predictValue: [Function],
//   Templates: { standard: [Function], ultimate: [Function] } }
````
