// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/undefined$0/components/sign_up.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form action=\"/users\" method=\"POST\"><div class=\"form-group\"><label for=\"name-input\">Full Name</label><input type=\"text\" name=\"name\" class=\"form-control\" id=\"name-input\" aria-describedby=\"nameHelp\" placeholder=\"Enter Full Name\"></div><div class=\"form-group\"><label for=\"email-input\">Email address</label><input type=\"email\" name=\"email\" class=\"form-control\" id=\"email-input\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"><small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small></div><div class=\"form-group\"><label for=\"password-input\">Password</label><input type=\"password\" name=\"password\" class=\"form-control\" id=\"password-input\" placeholder=\"Enter Password\"></div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-check-input\" id=\"subscribe-input\"><label class=\"form-check-label\" for=\"subscribe-input\">Subscribe to my blog</label></div><button type=\"submit\" class=\"btn btn-primary\">Sign Up</button></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/sign_up.marko"
  };
