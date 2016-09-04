# node-require

````
npm install @suddi/require
````

## Usage

````js
const Require = require('@suddi/require');

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

````
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
    map: Require.Strategies.Filename.pascalCase
});
console.log(Utils);
// { GenerateFilename: [Function],
//   PredictValue: [Function],
//   Templates: { Standard: [Function], Ultimate: [Function] } }


const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.camelCase
});
console.log(Utils);
// { generateFilename: [Function],
//   predictValue: [Function],
//   templates: { standard: [Function], ultimate: [Function] } }

const Utils = Require.all(__dirname + '/utils', {
    map: Require.Strategies.Filename.functionCase
});
console.log(Utils);
// { generateFilename: [Function],
//   predictValue: [Function],
//   Templates: { standard: [Function], ultimate: [Function] } }
````
