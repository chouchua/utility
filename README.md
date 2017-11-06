# File utility for node programs

Utility functions for file system, debugging, logging your Node.js application.

[![npm version][npm-image]][npm-url]
[![npm downloads][downloads-image]][npm-url]

## Installation

First ensure that you have Node.js installed and then run the following:

Note: I would love to hear from the people downloading this package about their reasons and what improvements they would like to see. Feel free to contact me at chuankengchou@gmail.com
```bash
npm install utilityFileSystem
```

## Usage

Require the module for an instance of `utilityFileSystem`

### Example 1: Write some content to a file

```js
var utility = require('./utilityFileSystem');

//create few files...
utility.export('./sample.txt','content...');
```

Output:

```bash
Created file: ./sample.txt
```

### Example 2: Read the contents of a file

```js
var utility = require('./utilityFileSystem');

utility.readFile("./sample.txt");
```

Output:

```bash
Reading file contents from ./sample.txt
```

### Example 3: Read the contents of a folder

```js
var utility = require('./utilityFileSystem');

utility.readFolder("./package.json");
utility.readFolder("./sample");
```

Output:

```js
./package.json Target exists, but it is not a folder...use utility.readFile() instead.
./sample Folder exists and its contents are: test.txt,test1.txt,test2.txt,test3.txt,test4.txt
```

### Example 4: Log files

```js
var obj = {jimmy: "chou"};
utility.logger(obj);
```

Output:

```js
{"jimmy":"chou"}
Created file: ./logs/2017-11-06T02:00:29.297Z.txt
```

## Tests

To run the test suite, first install any dependencies and then run `npm test`:

```bash
npm install
npm test
```

## Things to note

The logging capability is aware of the process running. For example, if there is an existing logging file, any new instance of fileUtility will append to the existing.

[npm-url]: https://www.npmjs.com/package/utilityFileSystem
[npm-image]: https://img.shields.io/npm/v/utilityFileSystem.svg
[downloads-image]: https://img.shields.io/npm/dt/utilityFileSystem.svg
