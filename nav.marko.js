// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              nav: "profile",
              inactiveClasses: "bg-light",
              activeClasses: "active"
            };
        }
      },
    marko_componentType = "/undefined$0/nav.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a class=\"navbar-brand\" href=\"/\">Wyeth Jackson</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarText\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Features</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Pricing</a></li></ul><span class=\"navbar-text\">Navbar text with an inline element</span></div></nav>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/nav.marko",
    component: "./nav.marko"
  };
