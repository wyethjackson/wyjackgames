// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/undefined$0/components/profile.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"card border border-secondary\"><div class=\"card-body\"><h5 class=\"card-title\">Welcome!</h5><div class=\"row\"><div class=\"col-5 px-3\"><img" +
    marko_attr("src", "assets/img/wyeth_jackson.jpeg") +
    " width=250 height=333></div><div class=\"col-7 py-2 px-3\"><p>My name is Wyeth Jackson and I am a software developer currently based in Boston, MA. To connect with me, please click on the contact tab.</p></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/profile.marko"
  };
