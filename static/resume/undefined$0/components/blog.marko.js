$_mod.def("/undefined$0/components/blog.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onInput: function(input) {
          this.state = {
              user: input.user,
              posts: input.posts || []
            };
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/blog.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_forEach = marko_helpers.f,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("7a7306"),
    marko_node0 = marko_createElement("DIV", {
        "class": "card"
      }, "6", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "card-body"
        }, null, null, 3)
        .e("H5", {
            "class": "card-title"
          }, null, null, 1)
          .t("My New Blog!")
        .e("P", {
            "class": "card-text"
          }, null, null, 1)
          .t("Welcome! Enjoy this gif that perfectly describes my life.")
        .e("IFRAME", {
            src: "https://giphy.com/embed/xTiTnLWl6ftNuZAe8E",
            width: "480",
            height: "272",
            frameBorder: "0",
            "class": "giphy-embed",
            allowFullScreen: true
          }, null, null, 0),
    marko_attrs0 = {
        "class": "card my-2"
      },
    marko_attrs1 = {
        "class": "card-body"
      },
    marko_attrs2 = {
        "class": "card-title"
      },
    marko_attrs3 = {
        "class": "card-text"
      },
    marko_node1 = marko_createElement("DIV", {
        "class": "card my-2"
      }, "11", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "card-body"
        }, null, null, 2)
        .e("H5", null, null, null, 1)
          .t("Write a blog post:")
        .e("FORM", {
            action: "/users/post",
            method: "POST"
          }, null, null, 3)
          .e("DIV", {
              "class": "form-group"
            }, null, null, 2)
            .e("LABEL", {
                "for": "title-input"
              }, null, null, 1)
              .t("Title:")
            .e("INPUT", {
                "class": "form-control",
                type: "text",
                name: "title",
                id: "title-input"
              }, null, null, 0)
          .e("DIV", {
              "class": "form-group"
            }, null, null, 2)
            .e("LABEL", {
                "for": "content-input"
              }, null, null, 1)
              .t("Content:")
            .e("TEXTAREA", {
                "class": "form-control",
                name: "content",
                id: "content-input",
                rows: "3"
              }, null, null, 0, 2)
          .e("BUTTON", {
              type: "submit",
              "class": "btn btn-primary"
            }, null, null, 1)
            .t("Submit");

function render(input, out, __component, component, state) {
  var data = input;

  var for__0 = 0;

  marko_forEach(state.posts, function(post) {
    var keyscope__1 = "[" + ((for__0++) + "]");

    out.e("DIV", marko_attrs0, "2" + keyscope__1, component, 1)
      .e("DIV", marko_attrs1, "3" + keyscope__1, component, 2)
        .e("H5", marko_attrs2, "4" + keyscope__1, component, 1)
          .t(post.title)
        .e("P", marko_attrs3, "5" + keyscope__1, component, 1)
          .t(post.content);
  });

  out.n(marko_node0, component);

  if (state.user && state.user.admin) {
    out.n(marko_node1, component);
  }
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});