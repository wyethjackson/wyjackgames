$_mod.def("/undefined$0/components/sign_up.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/sign_up.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("5c1407"),
    marko_node0 = marko_createElement("FORM", {
        action: "/users",
        method: "POST"
      }, "0", null, 5, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "form-group"
        }, null, null, 2)
        .e("LABEL", {
            "for": "name-input"
          }, null, null, 1)
          .t("Full Name")
        .e("INPUT", {
            type: "text",
            name: "name",
            "class": "form-control",
            id: "name-input",
            "aria-describedby": "nameHelp",
            placeholder: "Enter Full Name"
          }, null, null, 0)
      .e("DIV", {
          "class": "form-group"
        }, null, null, 3)
        .e("LABEL", {
            "for": "email-input"
          }, null, null, 1)
          .t("Email address")
        .e("INPUT", {
            type: "email",
            name: "email",
            "class": "form-control",
            id: "email-input",
            "aria-describedby": "emailHelp",
            placeholder: "Enter email"
          }, null, null, 0)
        .e("SMALL", {
            id: "emailHelp",
            "class": "form-text text-muted"
          }, null, null, 1)
          .t("We'll never share your email with anyone else.")
      .e("DIV", {
          "class": "form-group"
        }, null, null, 2)
        .e("LABEL", {
            "for": "password-input"
          }, null, null, 1)
          .t("Password")
        .e("INPUT", {
            type: "password",
            name: "password",
            "class": "form-control",
            id: "password-input",
            placeholder: "Enter Password"
          }, null, null, 0)
      .e("DIV", {
          "class": "form-group form-check"
        }, null, null, 2)
        .e("INPUT", {
            type: "checkbox",
            "class": "form-check-input",
            id: "subscribe-input"
          }, null, null, 0)
        .e("LABEL", {
            "class": "form-check-label",
            "for": "subscribe-input"
          }, null, null, 1)
          .t("Subscribe to my blog")
      .e("BUTTON", {
          type: "submit",
          "class": "btn btn-primary"
        }, null, null, 1)
        .t("Sign Up");

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