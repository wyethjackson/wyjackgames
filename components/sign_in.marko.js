// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/undefined$0/components/sign_in.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/users/sign_in\" method=\"POST\"><div class=\"form-group\"><label for=\"email-input\">Email address</label><input type=\"email\" class=\"form-control\" name=\"email\" id=\"email-input\" aria-describedby=\"emailHelp\" placeholder=\"Email\"><small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small></div><div class=\"form-group\"><label for=\"password-input\">Password</label><input type=\"password\" class=\"form-control\" name=\"password\" id=\"password-input\" placeholder=\"Password\"></div><button type=\"submit\" class=\"btn btn-primary\">Sign In</button></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/sign_in.marko"
  };
