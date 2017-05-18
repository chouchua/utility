var utility = require('./index');
utility.createFolder('newfolder');
//create few files...
utility.export('./test/test.txt', 'content...');
utility.export('./test/test1.txt', 'content...');
utility.export('./test/test2.txt', 'content...');
var obj = {jimmy: "chou"};
utility.typeof(obj);
utility.export('./test/test3.txt', obj);
utility.export('./test/test4.txt', 'content...');

var fs = require('fs');
var path = require('path');
// console.log(fs.statSync("send"));
//read the files created.
var result = utility.readFolder("./package.json");
if (result){
    //Target exists, but is not a folder.
    utility.logger(result);
}
utility.debug("ah");

//function: readFolder
var result2 = utility.readFolder("./test");
if (result2){
    //Folder exists, 
    utility.logger(result2);
}

//function: readFile
var result3 = utility.readFile("test/test1.txt");
if(result3){
    utility.logger(result3);
}

var result4 = utility.readFile("test/test1.txt");
if(result4){
    utility.logger(result4);
}

var test_lifecycle = require('./test_lifecycle');
process.exit();