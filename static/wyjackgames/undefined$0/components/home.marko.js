$_mod.def("/undefined$0/components/home.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/home.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("1c54e9"),
    marko_node0 = marko_createElement("DIV", {
        "class": "card border border-secondary"
      }, "0", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "card-body"
        }, null, null, 2)
        .e("H5", {
            "class": "card-title"
          }, null, null, 1)
          .t("Welcome!")
        .e("DIV", {
            "class": "row"
          }, null, null, 1)
          .e("DIV", {
              "class": "col-7 py-2 px-3"
            }, null, null, 1)
            .e("P", null, null, null, 1)
              .t("Enjoy these games I have created!");

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

});