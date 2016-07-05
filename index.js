var mkdir = require('mkdirp');
var path = require('path');
var fs = require('fs');

function utils(){
    
    /**
     * Write information. If content is an object, it will be processed accordingly.
     * @param
     * @param content
     * @param opt true if you want to append to the file
     */
    this.export = function (path,content,opt){
        if (typeof path !== 'string'){
            console.log('parameter path must be a string');
            return;
        }
        createFolders(path);
        if(typeof content === 'object'){
            content = JSON.stringify(content,null);
        }
        //true if you want to append to target file.
        if(opt){
            fs.appendFileSync(path,content);
        }else{
            fs.writeFileSync(path,content);
        }
    }

    /**
     * Log information and write it to './send/log.txt' or otherwise specified
     * @param content
     * @param location optional parameter, overrides the default destination
     */
    this.logger = function(content,location){
        var location = location || './send/log.txt';
        if(typeof content === 'object'){
            console.log(JSON.stringify(content));
        }
        else{
            console.log(content);
        }        
        if(process.logger){
            this.export(location, content, true);
        }
        else{
            this.export(location, content);
            process.logger = true;
        }
    }
    
    /**
     * 
     */
    this.readFile = function(path,opt){
        console.log('reading file contents');
        try{
            return fs.readFileSync(path);
        }
        catch(e){
            console.log('File does not exist');
            return;
        }
    }

    /**
     * Read the content specified by the path
     * @param path the path to the file
     * @param opt create folder if does not exist.
     */
    this.readFolder = function(path,opt){
        
        if(ensureDirExists(path)){
            var files = fs.readdirSync(path);
            console.log(String.raw `Folder exists and its contents are: ${files} exist`);
            return files;
        }
        
        else{
            if(opt!=null){
                console.log('option specified');
            }
            console.log('Folder does not exist ...');
            return null;
        }
    }
}

/**
 * Helper: Given a path to folder, check whether it exists or not.
 */
function ensureDirExists(path){
    try{
        var obj = fs.statSync(path);
        if(obj.isDirectory()){
            return true;    
        }
        else{
            console.log('Target exists, but it is not a folder:');  
            return false;
        }
    }
    catch(e){
        return false;
    }
}

/**
 * Create folders that the path specifies. Eg. The path of '/send/it/to/here' will create ['send','send/it','send/it/to'] folders. 
 */
function createFolders(location){
    var folderPath = path.dirname(location);
    mkdir.sync(folderPath);
}

module.exports =  new utils();