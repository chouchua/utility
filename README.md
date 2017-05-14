#File utility for node programs

##Test:
npm test: run test.js to try out functionality.

##Usage:
Require the module for an instance of utility
```html
var utility = require('./utilityFileSystem');
//create few files...
utility.export('./test.txt','content...');
utility.export('./send/test1.txt','content...');

//read the files created.
var result = utility.readFolder("./package.json");
var result2 = utility.readFile("test1.txt");
```
##How to install:
npm install utilityFileSystem

##Things to note
The logging capability is aware of the process running. For example, if there is an existing logging file, any new instance of fileUtility will append to the existing.