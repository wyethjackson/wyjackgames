$_mod.def("/undefined$0/components/projects.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onInput: function(input) {
          this.state = {
              code_names: input.code_names,
              game_url: "#",
              host_url: input.host_url,
              hide_nav: input.hide_nav
            };
        }
      },
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/projects.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    CodeNames = require('/undefined$0/components/code_names.marko'/*"./code_names.marko"*/),
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", null, "0", component);

  marko_dynamicTag(out, CodeNames, {
      code_names: state.code_names,
      host_url: state.host_url
    }, null, null, __component, "1");

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});