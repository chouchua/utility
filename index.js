var mkdir = require('mkdirp');
var path = require('path');
var fs = require('fs');

function utils(){
    
    /**
     * Write information. If content is an object, it will be stringified.
     * @param content
     * @param opt true if you want to append to the file
     */
    this.export = function (path, content, opt){
        if (typeof path !== 'string'){
            console.log('parameter path must be a string');
            return;
        }
        createFolder(path);
        if(typeof content === 'object'){
            content = JSON.stringify(content,null);
        }
        //true if you want to append to target file.
        if(opt){
            fs.appendFileSync(path, content);
        }else{
            fs.writeFileSync(path, content);
        }
    }

    /**
     * Log information and write it to './send/log.txt' or otherwise specified
     * @param content
     * @param location optional parameter, overrides the default destination
     */
    this.logger = function(content, location){
        var fileName = new Date().toISOString();
        var rand = "./logs/" + fileName + ".txt";
        location = location || rand;
         
        if(typeof content === 'object'){
            console.log(JSON.stringify(content));
        }
        else{
            console.log(content);
        }        
        if(process.env.logger){//append to log file
            this.export(location, content + "\n", true);
        }
        else{
            this.export(location, content + "\n");
            process.env.logger = true;
        }
    }
    
    /**
     * @param path
     * @param opt
     */
    this.readFile = function(path, opt){
        console.log('Reading file contents...');
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
     * @param opt flag, true, creates folder if does not exist.
     */
    this.readFolder = function(path, opt){
        
        if(this.ensureDirExists(path)){
            var files = fs.readdirSync(path);
            console.log(String.raw `Folder exists and its contents are: ${files}`);
            return files;
        }
        
        else{
            if(opt!=null){
                //option specified
            }
            console.log("{" + path + "}" + 'Folder does not exist ...');
            return null;
        }
    }

    /**
     * Given a path to folder, check whether it exists or not.
     */
    this.ensureDirExists = function(path) {
        try{
            var obj = fs.statSync(path);
            if(obj.isDirectory()) {
                return true;    
            }
            else {
                console.log('Target exists, but it is not a folder:');  
                return false;
            }
        }
        catch(e) {
            return false;
        }
    }

    /**
     * @param msg msg
     * @param time optional
     */
    this.debug = function log(msg, time){
        let logLineDetails = ((new Error().stack).split("at ")[3]).trim() + '\n   ';
        if(time){
            console.log('DEBUG', new Date().toUTCString(), logLineDetails, msg);
        }
        
        else{
            console.log('DEBUG', logLineDetails, msg);
        }
    }

    this.includeJS = function(jsFile) {
        //vanilla js, inject js into page
        var head = document.head;
        var script=document.createElement('script');
        script.type='text/javascript';
        script.src=jsFile;
        document.head.appendChild(script);
    }

    /**
     * logs the type of object
     * @param target any type of object
     */
    this.typeof = function(target) {
        console.log(Object.prototype.toString.call(target));
    }

    this.createFolder = createFolder;
}

/**
 * Create folders that the path specifies. The path of '/send/it/to/here' will create ['send','send/it','send/it/to'] folders. 
 * Requirement, provide relative path.
 * @param location directory path
 */
function createFolder(location){
    var containsSlash = /\//;
    if(containsSlash.test(location)){
        var folderPath = path.dirname(location);
        mkdir.sync(folderPath);
        return true;
    }
    else{
        mkdir.sync(location);
    }
}

module.exports =  new utils();