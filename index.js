var fs = require('fs');
function utils(){
    /**
     * print object
     */
    this.export = function (location,content){
        var json = JSON.stringify(content);
        fs.writeFileSync(location,json);
    }
    this.logger= function(content){
        console.log(JSON.stringify(content));
        fs.writeFileSync('./send/log.txt',JSON.stringify(content));
    }
}
function ensureDirExists(filePath){
    var dirname = path.dirname(filePath);
    console.log(dirname);
    // fs.mkdirSync(dirname);
}

module.exports =  utils;