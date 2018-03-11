const path = require('path');
const webPackGenericConf = require("ngx-hybrid-helper/webpack/webpack.config");

module.exports = env => {
    const webPackConfig = webPackGenericConf({
        env: env,
        //Path to your app
        app: path.resolve("./app"),
        //Path to the build app (for production)
        dist: path.resolve("./dist")
    });
    return webPackConfig;
};
