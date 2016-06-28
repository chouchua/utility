var utils = require('./index');
var utility = new utils();
 

//create few files...
utility.export('./send/test.txt','content...');
utility.export('./send/test1.txt','content...');
utility.export('./send/test2.txt','content...');

var fs=require('fs');
var path = require('path');
// console.log(fs.statSync("send"));
//read the files created.
utility.readFolder("send");