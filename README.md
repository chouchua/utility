# File utility for node programs
Utility functions for file system, debugging, logging your Node.js application.

## Test:
`npm test` to try out functionality.

## Usage:
Require the module for an instance of utilityFileSystem
Example 1: write content to file
```js
var utility = require('./utilityFileSystem');
//create few files...
utility.export('./test.txt','content...');
utility.readFile("./test.txt");
```
output:
```js
Created file: ./test.txt
Reading file contents from test/test1.txt
```

Example 2: read folder
```js
utility.readFolder("./package.json");
utility.readFolder("./test");
```
output:
```JS
./package.json Target exists, but it is not a folder...use utility.readFile() instead.
./test Folder exists and its contents are: test.txt,test1.txt,test2.txt,test3.txt,test4.txt
```

Example 3: log files
## Methods:

## How to install:
npm install utilityFileSystem

## Things to note
The logging capability is aware of the process running. For example, if there is an existing logging file, any new instance of fileUtility will append to the existing.