$_mod.def("/undefined$0/components/sign_in.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/sign_in.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("bf8bfc"),
    marko_node0 = marko_createElement("FORM", {
        action: "/users/sign_in",
        method: "POST"
      }, "0", null, 3, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "form-group"
        }, null, null, 3)
        .e("LABEL", {
            "for": "email-input"
          }, null, null, 1)
          .t("Email address")
        .e("INPUT", {
            type: "email",
            "class": "form-control",
            name: "email",
            id: "email-input",
            "aria-describedby": "emailHelp",
            placeholder: "Email"
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
            "class": "form-control",
            name: "password",
            id: "password-input",
            placeholder: "Password"
          }, null, null, 0)
      .e("BUTTON", {
          type: "submit",
          "class": "btn btn-primary"
        }, null, null, 1)
        .t("Sign In");

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