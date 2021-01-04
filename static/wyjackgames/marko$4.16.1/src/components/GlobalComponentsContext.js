$_mod.def("/marko$4.16.1/src/components/GlobalComponentsContext", function(require, exports, module, __filename, __dirname) { var nextComponentIdProvider = require('/marko$4.16.1/src/components/util-browser'/*"./util"*/).___nextComponentIdProvider;
var KeySequence = require('/marko$4.16.1/src/components/KeySequence'/*"./KeySequence"*/);

function GlobalComponentsContext(out) {
    this.___preservedEls = {};
    this.___preservedElBodies = {};
    this.___renderedComponentsById = {};
    this.___rerenderComponent = undefined;
    this.___nextComponentId = nextComponentIdProvider(out);
}

GlobalComponentsContext.prototype = {
    ___createKeySequence: function() {
        return new KeySequence();
    }
};

module.exports = GlobalComponentsContext;

});