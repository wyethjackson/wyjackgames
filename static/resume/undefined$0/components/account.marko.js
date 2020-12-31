$_mod.def("/undefined$0/components/account.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onInput: function(input) {
          this.state = {
              user: input.user
            };
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/account.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "card"
      },
    marko_attrs1 = {
        "class": "card-body"
      },
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("f8aea7"),
    marko_node0 = marko_createElement("H6", null, "3", null, 0, 0, {
        i: marko_const_nextId()
      }),
    marko_node1 = marko_createElement("FORM", {
        action: "/users/message",
        method: "POST"
      }, "4", null, 2, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "form-group"
        }, null, null, 2)
        .e("LABEL", {
            "for": "message-input"
          }, null, null, 1)
          .t("Send a message to Wyeth:")
        .e("TEXTAREA", {
            "class": "form-control",
            name: "message",
            id: "message-input",
            rows: "3"
          }, null, null, 0, 2)
      .e("BUTTON", {
          type: "submit",
          "class": "btn btn-primary"
        }, null, null, 1)
        .t("Submit");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", marko_attrs0, "0", component, 1)
    .e("DIV", marko_attrs1, "1", component, 3)
      .e("H5", null, "2", component, 2)
        .t("Welcome, ")
        .t(state.user.name)
      .n(marko_node0, component)
      .n(marko_node1, component);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});