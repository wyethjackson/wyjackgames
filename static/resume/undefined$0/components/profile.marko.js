$_mod.def("/undefined$0/components/profile.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/profile.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("3b91f0"),
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
          }, null, null, 2)
          .e("DIV", {
              "class": "col-5 px-3"
            }, null, null, 1)
            .e("IMG", {
                src: "assets/img/wyeth_jackson.jpeg",
                width: "250",
                height: "333"
              }, null, null, 0)
          .e("DIV", {
              "class": "col-7 py-2 px-3"
            }, null, null, 1)
            .e("P", null, null, null, 1)
              .t("My name is Wyeth Jackson and I am a software developer currently based in Boston, MA. To connect with me, please click on the contact tab.");

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