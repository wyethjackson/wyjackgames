$_mod.def("/marko$4.16.1/src/runtime/dom-insert", function(require, exports, module, __filename, __dirname) { var extend = require('/raptor-util$3.2.0/extend'/*"raptor-util/extend"*/);
var componentsUtil = require('/marko$4.16.1/src/components/util-browser'/*"../components/util"*/);
var destroyComponentForNode = componentsUtil.___destroyComponentForNode;
var destroyNodeRecursive = componentsUtil.___destroyNodeRecursive;
var helpers = require('/marko$4.16.1/src/morphdom/helpers'/*"../morphdom/helpers"*/);

var insertBefore = helpers.___insertBefore;
var insertAfter = helpers.___insertAfter;
var removeChild = helpers.___removeChild;

function resolveEl(el) {
    if (typeof el == "string") {
        var elId = el;
        el = document.getElementById(elId);
        if (!el) {
            throw Error("Not found: " + elId);
        }
    }
    return el;
}

function beforeRemove(referenceEl) {
    destroyNodeRecursive(referenceEl);
    destroyComponentForNode(referenceEl);
}

module.exports = function(target, getEl, afterInsert) {
    extend(target, {
        appendTo: function(referenceEl) {
            referenceEl = resolveEl(referenceEl);
            var el = getEl(this, referenceEl);
            insertBefore(el, null, referenceEl);
            return afterInsert(this, referenceEl);
        },
        prependTo: function(referenceEl) {
            referenceEl = resolveEl(referenceEl);
            var el = getEl(this, referenceEl);
            insertBefore(el, referenceEl.firstChild || null, referenceEl);
            return afterInsert(this, referenceEl);
        },
        replace: function(referenceEl) {
            referenceEl = resolveEl(referenceEl);
            var el = getEl(this, referenceEl);
            beforeRemove(referenceEl);
            insertBefore(el, referenceEl, referenceEl.parentNode);
            removeChild(referenceEl);
            return afterInsert(this, referenceEl);
        },
        replaceChildrenOf: function(referenceEl) {
            referenceEl = resolveEl(referenceEl);
            var el = getEl(this, referenceEl);

            var curChild = referenceEl.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling; // Just in case the DOM changes while removing
                beforeRemove(curChild);
                curChild = nextSibling;
            }

            referenceEl.innerHTML = "";
            insertBefore(el, null, referenceEl);
            return afterInsert(this, referenceEl);
        },
        insertBefore: function(referenceEl) {
            referenceEl = resolveEl(referenceEl);
            var el = getEl(this, referenceEl);
            insertBefore(el, referenceEl, referenceEl.parentNode);
            return afterInsert(this, referenceEl);
        },
        insertAfter: function(referenceEl) {
            referenceEl = resolveEl(referenceEl);
            var el = getEl(this, referenceEl);
            insertAfter(el, referenceEl, referenceEl.parentNode);
            return afterInsert(this, referenceEl);
        }
    });
};

});