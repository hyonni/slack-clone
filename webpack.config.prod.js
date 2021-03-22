const path = require('path');

module.exports = {
    mode : "production",
    entry : "./source/index.js",
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, "dist"),
    }
}