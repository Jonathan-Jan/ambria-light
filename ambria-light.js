/**
 * Created by jonathan on 22/05/17.
 */

"use strict";

let module2path = {};
let appRootPath = '';

module.exports = new function() {

    this.register = (newModule2path, newAppRootPath) => {

        if (newAppRootPath) {
            appRootPath =
                //add '/'
                newAppRootPath.substr(newAppRootPath.length - 1) !== '/' ?
                newAppRootPath + '/' : newAppRootPath;
        }

        module2path = newModule2path;
    };

    this.require = (moduleName) => {

        return require(module2path[moduleName] ? appRootPath + module2path[moduleName] : moduleName);
    };

};

