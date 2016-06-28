//var path = require
var mkdir = require('mkdirp');
var path = require('path');
var fs = require('fs');
function utils(){
    /**
     * print object
     */
    this.export = function (path,content){
        if (typeof path !== 'string'){
            console.log('parameter path must be a string');
            return;
        }
        //ensureDirExists(content);
        createFolders(path);
        var json = JSON.stringify(content);
        fs.writeFileSync(path,json);
    }
    /**
     * 
     */
    this.logger = function(content){
        console.log(JSON.stringify(content));
        this.export('./send/log.txt', content);
    }
    /**
     * 
     */
    this.readFolder = function(path){
        if(ensureDirExists(path)){
            var files = fs.readdirSync(path);
            console.log(files);
        }
        //create the folders.
        else{
            console.log('folder does not exist');
        }
    }
}

function ensureDirExists(path){
    try{
        var obj = fs.statSync(path);
        return true;
    }
    catch(e){
        return false;
    }
}

function createFolders(location){
    var temp = path.dirname(location);
    mkdir.sync(temp);
}

module.exports =  utils;