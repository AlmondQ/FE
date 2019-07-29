const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                includePath: [path.resolve(__dirname, 'node_modules/compass-mixins/lib')]
            }
        }
    }
}