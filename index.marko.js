// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/undefined$0/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    Layout = marko_loadTemplate(require.resolve("./layout.marko")),
    Body = marko_loadTemplate(require.resolve("./body.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, Layout, {
      body: {
          renderBody: function renderBody(out) {
            marko_dynamicTag(out, Body, {
                body_data: data
              }, null, null, __component, "2");
          }
        }
    }, null, null, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/undefined$0/index.marko",
    tags: [
      "./layout.marko",
      "./body.marko"
    ]
  };
