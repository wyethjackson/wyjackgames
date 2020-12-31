$_mod.def("/undefined$0/components/click-count/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/click-count/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "count"
      },
    marko_attrs1 = {
        "class": "example-button"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", marko_attrs0, "0", component, 1)
    .t(state.count);

  out.e("BUTTON", marko_attrs1, "1", component, 1, 0, {
      onclick: __component.d("click", "increment", false)
    })
    .t("Click me!");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});