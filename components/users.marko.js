// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
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
    marko_componentType = "/undefined$0/components/users.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    SignIn = marko_loadTemplate(require.resolve("./sign_in.marko")),
    SignUp = marko_loadTemplate(require.resolve("./sign_up.marko")),
    Account = marko_loadTemplate(require.resolve("./account.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_forEachProp = require("marko/src/runtime/helper-forEachProperty"),
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"card border border-secondary\"><div class=\"card-body\">");

  if (state.user && state.user.user_uuid) {
    marko_dynamicTag(out, Account, {
        user: state.user
      }, null, null, __component, "2");
  } else {
    out.w("<ul class=\"nav nav-pills justify-content-center\">");

    var for__4 = 0;

    marko_forEachProp(state.pages, function(index, item) {
      var keyscope__5 = "[" + ((for__4++) + "]");

      out.w("<li class=\"nav-item\"><a" +
        marko_classAttr("nav-link " + (index === state.active_index ? state.active_classes.join("") : "")) +
        " href=\"#\">" +
        marko_escapeXml(state.pages[index].name) +
        "</a></li>");
    });

    out.w("</ul>");

    marko_dynamicTag(out, state.pages[state.active_index].page, {}, null, null, __component, "8");
  }

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/users.marko",
    component: "./users.marko",
    tags: [
      "./sign_in.marko",
      "./sign_up.marko",
      "./account.marko"
    ]
  };
