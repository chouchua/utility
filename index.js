var fs = require('fs');
function utils(){
    /**
     * print object
     */
    this.export = function (content,location){
        var json = JSON.stringify(content);
        fs.writeFileSync(json,location);
    }
}

module.exports =  utils;
