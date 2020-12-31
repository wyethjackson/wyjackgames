// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onInput: function(input) {
          this.state = {
              user: input.user,
              posts: input.posts || []
            };
        }
      },
    marko_componentType = "/undefined$0/components/blog.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  var for__0 = 0;

  marko_forEach(state.posts, function(post) {
    var keyscope__1 = "[" + ((for__0++) + "]");

    out.w("<div class=\"card my-2\"><div class=\"card-body\"><h5 class=\"card-title\">" +
      marko_escapeXml(post.title) +
      "</h5><p class=\"card-text\">" +
      marko_escapeXml(post.content) +
      "</p></div></div>");
  });

  out.w("<div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">My New Blog!</h5><p class=\"card-text\">Welcome! Enjoy this gif that perfectly describes my life.</p><iframe src=\"https://giphy.com/embed/xTiTnLWl6ftNuZAe8E\" width=\"480\" height=\"272\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div></div>");

  if (state.user && state.user.admin) {
    out.w("<div class=\"card my-2\"><div class=\"card-body\"><h5>Write a blog post:</h5><form action=\"/users/post\" method=\"POST\"><div class=\"form-group\"><label for=\"title-input\">Title:</label><input class=\"form-control\" type=\"text\" name=\"title\" id=\"title-input\"></div><div class=\"form-group\"><label for=\"content-input\">Content:</label><textarea class=\"form-control\" name=\"content\" id=\"content-input\" rows=\"3\"></textarea></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form></div></div>");
  }
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/blog.marko",
    component: "./blog.marko"
  };
