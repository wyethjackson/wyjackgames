$_mod.def("/undefined$0/components/users.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onInput: function(input) {
          this.state = {
              active_index: input.sub_active_index || 0,
              active_classes: [
                  "active"
                ],
              pages: [
                  {
                      name: "Sign In",
                      page: SignIn
                    },
                  {
                      name: "Sign Up",
                      page: SignUp
                    }
                ],
              user: input.user
            };
        },
        navigate: function(index, _event) {
          this.state.active_index = Number(index);
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/users.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    SignIn = require('/undefined$0/components/sign_in.marko'/*"./sign_in.marko"*/),
    SignUp = require('/undefined$0/components/sign_up.marko'/*"./sign_up.marko"*/),
    Account = require('/undefined$0/components/account.marko'/*"./account.marko"*/),
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_dynamicTag = marko_helpers.d,
    marko_forEachProp = require('/marko$4.16.1/src/runtime/helper-forEachProperty'/*"marko/src/runtime/helper-forEachProperty"*/),
    marko_classAttr = marko_helpers.ca,
    marko_attrs0 = {
        "class": "card border border-secondary"
      },
    marko_attrs1 = {
        "class": "card-body"
      },
    marko_attrs2 = {
        "class": "nav nav-pills justify-content-center"
      },
    marko_attrs3 = {
        "class": "nav-item"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", marko_attrs0, "0", component);

  out.be("DIV", marko_attrs1, "1", component);

  if (state.user && state.user.user_uuid) {
    marko_dynamicTag(out, Account, {
        user: state.user
      }, null, null, __component, "2");
  } else {
    out.be("UL", marko_attrs2, "3", component);

    var for__4 = 0;

    marko_forEachProp(state.pages, function(index, item) {
      var keyscope__5 = "[" + ((for__4++) + "]");

      out.e("LI", marko_attrs3, "6" + keyscope__5, component, 1)
        .e("A", {
            "class": marko_classAttr("nav-link " + (index === state.active_index ? state.active_classes.join("") : "")),
            href: "#"
          }, "7" + keyscope__5, component, 1, 0, {
            onclick: __component.d("click", "navigate", false, [
                String(index)
              ])
          })
          .t(state.pages[index].name);
    });

    out.ee();

    marko_dynamicTag(out, state.pages[state.active_index].page, {}, null, null, __component, "8");
  }

  out.ee();

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});