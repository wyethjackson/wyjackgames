$_mod.def("/undefined$0/body.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onInput: function(input) {
          input = input.body_data;

          this.state = {
              active_index: input.active_index || 0,
              pages: [
                  {
                      page: Profile,
                      name: "Profile"
                    },
                  {
                      page: Projects,
                      name: "Projects",
                      hide_nav: true,
                      host_url: input.host_url
                    },
                  {
                      page: Blog,
                      name: "Blog"
                    },
                  {
                      page: Contact,
                      name: "Contact"
                    },
                  {
                      page: Users,
                      name: "" + (input.user ? "" + input.user.name : "Sign In"),
                      active_index: input.users_active_index || 0
                    }
                ],
              active_classes: [
                  "active"
                ],
              nav_title: "Wyeth Jackson",
              user: input.user,
              posts: input.posts,
              alarms: input.alarms,
              path: input.path,
              code_names: input.code_names,
              hide_nav: input.hide_nav,
              host_url: input.host_url
            };
        },
        navigate: function(index, event) {
          if (this.state.pages[index].name === "Projects") {
            this.state.hide_nav = true;
          }

          this.state.active_index = Number(index);
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/body.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Profile = require('/undefined$0/components/profile.marko'/*"./components/profile.marko"*/),
    Projects = require('/undefined$0/components/projects.marko'/*"./components/projects.marko"*/),
    Blog = require('/undefined$0/components/blog.marko'/*"./components/blog.marko"*/),
    Contact = require('/undefined$0/components/contact.marko'/*"./components/contact.marko"*/),
    Users = require('/undefined$0/components/users.marko'/*"./components/users.marko"*/),
    marko_forEachProp = require('/marko$4.16.1/src/runtime/helper-forEachProperty'/*"marko/src/runtime/helper-forEachProperty"*/),
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_classAttr = marko_helpers.ca,
    marko_forEach = marko_helpers.f,
    marko_dynamicTag = marko_helpers.d,
    marko_attrs0 = {
        "class": "py-4 px-4"
      },
    marko_attrs1 = {
        "class": "notification-container"
      },
    marko_attrs2 = {
        "class": "navbar navbar-expand-lg navbar-light sticky-top bg-light border border-secondary border-top-0 border-left-0 border-right-0"
      },
    marko_attrs3 = {
        "class": "navbar-brand",
        href: "/"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("6de526"),
    marko_node0 = marko_createElement("BUTTON", {
        "class": "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#my-nav",
        "aria-controls": "my-nav",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, "2", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("SPAN", {
          "class": "navbar-toggler-icon"
        }, null, null, 0),
    marko_attrs4 = {
        "class": "collapse navbar-collapse",
        id: "my-nav"
      },
    marko_attrs5 = {
        "class": "navbar-nav mr-auto"
      },
    marko_attrs6 = {
        "class": "nav-link",
        href: "#"
      };

function render(input, out, __component, component, state) {
  var data = input;

  if (!state.hide_nav) {
    out.be("NAV", marko_attrs2, "0", component);

    out.e("A", marko_attrs3, "1", component, 1)
      .t(state.nav_title);

    out.n(marko_node0, component);

    out.be("DIV", marko_attrs4, "4", component);

    out.be("UL", marko_attrs5, "5", component);

    var for__6 = 0;

    marko_forEachProp(state.pages, function(index, item) {
      var keyscope__7 = "[" + ((for__6++) + "]");

      out.e("LI", {
          "class": marko_classAttr("nav-item " + (state.active_index === index ? state.active_classes.join("") : ""))
        }, "8" + keyscope__7, component, 1, 4)
        .e("A", marko_attrs6, "9" + keyscope__7, component, 1, 0, {
            onclick: __component.d("click", "navigate", false, [
                String(index)
              ])
          })
          .t(state.pages[index].name);
    });

    out.ee();

    out.ee();

    out.ee();
  }

  out.be("DIV", marko_attrs0, "10", component);

  out.be("DIV", marko_attrs1, "11", component);

  var for__12 = 0;

  marko_forEach(state.alarms, function(alarm) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.e("DIV", {
        "class": marko_classAttr(("alert alert-" + alarm.type) + " my-2"),
        role: "alert"
      }, "14" + keyscope__13, component, 1)
      .t(alarm.message);
  });

  out.ee();

  if (state.pages[state.active_index]) {
    marko_dynamicTag(out, state.pages[state.active_index].page, {
        path: state.path,
        hide_nav: state.hide_nav,
        sub_active_index: state.pages[state.active_index].active_index,
        posts: state.posts,
        user: state.user,
        code_names: state.code_names,
        host_url: state.host_url
      }, null, null, __component, "15");
  }

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});