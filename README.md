# load-directory

[![CircleCI](https://circleci.com/gh/suddi/load-directory/tree/master.svg?style=svg)](https://circleci.com/gh/suddi/load-directory/tree/master) [![codecov](https://codecov.io/gh/suddi/load-directory/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/load-directory)


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
// { generate_filename: [Function],
//   predict_value: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

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
