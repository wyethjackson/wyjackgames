// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/undefined$0/components/contact.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"card border border-secondary\"><div class=\"card-body\"><h5 class=\"card-title\">Contact Me</h5><ul class=\"list-group\"><li class=\"list-group-item\">Email: wyethjackson@gmail.com</li><li class=\"list-group-item\">Phone Number: (608) 287-6330</li><li class=\"list-group-item\"><a href=\"https://www.linkedin.com/in/wyethjackson/\">My LinkedIn</a></li></ul></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/contact.marko"
  };
