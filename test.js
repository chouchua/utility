var utility = require('./index');
utility.debug("ah");
utility.logger('loggggg');
//create few files...
utility.export('./test.txt', 'content...');
utility.export('./test/test.txt', 'content...');
utility.export('./test/test1.txt', 'content...');
utility.export('./test/test2.txt', 'content...');
var obj = {jimmy: "chou"};
utility.logger(obj);
utility.logger(obj);
utility.typeof(obj);
utility.export('./test/test3.txt', obj);
utility.export('./test/test4.txt', 'content...');

var fs = require('fs');
var path = require('path');
var result = null;

result = utility.createFolder('./testfolder/testfolder');
if(result) {
    utility.logger(result);
}

result = utility.createFolder('./testfolder');
if(result) {
    utility.logger(result);
}
//read the files created.
result = utility.readFolder("./package.json");
if (result){
    //Target exists, but is not a folder.
    utility.logger(result);
}
utility.debug("ah");

//function: readFolder
var result = utility.readFolder("./test");
if (result){
    //Folder exists, 
    utility.logger(result);
}

//function: readFile
result = utility.readFile("test/test1.txt");
if(result){
    utility.logger(result);
}

var test_lifecycle = require('./test_lifecycle');
process.exit();