$_mod.def("/marko$4.16.1/src/runtime/vdom/helper-attrs", function(require, exports, module, __filename, __dirname) { /**
 * Helper for processing dynamic attributes
 */
module.exports = function(attributes) {
    if (attributes && (attributes.style || attributes.class)) {
        var newAttributes = {};
        Object.keys(attributes).forEach(function(name) {
            if (name === "class") {
                newAttributes[name] = classAttr(attributes[name]);
            } else if (name === "style") {
                newAttributes[name] = styleAttr(attributes[name]);
            } else {
                newAttributes[name] = attributes[name];
            }
        });
        return newAttributes;
    }
    return attributes;
};

var styleAttr = require('/marko$4.16.1/src/runtime/vdom/helper-styleAttr'/*"./helper-styleAttr"*/);
var classAttr = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"./helpers"*/).ca;

});