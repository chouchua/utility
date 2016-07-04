var utility = require('./index');

//create few files...
utility.export('./test.txt','content...');
utility.export('./send/test1.txt','content...');
utility.export('./send/test2.txt','content...');
var obj = {jimmy:"chou"};
utility.export('./send/test3.txt',obj);
utility.export('./send/test4.txt','content...');

var fs = require('fs');
var path = require('path');
// console.log(fs.statSync("send"));
//read the files created.
var result = utility.readFolder("./package.json");
if (result){
    console.log(result);
}
var result2 = utility.readFolder("./send");
if (result2){
    console.log(result2);
}

var result3 = utility.readFile("test1.txt");
if(result3){
    console.log('undefinedasdf');
}

var result4 = utility.readFile("send/test1.txt");
if(result4){
    console.log(result4);
}
process.exit();