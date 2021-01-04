// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onInput: function(input) {
          input = input.body_data;

          this.state = {
              active_page: input.active_page || "",
              pages: {
                  home: {
                      page: Home,
                      name: "Home",
                      url: "/"
                    },
                  code_names: {
                      page: CodeNames,
                      name: "Code Names",
                      url: "/code_names"
                    },
                  contact: {
                      page: Contact,
                      name: "Contact",
                      url: "/contact"
                    }
                },
              active_classes: [
                  "active"
                ],
              nav_title: "WyJackGames",
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
    marko_componentType = "/undefined$0/body.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    CodeNames = marko_loadTemplate(require.resolve("./components/code_names.marko")),
    Contact = marko_loadTemplate(require.resolve("./components/contact.marko")),
    Home = marko_loadTemplate(require.resolve("./components/home.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEachProp = require("marko/src/runtime/helper-forEachProperty"),
    marko_attr = marko_helpers.a,
    marko_classAttr = marko_helpers.ca,
    marko_forEach = marko_helpers.f,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  if (!state.hide_nav) {
    out.w("<nav class=\"navbar navbar-expand-lg navbar-light sticky-top bg-light border border-secondary border-top-0 border-left-0 border-right-0\"><a class=\"navbar-brand\" href=\"/\">" +
      marko_escapeXml(state.nav_title) +
      "</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#my-nav\" aria-controls=\"my-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"my-nav\"><ul class=\"navbar-nav mr-auto\">");

    var for__6 = 0;

    marko_forEachProp(Object.values(state.pages), function(index, item) {
      var keyscope__7 = "[" + ((for__6++) + "]");

      out.w("<li" +
        marko_classAttr("nav-item " + (state.active_index === index ? state.active_classes.join("") : "")) +
        "><a class=\"nav-link\"" +
        marko_attr("href", "" + item.url) +
        ">" +
        marko_escapeXml(item.name) +
        "</a></li>");
    });

    out.w("</ul></div></nav>");
  }

  out.w("<div class=\"py-4 px-4\"><div class=\"notification-container\">");

  var for__12 = 0;

  marko_forEach(state.alarms, function(alarm) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.w("<div" +
      marko_classAttr(("alert alert-" + alarm.type) + " my-2") +
      " role=\"alert\">" +
      marko_escapeXml(alarm.message) +
      "</div>");
  });

  out.w("</div>");

  if (state.active_page) {
    marko_dynamicTag(out, state.pages[state.active_page].page, {
        path: state.path,
        hide_nav: state.hide_nav,
        code_names: state.code_names,
        host_url: state.host_url
      }, null, null, __component, "15");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/body.marko",
    component: "./body.marko",
    tags: [
      "./components/code_names.marko",
      "./components/contact.marko",
      "./components/home.marko"
    ]
  };
