require("fs").readdirSync(__dirname).forEach(function(file) {
    if(file == 'index.js' || file.indexOf('.js') === -1 ){
        return;
    }
    var moduleName = file.substr(0,file.length-3);
    module.exports[moduleName] = require("./" + file);
});