$_mod.def("/undefined$0/components/contact.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/contact.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("c6e634"),
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
          .t("Contact Me")
        .e("UL", {
            "class": "list-group"
          }, null, null, 3)
          .e("LI", {
              "class": "list-group-item"
            }, null, null, 1)
            .t("Email: wyethjackson@gmail.com")
          .e("LI", {
              "class": "list-group-item"
            }, null, null, 1)
            .t("Phone Number: (608) 287-6330")
          .e("LI", {
              "class": "list-group-item"
            }, null, null, 1)
            .e("A", {
                href: "https://www.linkedin.com/in/wyethjackson/"
              }, null, null, 1)
              .t("My LinkedIn");

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