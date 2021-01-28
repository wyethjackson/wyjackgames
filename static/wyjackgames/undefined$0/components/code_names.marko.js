$_mod.def("/undefined$0/components/code_names.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.16.1/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
    onInput: function (input) {
        if (!!input.code_names) {
            this.codeNames = new CodeNamesEvents(input.code_names.code_name_id, input.host_url);
        }
        const code_names = !!input.code_names ? input.code_names : {};
        this.state = {
            rows: code_names.rows || [],
            game_url: '#',
            turn: code_names.turn,
            words: code_names.words,
            team_blue: code_names.team_blue,
            team_red: code_names.team_red,
            code_name_id: code_names.code_name_id,
            guesses: code_names.max_guesses || 0,
            max_guesses: code_names.guesses || null,
            has_guessed_all_clues: code_names.has_guessed_all_clues,
            clue: code_names.clue || null,
            guess_text: code_names.guess_text || null,
            game_over: !code_names.code_name_id || !!code_names.winner,
            show_spy_master_info: !!code_names.clue && !!code_names.guess_text,
            winner: code_names.winner || null,
            clue_state: null,
            spy_master: false,
            game_code_given: code_names.code_name_id || '',
            active_toggle: 'field_operative',
            game_over_active_toggle: 'see_who_won',
            toast: {
                is_hidden: true,
                message: '',
                header: ''
            }
        };
        setInterval(this.refreshData.bind(this), 5000);
    },
    setActiveToggle: function (toggle) {
        this.state.active_toggle = toggle;
    },
    refreshData: async function () {
        if (!!this.codeNames) {
            const code_names = await this.codeNames.fetch() || {};
            if (!!code_names) {
                this.state.rows = code_names.rows || [];
                this.state.words = code_names.words || [];
                this.state.turn = code_names.turn || '';
                this.state.team_blue = code_names.team_blue;
                this.state.team_red = code_names.team_red;
                this.state.guesses = code_names.guesses;
                this.state.max_guesses = code_names.max_guesses;
                this.state.has_guessed_all_clues = code_names.has_guessed_all_clues;
                this.state.clue = code_names.clue;
                this.state.guess_text = code_names.guess_text;
                this.state.game_over = code_names.game_over;
                this.state.show_spy_master_info = !!code_names.clue && !!code_names.guess_text;
                setTimeout(this.handleWin.bind(this), 2000, code_names.winner);
            }
        }
    },
    handleWin: function (winner) {
        if (this.state.winner !== winner) {
            this.state.winner = winner;
        }
    },
    throwModal: function (header, message) {
        this.state.toast = {
            is_hidden: false,
            header,
            message
        };
    },
    updateTurn: function (word = null, has_guessed_all_clues = null) {
        this.codeNames.updateTurn({
            turn: this.state.turn,
            word,
            has_guessed_all_clues
        });
    },
    updateGuessCard: function ({word, guesses, turn, winner}) {
        this.codeNames.updateGuessCard({
            guesses,
            word,
            winner
        });
    },
    changeTurns: function (word = null, has_guessed_all_clues = null) {
        this.state.guesses = null;
        this.state.max_guesses = null;
        this.state.clue = null;
        this.state.clue_state = null;
        this.state.show_spy_master_info = false;
        if (this.state.turn === this.state.team_blue.team_name) {
            this.state.turn = this.state.team_red.team_name;
            this.state.has_guessed_all_clues = this.state.team_red.has_guessed_all_clues;
        } else {
            this.state.turn = this.state.team_blue.team_name;
            this.state.has_guessed_all_clues = this.state.team_blue.has_guessed_all_clues;
        }
        this.updateTurn(word, has_guessed_all_clues);
    },
    handleGuessCard: function (guessWord, rowIndex, colIndex, event) {
        this.guessCard(guessWord, rowIndex, colIndex, event);
    },
    guessCard: function (guessWord, rowIndex, colIndex, event) {
        this.state.rows[rowIndex][colIndex].is_hidden = false;
        let winner = this.state.winner;
        this.state.guesses -= 1;
        let tile_team_name = null;
        const word = this.state.words.find(element => element.word === guessWord);
        word.hidden = false;
        if (word.team_name === this.state.team_blue.team_name) {
            this.state.team_blue.words = this.state.team_blue.words.filter(element => element.word !== word.word);
            tile_team_name = this.state.team_blue.team_name;
        } else if (word.team_name === this.state.team_red.team_name) {
            this.state.team_red.words = this.state.team_red.words.filter(element => element.word !== word.word);
            tile_team_name = this.state.team_red.team_name;
        } else if (word.is_death_word) {
            this.state.game_over = true;
            winner = this.state.turn === this.state.team_blue.team_name ? this.state.team_red.team_name : this.state.team_blue.team_name;
        }
        if (this.state.team_blue.words.length === 0) {
            winner = this.state.team_blue.team_name;
        } else if (this.state.team_red.words.length === 0) {
            winner = this.state.team_red.team_name;
        }
        let has_guessed_all_clues = this.state.has_guessed_all_clues;
        if (!winner && (this.state.guesses === 0 || this.state.turn !== tile_team_name)) {
            if (this.state.turn !== tile_team_name && !!has_guessed_all_clues) {
                has_guessed_all_clues = false;
            }
            this.changeTurns(word, has_guessed_all_clues);
        } else if (!!winner) {
            this.updateGuessCard({
                word,
                guesses: this.state.guesses,
                winner: winner
            });
        } else {
            this.updateGuessCard({
                word,
                guesses: this.state.guesses,
                turn: this.state.turn
            });
        }
        this.handleWin(winner);
    },
    giveGuess: function (event) {
        const guess = Number(event.target.textContent);
        if (!!this.state.clue_state) {
            const turn_team = this.state.turn === this.state.team_blue.team_name ? this.state.team_blue : this.state.team_red;
            this.state.guess_text = guess;
            this.state.clue = this.state.clue_state;
            this.state.show_spy_master_info = true;
            if (guess === 0 || guess === turn_team.words.length) {
                this.state.max_guesses = turn_team.words.length;
            } else {
                this.state.max_guesses = this.state.has_guessed_all_clues ? guess : guess + 1;
            }
            this.state.guesses = this.state.max_guesses;
            this.codeNames.updateGiveGuess({
                clue: this.state.clue,
                guess_given: this.state.max_guesses,
                guess_text: event.target.textContent
            });
            this.state.clue_state = '';
        }
    },
    updateGameCode: function (event) {
        this.state.game_code_given = event.target.value;
    },
    changeClue: function (event) {
        event.preventDefault();
        this.state.clue_state = event.target.value;
    },
    handleClick: function (is_spy_master, event) {
        event.preventDefault();
        if (is_spy_master) {
            this.state.spy_master = true;
            this.state.active_toggle = 'spymaster';
        } else {
            this.state.spy_master = false;
            this.state.active_toggle = 'field_operative';
        }
    },
    handleGameOverToggleClick: function (is_spy_master) {
        if (is_spy_master) {
            this.state.game_over_active_toggle = 'spymaster';
        } else {
            this.state.game_over_active_toggle = 'see_who_won';
        }
    }
},
    components_helpers = require('/marko$4.16.1/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/undefined$0/components/code_names.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_CodeNamesEvents = require('/undefined$0/components/code_names_events'/*"./code_names_events"*/),
    CodeNamesEvents = module_CodeNamesEvents.default || module_CodeNamesEvents,
    marko_helpers = require('/marko$4.16.1/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_classAttr = marko_helpers.ca,
    marko_forEach = marko_helpers.f,
    marko_styleAttr = require('/marko$4.16.1/src/runtime/vdom/helper-styleAttr'/*"marko/src/runtime/vdom/helper-styleAttr"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("d94d49"),
    marko_node0 = marko_createElement("DIV", {
        "class": "modal fade",
        id: "spymasterThinking",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "spymasterThinkingLabel",
        "aria-hidden": "true"
      }, "1", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "modal-dialog"
        }, null, null, 1)
        .e("DIV", {
            "class": "modal-content"
          }, null, null, 3)
          .e("DIV", {
              "class": "modal-header"
            }, null, null, 1)
            .e("H5", {
                "class": "modal-title",
                id: "spymasterThinkingLabel"
              }, null, null, 1)
              .t("Hold Up")
          .e("DIV", {
              "class": "modal-body"
            }, null, null, 1)
            .t("SpyMaster is still thinking!")
          .e("DIV", {
              "class": "modal-footer",
              "data-dismiss": "modal"
            }, null, null, 1)
            .e("BUTTON", {
                type: "button",
                "class": "btn btn-primary"
              }, null, null, 1)
              .t("Fine."),
    marko_node1 = marko_createElement("DIV", {
        "class": "modal fade",
        id: "alreadyGuessed",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "alreadyGuessedLabel",
        "aria-hidden": "true"
      }, "9", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("DIV", {
          "class": "modal-dialog"
        }, null, null, 1)
        .e("DIV", {
            "class": "modal-content"
          }, null, null, 3)
          .e("DIV", {
              "class": "modal-header"
            }, null, null, 1)
            .e("H5", {
                "class": "modal-title",
                id: "alreadyGuessedLabel"
              }, null, null, 1)
              .t("Hold Up")
          .e("DIV", {
              "class": "modal-body"
            }, null, null, 1)
            .t("This word was already guessed!")
          .e("DIV", {
              "class": "modal-footer",
              "data-dismiss": "modal"
            }, null, null, 1)
            .e("BUTTON", {
                type: "button",
                "class": "btn btn-primary"
              }, null, null, 1)
              .t("That doesn't help me."),
    marko_attrs0 = {
        "class": "card d-flex justify-content-center"
      },
    marko_attrs1 = {
        "class": "card-body"
      },
    marko_node2 = marko_createElement("H5", {
        "class": "card-title mx-1"
      }, "19", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Play Code Names"),
    marko_attrs2 = {
        "class": "input-group mx-1 my-2"
      },
    marko_attrs3 = {
        "class": "input-group-append"
      },
    marko_node3 = marko_createElement("DIV", {
        "class": "input-group mx-1 my-2"
      }, "25", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("FORM", {
          "class": "float-right",
          action: "/code_names/new",
          method: "POST"
        }, null, null, 1)
        .e("BUTTON", {
            "class": "btn btn-nav border-primary font-weight-bold"
          }, null, null, 1)
          .t("New Game"),
    marko_node4 = marko_createElement("A", {
        "class": "btn btn-nav border-primary font-weight-bold",
        type: "button",
        id: "button-addon2",
        href: "#"
      }, "24", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Join"),
    marko_attrs4 = {
        "class": "navbar navbar-expand-lg navbar-light sticky-top bg-light border border-secondary border-top-0 border-left-0 border-right-0"
      },
    marko_attrs5 = {
        "class": "collapse navbar-collapse",
        id: "my-nav"
      },
    marko_node5 = marko_createElement("A", {
        "class": "navbar-brand",
        href: "/"
      }, "30", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("WyJackGames"),
    marko_attrs6 = {
        "class": "navbar-nav mr-auto"
      },
    marko_attrs7 = {
        "class": "nav-item"
      },
    marko_attrs8 = {
        "class": "nav-item my-2"
      },
    marko_attrs9 = {
        "class": "input-group"
      },
    marko_attrs10 = {
        "class": "input-group-append"
      },
    marko_node6 = marko_createElement("LI", {
        "class": "nav-item m-2"
      }, "46", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("FORM", {
          "class": "float-right",
          action: "/code_names/new",
          method: "POST"
        }, null, null, 1)
        .e("BUTTON", {
            "class": "btn btn-nav border-primary font-weight-bold"
          }, null, null, 1)
          .t("New Game"),
    marko_attrs11 = {
        "class": "float-left btn-group p-2"
      },
    marko_attrs12 = {
        "class": "nav-item m-2"
      },
    marko_attrs13 = {
        "class": "float-left"
      },
    marko_attrs14 = {
        "class": "btn btn-nav border-primary font-weight-bold btn-sm ml-2 py-2"
      },
    marko_node7 = marko_createElement("A", {
        "class": "btn btn-nav border-primary font-weight-bold",
        type: "button",
        id: "button-addon2",
        href: "#"
      }, "45", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Join"),
    marko_attrs15 = {
        "class": "toast",
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      },
    marko_attrs16 = {
        "class": "toast-header"
      },
    marko_attrs17 = {
        "class": "toast-body"
      },
    marko_attrs18 = {
        "class": "mr-auto"
      },
    marko_node8 = marko_createElement("BUTTON", {
        type: "button",
        "class": "ml-2 mb-1 close",
        "data-dismiss": "toast",
        "aria-label": "Close"
      }, "52", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("SPAN", {
          "aria-hidden": "true"
        }, null, null, 1)
        .t("×"),
    marko_attrs19 = {
        "class": "mt-4 position-static px-4"
      },
    marko_attrs20 = {
        "class": "row my-2 row-card"
      },
    marko_attrs21 = {
        "class": "bi bi-person-check mb-1",
        width: "1.5em",
        height: "1.5em",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      },
    marko_attrs22 = {
        "fill-rule": "evenodd",
        d: "M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.854.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
      },
    marko_attrs23 = {
        "class": "row my-2 row-card"
      },
    marko_attrs24 = {
        "class": "btn btn-light col h-100 border border-dark rounded py-4 mx-1"
      },
    marko_attrs25 = {
        "class": "h3 align-middle m-1 font-weight-bold py-2 text-center text-dark"
      },
    marko_attrs26 = {
        "class": " btn btn-light col h-100 border border-dark rounded py-4 mx-1",
        "data-toggle": "modal",
        "data-target": "#spymasterThinking"
      },
    marko_attrs27 = {
        "class": "h3 align-middle font-weight-bold text-dark btn-code text-center"
      },
    marko_attrs28 = {
        "class": "fixed-bottom"
      },
    marko_attrs29 = {
        "class": "card"
      },
    marko_attrs30 = {
        "class": "card-body"
      },
    marko_attrs31 = {
        "class": "row"
      },
    marko_attrs32 = {
        "class": "col-1"
      },
    marko_attrs33 = {
        "class": "col-10"
      },
    marko_attrs34 = {
        "class": "col-1"
      },
    marko_attrs35 = {
        "class": "progress",
        style: "height: 3px;"
      },
    marko_attrs36 = {
        "class": "row"
      },
    marko_attrs37 = {
        "class": "col-7"
      },
    marko_attrs38 = {
        "class": "col-5"
      },
    marko_attrs39 = {
        "class": "text-center"
      },
    marko_attrs40 = {
        "class": "text-center"
      },
    marko_attrs41 = {
        "class": "input-group justify-content-center"
      },
    marko_attrs42 = {
        "class": "input-group-append"
      },
    marko_node9 = marko_createElement("BUTTON", {
        "class": "btn btn-outline-secondary dropdown-toggle",
        type: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "95", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("For"),
    marko_attrs43 = {
        "class": "dropdown-menu"
      },
    marko_attrs44 = {
        "class": "dropdown-item"
      },
    marko_attrs45 = {
        "class": "dropdown-item"
      },
    marko_attrs46 = {
        "class": "row justify-content-center"
      },
    marko_attrs47 = {
        "class": "col-1"
      },
    marko_node10 = marko_createElement("DIV", {
        "class": "col-5"
      }, "105", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("H3", {
          "class": "text-center"
        }, null, null, 1)
        .t("SpyMaster Thinking..."),
    marko_node11 = marko_createElement("SPAN", {
        "class": "sr-only"
      }, "104", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Loading..."),
    marko_attrs48 = {
        "class": "justify-content-end"
      },
    marko_attrs49 = {
        "class": "progress",
        style: "height: 3px;"
      },
    marko_attrs50 = {
        "class": "my-5"
      },
    marko_attrs51 = {
        "class": "row justify-content-center fixed-bottom"
      },
    marko_attrs52 = {
        "class": "mt-4 position-static"
      },
    marko_attrs53 = {
        "class": "row my-2 row-card"
      },
    marko_attrs54 = {
        "class": "bi bi-person-check mb-1",
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      },
    marko_attrs55 = {
        "fill-rule": "evenodd",
        d: "M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.854.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
      },
    marko_attrs56 = {
        "class": "row justify-content-center"
      },
    marko_attrs57 = {
        "class": "row my-4 justify-content-center"
      },
    marko_attrs58 = {
        "class": "card"
      },
    marko_attrs59 = {
        "class": "card-body"
      },
    marko_attrs60 = {
        "class": "text-center"
      },
    marko_attrs61 = {
        "class": "card m-2"
      },
    marko_attrs62 = {
        "class": "card m-2"
      },
    marko_attrs63 = {
        "class": "card-header text-center"
      },
    marko_node12 = marko_createElement("DIV", {
        "class": "card-body d-flex justify-content-center"
      }, "131", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("IFRAME", {
          src: "https://giphy.com/embed/d10dMmzqCYqQ0",
          width: "300",
          height: "300",
          frameBorder: "0",
          "class": "giphy-embed",
          allowFullScreen: true
        }, null, null, 0),
    marko_attrs64 = {
        "class": "card-header text-center"
      },
    marko_node13 = marko_createElement("DIV", {
        "class": "card-body d-flex justify-content-center"
      }, "135", null, 1, 0, {
        i: marko_const_nextId()
      })
      .e("IFRAME", {
          src: "https://giphy.com/embed/MEWeqM3BehSDLdghe2",
          width: "350",
          height: "300",
          "class": "giphy-embed",
          allowFullScreen: true
        }, null, null, 0),
    marko_attrs65 = {
        "class": "btn-group my-4"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", null, "0", component);

  out.n(marko_node0, component);

  out.n(marko_node1, component);

  if (!state.winner && !state.code_name_id) {
    out.be("DIV", marko_attrs0, "17", component);

    out.be("DIV", marko_attrs1, "18", component);

    out.n(marko_node2, component);

    out.be("DIV", marko_attrs2, "20", component);

    out.e("INPUT", {
        type: "text",
        placeholder: "Code",
        value: "" + state.game_code_given
      }, "21", component, 0, 0, {
        oninput: __component.d("input", "updateGameCode", false)
      });

    out.be("DIV", marko_attrs3, "22", component);

    if (!!state.game_code_given) {
      out.e("A", {
          "class": "btn btn-nav border-primary font-weight-bold",
          type: "button",
          id: "button-addon2",
          href: "/code_names/" + state.game_code_given.toUpperCase()
        }, "23", component, 1)
        .t("Join");
    } else {
      out.n(marko_node4, component);
    }

    out.ee();

    out.ee();

    out.n(marko_node3, component);

    out.ee();

    out.ee();
  } else {
    out.be("NAV", marko_attrs4, "28", component);

    out.be("DIV", marko_attrs5, "29", component);

    out.n(marko_node5, component);

    out.be("UL", marko_attrs6, "31", component);

    out.be("LI", marko_attrs7, "32", component);

    if (!state.winner && !!state.code_name_id) {
      out.e("DIV", marko_attrs11, "33", component, 2)
        .e("BUTTON", {
            "class": marko_classAttr("btn btn-toggle " + (state.active_toggle === "field_operative" ? "btn-toggle-primary font-weight-bold border-primary" : "btn-light border-left border-top border-bottom border-secondary")),
            type: "button",
            id: "field_operative"
          }, "34", component, 1, 0, {
            onclick: __component.d("click", "handleClick", false, [
                false
              ])
          })
          .t("Operative")
        .e("BUTTON", {
            "class": marko_classAttr("btn btn-toggle " + (state.active_toggle === "spymaster" ? "btn-toggle-primary font-weight-bold border-primary" : "btn-light border-right border-top border-bottom border-secondary")),
            type: "button",
            id: "spymaster"
          }, "35", component, 1, 0, {
            onclick: __component.d("click", "handleClick", false, [
                true
              ])
          })
          .t("Spy Master");
    }

    out.ee();

    if ((state.turn && state.team_blue) && !state.winner) {
      out.be("LI", marko_attrs12, "36", component);

      out.e("H3", marko_attrs13, "37", component, 2)
        .t(" ")
        .e("SPAN", {
            "class": marko_classAttr((("badge badge-light border mr-2 py-2 border-" + (state.turn === "RED" ? "danger" : "primary")) + " ") + (state.turn === state.team_blue.team_name ? state.team_blue.text_color : state.team_red.text_color))
          }, "38", component, 1, 4)
          .t(state.turn);

      if (((state.clue && state.guess_text) && !state.spy_master) && state.show_spy_master_info) {
        out.e("BUTTON", marko_attrs14, "39", component, 1, 0, {
            onclick: __component.d("click", "changeTurns", false, [
                null,
                (state.guesses > 0) && state.has_guessed_all_clues ? false : null
              ])
          })
          .t("End Turn");
      }

      out.ee();
    }

    out.be("LI", marko_attrs8, "40", component);

    out.be("DIV", marko_attrs9, "41", component);

    out.e("INPUT", {
        type: "text",
        placeholder: "Code",
        value: "" + state.game_code_given
      }, "42", component, 0, 0, {
        oninput: __component.d("input", "updateGameCode", false)
      });

    out.be("DIV", marko_attrs10, "43", component);

    if (!!state.game_code_given) {
      out.e("A", {
          "class": "btn btn-nav border-primary font-weight-bold",
          type: "button",
          id: "button-addon2",
          href: "/code_names/" + state.game_code_given.toUpperCase()
        }, "44", component, 1)
        .t("Join");
    } else {
      out.n(marko_node7, component);
    }

    out.ee();

    out.ee();

    out.ee();

    out.n(marko_node6, component);

    out.ee();

    out.ee();

    out.ee();
  }

  if (!state.toast.is_hidden) {
    out.e("DIV", marko_attrs15, "49", component, 2)
      .e("DIV", marko_attrs16, "50", component, 2)
        .e("STRONG", marko_attrs18, "51", component, 1)
          .t(state.toast.header)
        .n(marko_node8, component)
      .e("DIV", marko_attrs17, "54", component, 1)
        .t(state.toast.message);
  }

  if (!!state.turn && !!state.team_blue) {
    out.be("DIV", marko_attrs19, "55", component);

    if (!state.winner && state.turn) {
      if (state.spy_master) {
        var for__56 = 0;

        marko_forEach(state.rows, function(row) {
          var keyscope__57 = "[" + ((for__56++) + "]");

          out.be("DIV", marko_attrs20, "58" + keyscope__57, component);

          var for__59 = 0;

          marko_forEach(row, function(col) {
            var keyscope__60 = "[" + (((for__59++) + keyscope__57) + "]");

            out.be("BUTTON", {
                "class": marko_classAttr(((("btn bg-" + col.color) + " ") + col.text_color) + " col border border-dark rounded py-4 mx-1")
              }, "61" + keyscope__60, component, null, 4);

            out.be("SPAN", {
                "class": marko_classAttr(("h3 align-middle font-weight-bold " + col.text_color) + " text-center")
              }, "62" + keyscope__60, component, null, 4);

            out.t(col.word);

            if (!col.is_hidden) {
              out.e("SPAN", {
                  "class": marko_classAttr("badge badge-" + col.color)
                }, "63" + keyscope__60, component, 1, 4)
                .e("svg", marko_attrs21, "64" + keyscope__60, component, 1, 1)
                  .e("path", marko_attrs22, "65" + keyscope__60, component, 0, 1);
            }

            out.ee();

            out.ee();
          });

          out.ee();
        });
      } else {
        var for__66 = 0;

        marko_forEach(state.rows, function(row, rowIndex) {
          var keyscope__67 = "[" + ((for__66++) + "]");

          out.be("DIV", marko_attrs23, "68" + keyscope__67, component);

          var for__69 = 0;

          marko_forEach(row, function(col, colIndex) {
            var keyscope__70 = "[" + (((for__69++) + keyscope__67) + "]");

            if (col.is_hidden) {
              if (!!state.clue && !Number.isNaN(state.max_guesses)) {
                out.e("BUTTON", marko_attrs24, "71" + keyscope__70, component, 1, 0, {
                    onclick: __component.d("click", "handleGuessCard", false, [
                        col.word,
                        rowIndex,
                        colIndex
                      ])
                  })
                  .e("SPAN", marko_attrs25, "72" + keyscope__70, component, 1)
                    .t(col.word);
              } else {
                out.e("BUTTON", marko_attrs26, "73" + keyscope__70, component, 1)
                  .e("SPAN", marko_attrs27, "74" + keyscope__70, component, 1)
                    .t(col.word);
              }
            } else {
              out.e("BUTTON", {
                  "class": marko_classAttr(("btn bg-" + col.color) + " col h-100 border border-dark rounded py-4 mx-1"),
                  "data-toggle": "modal",
                  "data-target": "#alreadyGuessed"
                }, "75" + keyscope__70, component, 1)
                .e("SPAN", {
                    "class": marko_classAttr(("h3 align-middle font-weight-bold " + col.text_color) + " text-center")
                  }, "76" + keyscope__70, component, 1, 4)
                  .t(col.word);
            }
          });

          out.ee();
        });
      }
    }

    out.ee();

    if (!state.winner && state.turn) {
      out.be("DIV", marko_attrs28, "77", component);

      out.be("DIV", marko_attrs29, "78", component);

      out.be("DIV", marko_attrs30, "79", component);

      out.be("DIV", marko_attrs31, "80", component);

      out.e("DIV", marko_attrs32, "81", component, 1)
        .e("H3", null, "82", component, 2)
          .e("SPAN", {
              "class": marko_classAttr((("badge mb-1 badge-light border mr-2 border-" + (state.team_blue.team_name === "RED" ? "danger" : "primary")) + " ") + state.team_blue.text_color)
            }, "83", component, 1, 4)
            .t(state.team_blue.words.length)
          .e("DIV", marko_attrs35, "84", component, 1)
            .e("DIV", {
                "class": marko_classAttr("progress-bar bg-" + (state.team_blue.team_name === "RED" ? "danger" : "primary")),
                role: "progressbar",
                style: marko_styleAttr(("width: " + (((state.team_blue.total_word_count - state.team_blue.words.length) / state.team_blue.total_word_count) * 100)) + "%;"),
                "aria-valuenow": "" + (state.team_blue.total_word_count - state.team_blue.words.length),
                "aria-valuemin": "0",
                "aria-valuemax": "" + state.team_blue.total_word_count
              }, "85", component, 0);

      out.be("DIV", marko_attrs33, "86", component);

      if (state.show_spy_master_info) {
        out.e("DIV", marko_attrs36, "87", component, 2)
          .e("DIV", marko_attrs37, "88", component, 1)
            .e("H3", marko_attrs39, "89", component, 5)
              .t("\"")
              .t(state.clue.toUpperCase())
              .t("\" for ")
              .t(state.guess_text)
              .t(" words")
          .e("DIV", marko_attrs38, "90", component, 1)
            .e("H3", marko_attrs40, "91", component, 2)
              .t("Total guesses left: ")
              .t(state.guesses);
      } else {
        if (!state.winner) {
          if ((state.turn && state.spy_master) && !state.show_spy_master_info) {
            out.be("DIV", marko_attrs41, "92", component);

            out.e("INPUT", {
                type: "text",
                placeholder: "Clue",
                value: "" + (state.clue_state || "")
              }, "93", component, 0, 0, {
                oninput: __component.d("input", "changeClue", false)
              });

            out.be("DIV", marko_attrs42, "94", component);

            out.n(marko_node9, component);

            out.be("DIV", marko_attrs43, "96", component);

            var for__97 = 0;

            marko_forEach(state.turn === state.team_blue.team_name ? state.team_blue.words : state.team_red.words, function(word, wordIndex) {
              var keyscope__98 = "[" + ((for__97++) + "]");

              out.e("DIV", marko_attrs45, "99" + keyscope__98, component, 1, 0, {
                  onclick: __component.d("click", "giveGuess", false)
                })
                .t(wordIndex);
            });

            out.e("DIV", marko_attrs44, "100", component, 1, 0, {
                onclick: __component.d("click", "giveGuess", false)
              })
              .t(state.turn === state.team_blue.team_name ? state.team_blue.words.length : state.team_red.words.length);

            out.ee();

            out.ee();

            out.ee();
          } else {
            out.e("DIV", marko_attrs46, "101", component, 2)
              .e("DIV", marko_attrs47, "102", component, 1)
                .e("DIV", {
                    "class": marko_classAttr("spinner-border text-" + (state.turn === "RED" ? "danger" : "primary")),
                    role: "status"
                  }, "103", component, 1)
                  .n(marko_node11, component)
              .n(marko_node10, component);
          }
        }
      }

      out.ee();

      out.e("DIV", marko_attrs34, "107", component, 1)
        .e("H3", marko_attrs48, "108", component, 2)
          .e("SPAN", {
              "class": marko_classAttr((("badge mb-1 badge-light border mr-2 border-" + (state.team_red.team_name === "RED" ? "danger" : "primary")) + " ") + state.team_red.text_color)
            }, "109", component, 1, 4)
            .t(state.team_red.words.length)
          .e("DIV", marko_attrs49, "110", component, 1)
            .e("DIV", {
                "class": marko_classAttr("progress-bar bg-" + (state.team_red.team_name === "RED" ? "danger" : "primary")),
                role: "progressbar",
                style: marko_styleAttr(("width: " + (((state.team_red.total_word_count - state.team_red.words.length) / state.team_red.total_word_count) * 100)) + "%;"),
                "aria-valuenow": "" + (state.team_red.total_word_count - state.team_red.words.length),
                "aria-valuemin": "0",
                "aria-valuemax": "" + state.team_red.total_word_count
              }, "111", component, 0);

      out.ee();

      out.ee();

      out.ee();

      out.ee();
    } else {
      out.be("DIV", marko_attrs50, "112", component);

      if (state.game_over_active_toggle === "spymaster") {
        out.be("DIV", marko_attrs52, "113", component);

        var for__114 = 0;

        marko_forEach(state.rows, function(row) {
          var keyscope__115 = "[" + ((for__114++) + "]");

          out.be("DIV", marko_attrs53, "116" + keyscope__115, component);

          var for__117 = 0;

          marko_forEach(row, function(col) {
            var keyscope__118 = "[" + (((for__117++) + keyscope__115) + "]");

            out.be("DIV", {
                "class": marko_classAttr(("bg-" + col.color) + " col h-100 border border-dark rounded py-4 m-1")
              }, "119" + keyscope__118, component, null, 4);

            out.be("DIV", {
                "class": marko_classAttr("h3 m-1 font-weight-bold py-2 text-center " + col.text_color)
              }, "120" + keyscope__118, component, null, 4);

            out.t(col.word);

            if (!col.is_hidden) {
              out.e("SPAN", {
                  "class": marko_classAttr("badge badge-" + col.color)
                }, "121" + keyscope__118, component, 1, 4)
                .e("svg", marko_attrs54, "122" + keyscope__118, component, 1, 1)
                  .e("path", marko_attrs55, "123" + keyscope__118, component, 0, 1);
            }

            out.ee();

            out.ee();
          });

          out.ee();
        });

        out.ee();
      } else {
        out.e("DIV", marko_attrs56, "124", component, 1)
          .e("DIV", marko_attrs58, "125", component, 1)
            .e("DIV", marko_attrs59, "126", component, 1)
              .e("H4", marko_attrs60, "127", component, 3)
                .t("WINNER IS TEAM ")
                .t(state.winner)
                .t("!");

        out.e("DIV", marko_attrs57, "128", component, 2)
          .e("DIV", marko_attrs61, "129", component, 2)
            .e("DIV", marko_attrs63, "130", component, 3)
              .t("BETTER LUCK NEXT TIME TEAM ")
              .t(state.team_blue.team_name !== state.winner ? state.team_blue.team_name : state.team_red.team_name)
              .t("...")
            .n(marko_node12, component)
          .e("DIV", marko_attrs62, "133", component, 2)
            .e("DIV", marko_attrs64, "134", component, 3)
              .t("CONGRATS TEAM ")
              .t(state.winner)
              .t("!")
            .n(marko_node13, component);
      }

      out.e("DIV", marko_attrs51, "137", component, 1)
        .e("DIV", marko_attrs65, "138", component, 2)
          .e("BUTTON", {
              "class": marko_classAttr("btn " + (state.game_over_active_toggle === "see_who_won" ? "btn-primary" : "btn-secondary")),
              type: "button"
            }, "139", component, 1, 0, {
              onclick: __component.d("click", "handleGameOverToggleClick", false, [
                  false
                ])
            })
            .t("See Who Won")
          .e("BUTTON", {
              "class": marko_classAttr("btn " + (state.game_over_active_toggle === "spymaster" ? "btn-primary" : "btn-secondary")),
              type: "button"
            }, "140", component, 1, 0, {
              onclick: __component.d("click", "handleGameOverToggleClick", false, [
                  true
                ])
            })
            .t("Spy Master Board");

      out.ee();
    }
  }

  out.ee();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});