$_mod.def("/undefined$0/nav.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              nav: "profile",
              inactiveClasses: "bg-light",
              activeClasses: "active"
            };
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/nav.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("f61722"),
    marko_node0 = marko_createElement("NAV", {
        "class": "navbar navbar-expand-lg navbar-light bg-light"
      }, "0", null, 3, 0, {
        i: marko_const_nextId()
      })
      .e("A", {
          "class": "navbar-brand",
          href: "/"
        }, null, null, 1)
        .t("Wyeth Jackson")
      .e("BUTTON", {
          "class": "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarText",
          "aria-controls": "navbarText",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }, null, null, 1)
        .e("SPAN", {
            "class": "navbar-toggler-icon"
          }, null, null, 0)
      .e("DIV", {
          "class": "collapse navbar-collapse",
          id: "navbarText"
        }, null, null, 2)
        .e("UL", {
            "class": "navbar-nav mr-auto"
          }, null, null, 3)
          .e("LI", {
              "class": "nav-item active"
            }, null, null, 1)
            .e("A", {
                "class": "nav-link",
                href: "#"
              }, null, null, 2)
              .t("Home ")
              .e("SPAN", {
                  "class": "sr-only"
                }, null, null, 1)
                .t("(current)")
          .e("LI", {
              "class": "nav-item"
            }, null, null, 1)
            .e("A", {
                "class": "nav-link",
                href: "#"
              }, null, null, 1)
              .t("Features")
          .e("LI", {
              "class": "nav-item"
            }, null, null, 1)
            .e("A", {
                "class": "nav-link",
                href: "#"
              }, null, null, 1)
              .t("Pricing")
        .e("SPAN", {
            "class": "navbar-text"
          }, null, null, 1)
          .t("Navbar text with an inline element");

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});