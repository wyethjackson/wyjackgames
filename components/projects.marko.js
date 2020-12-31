// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onInput: function(input) {
          this.state = {
              code_names: input.code_names,
              game_url: "#",
              host_url: input.host_url,
              hide_nav: input.hide_nav
            };
        }
      },
    marko_componentType = "/undefined$0/components/projects.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    CodeNames = marko_loadTemplate(require.resolve("./code_names.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>");

  marko_dynamicTag(out, CodeNames, {
      code_names: state.code_names,
      host_url: state.host_url
    }, null, null, __component, "1");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/projects.marko",
    component: "./projects.marko",
    tags: [
      "./code_names.marko"
    ]
  };
