var mkdir = require('mkdirp');
var path = require('path');
var fs = require('fs');

function utils(){
    /**
     * Write information. If content is an object, it will be processed accordingly.
     */
    this.export = function (path,content){
        if (typeof path !== 'string'){
            console.log('parameter path must be a string');
            return;
        }
        createFolders(path);
        if(typeof content === 'object'){
            content = JSON.stringify(content,null);
        }
        //
        fs.writeFileSync(path,content);
    }

    /**
     * Log information and write it to './send/log.txt'
     */
    this.logger = function(content){
        console.log(JSON.stringify(content));
        this.export('./send/log.txt', content);
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
    this.logger= function(content){
        console.log(JSON.stringify(content));
        fs.writeFileSync('./send/log.txt',JSON.stringify(content));
    }
}

/**
 * Helper: Given a path to folder, check exists or not.
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