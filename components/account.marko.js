// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onInput: function(input) {
          this.state = {
              user: input.user
            };
        }
      },
    marko_componentType = "/undefined$0/components/account.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"card\"><div class=\"card-body\"><h5>Welcome, " +
    marko_escapeXml(state.user.name) +
    "</h5><h6></h6><form action=\"/users/message\" method=\"POST\"><div class=\"form-group\"><label for=\"message-input\">Send a message to Wyeth:</label><textarea class=\"form-control\" name=\"message\" id=\"message-input\" rows=\"3\"></textarea></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/account.marko",
    component: "./account.marko"
  };
