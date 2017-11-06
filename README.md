# File utility for node programs

Utility functions for file system, debugging, logging your Node.js application.

## Test

`npm test` to try out functionality.

## Usage

Require the module for an instance of `utilityFileSystem`

### Example 1: Write content to a file

```js
var utility = require('./utilityFileSystem');

//create few files...
utility.export('./test.txt','content...');
```

Output:

```js
Created file: ./test.txt
```

### Example 2: Read the content of a file

```js
var utility = require('./utilityFileSystem');

utility.readFile("./test.txt");
```

Output:

```js
Reading file contents from test/test1.txt
```

### Example 3: Read the contents of a folder

```js
utility.readFolder("./package.json");
utility.readFolder("./test");
```

Output:

```js
./package.json Target exists, but it is not a folder...use utility.readFile() instead.
./test Folder exists and its contents are: test.txt,test1.txt,test2.txt,test3.txt,test4.txt
```

### Example 3: log files

```js
<placeholder>
```

## Methods

## How to install

```sh
npm install utilityFileSystem
```

## Things to note

The logging capability is aware of the process running. For example, if there is an existing logging file, any new instance of fileUtility will append to the existing.
