
const path = require("path");
module.exports = {
    lintOnSave:false,
    configureWebpack:{
        resolve:{
            alias:{
                '@style':path.join(__dirname,'/packages/ui/assets/style'),
            } 
        }
     
    }
}