// Compiled using marko@4.16.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
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
    marko_componentType = "/undefined$0/components/code_names.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_CodeNamesEvents = require("./code_names_events"),
    CodeNamesEvents = module_CodeNamesEvents.default || module_CodeNamesEvents,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    marko_styleAttr = marko_helpers.sa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><div class=\"modal fade\" id=\"spymasterThinking\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"spymasterThinkingLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"spymasterThinkingLabel\">Hold Up</h5></div><div class=\"modal-body\">SpyMaster is still thinking!</div><div class=\"modal-footer\" data-dismiss=\"modal\"><button type=\"button\" class=\"btn btn-primary\">Fine.</button></div></div></div></div><div class=\"modal fade\" id=\"alreadyGuessed\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"alreadyGuessedLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"alreadyGuessedLabel\">Hold Up</h5></div><div class=\"modal-body\">This word was already guessed!</div><div class=\"modal-footer\" data-dismiss=\"modal\"><button type=\"button\" class=\"btn btn-primary\">That doesn't help me.</button></div></div></div></div><div class=\"header fixed-top my-2 mx-3\"><div class=\"col-3\">");

  if (!state.winner && !!state.code_name_id) {
    out.w("<div class=\"float-left btn-group\"><button" +
      marko_classAttr("btn btn-toggle " + (state.active_toggle === "field_operative" ? "btn-toggle-primary font-weight-bold border-primary" : "btn-light border-left border-top border-bottom border-secondary")) +
      " type=\"button\" id=\"field_operative\">Operative</button><button" +
      marko_classAttr("btn btn-toggle " + (state.active_toggle === "spymaster" ? "btn-toggle-primary font-weight-bold border-primary" : "btn-light border-right border-top border-bottom border-secondary")) +
      " type=\"button\" id=\"spymaster\">Spy Master</button></div>");
  }

  out.w("</div>");

  if ((state.turn && state.team_blue) && !state.winner) {
    out.w("<div class=\"col-4\"><h3 class=\"float-left\"> <span" +
      marko_classAttr((("badge badge-light border mr-2 py-2 border-" + (state.turn === "RED" ? "danger" : "primary")) + " ") + (state.turn === state.team_blue.team_name ? state.team_blue.text_color : state.team_red.text_color)) +
      ">" +
      marko_escapeXml(state.turn) +
      "</span></h3>");

    if (((state.clue && state.guess_text) && !state.spy_master) && state.show_spy_master_info) {
      out.w("<button class=\"btn btn-nav border-primary font-weight-bold btn-sm ml-2 py-2\">End Turn</button>");
    }

    out.w("</div>");
  }

  out.w("<div class=\"col-5\"><div class=\"row\"><div class=\"col-sm-8 float-left pr-0\"><div class=\"input-group\"><input type=\"text\" placeholder=\"Code\"" +
    marko_attr("value", "" + state.game_code_given) +
    "><div class=\"input-group-append\">");

  if (!!state.game_code_given) {
    out.w("<a class=\"btn btn-nav border-primary font-weight-bold\" type=\"button\" id=\"button-addon2\"" +
      marko_attr("href", "/projects/code_names/" + state.game_code_given.toUpperCase()) +
      ">Join</a>");
  } else {
    out.w("<a class=\"btn btn-nav border-primary font-weight-bold\" type=\"button\" id=\"button-addon2\" href=\"#\">Join</a>");
  }

  out.w("</div></div></div><div class=\"col-sm-4 justify-content-end pr-1\"><form class=\"float-right\" action=\"/projects/code_names/new\" method=\"POST\"><button class=\"btn btn-nav border-primary font-weight-bold\">New Game</button></form></div></div></div></div>");

  if (!state.toast.is_hidden) {
    out.w("<div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"><div class=\"toast-header\"><strong class=\"mr-auto\">" +
      marko_escapeXml(state.toast.header) +
      "</strong><button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"toast-body\">" +
      marko_escapeXml(state.toast.message) +
      "</div></div>");
  }

  if (!!state.turn && !!state.team_blue) {
    out.w("<div class=\"mt-4 position-static\">");

    if (!state.winner && state.turn) {
      if (state.spy_master) {
        var for__44 = 0;

        marko_forEach(state.rows, function(row) {
          var keyscope__45 = "[" + ((for__44++) + "]");

          out.w("<div class=\"row my-2 row-card\">");

          var for__47 = 0;

          marko_forEach(row, function(col) {
            var keyscope__48 = "[" + (((for__47++) + keyscope__45) + "]");

            out.w("<button" +
              marko_classAttr(((("btn bg-" + col.color) + " ") + col.text_color) + " col h-100 border border-dark rounded m-1") +
              "><span" +
              marko_classAttr(("h3 align-middle font-weight-bold " + col.text_color) + " text-center") +
              ">" +
              marko_escapeXml(col.word));

            if (!col.is_hidden) {
              out.w("<span" +
                marko_classAttr("badge badge-" + col.color) +
                "><svg class=\"bi bi-person-check mb-1\" width=\"1.5em\" height=\"1.5em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.854.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z\"></path></svg></span>");
            }

            out.w("</span></button>");
          });

          out.w("</div>");
        });
      } else {
        var for__54 = 0;

        marko_forEach(state.rows, function(row, rowIndex) {
          var keyscope__55 = "[" + ((for__54++) + "]");

          out.w("<div class=\"row my-2 row-card\">");

          var for__57 = 0;

          marko_forEach(row, function(col, colIndex) {
            var keyscope__58 = "[" + (((for__57++) + keyscope__55) + "]");

            if (col.is_hidden) {
              if (!!state.clue && !Number.isNaN(state.max_guesses)) {
                out.w("<button" +
                  marko_classAttr("btn btn-light col h-100 border border-dark rounded py-4 m-1") +
                  "><span" +
                  marko_classAttr("h3 align-middle m-1 font-weight-bold py-2 text-center text-dark") +
                  ">" +
                  marko_escapeXml(col.word) +
                  "</span></button>");
              } else {
                out.w("<button class=\" btn btn-light col h-100 border border-dark rounded m-1\" data-toggle=\"modal\" data-target=\"#spymasterThinking\"><span" +
                  marko_classAttr("h3 align-middle font-weight-bold text-dark btn-code text-center") +
                  ">" +
                  marko_escapeXml(col.word) +
                  "</span></button>");
              }
            } else {
              out.w("<button" +
                marko_classAttr(("btn bg-" + col.color) + " col h-100 border border-dark rounded m-1") +
                " data-toggle=\"modal\" data-target=\"#alreadyGuessed\"><span" +
                marko_classAttr(("h3 align-middle font-weight-bold " + col.text_color) + " text-center") +
                ">" +
                marko_escapeXml(col.word) +
                "</span></button>");
            }
          });

          out.w("</div>");
        });
      }
    }

    out.w("</div>");

    if (!state.winner && state.turn) {
      out.w("<div class=\"fixed-bottom\"><div class=\"card\"><div class=\"card-body\"><div class=\"row\"><div class=\"col-1\"><h3><span" +
        marko_classAttr((("badge mb-1 badge-light border mr-2 border-" + (state.team_blue.team_name === "RED" ? "danger" : "primary")) + " ") + state.team_blue.text_color) +
        ">" +
        marko_escapeXml(state.team_blue.words.length) +
        "</span><div class=\"progress\" style=\"height: 3px;\"><div" +
        marko_classAttr("progress-bar bg-" + (state.team_blue.team_name === "RED" ? "danger" : "primary")) +
        " role=\"progressbar\"" +
        marko_styleAttr(("width: " + (((state.team_blue.total_word_count - state.team_blue.words.length) / state.team_blue.total_word_count) * 100)) + "%;") +
        marko_attr("aria-valuenow", "" + (state.team_blue.total_word_count - state.team_blue.words.length)) +
        " aria-valuemin=\"0\"" +
        marko_attr("aria-valuemax", "" + state.team_blue.total_word_count) +
        "></div></div></h3></div><div class=\"col-10\">");

      if (state.show_spy_master_info) {
        out.w("<div class=\"row\"><div class=\"col-7\"><h3 class=\"text-center\">\"" +
          marko_escapeXml(state.clue.toUpperCase()) +
          "\"&nbsp;for&nbsp;" +
          marko_escapeXml(state.guess_text) +
          "&nbsp;words</h3></div><div class=\"col-5\"><h3 class=\"text-center\">Total guesses left: " +
          marko_escapeXml(state.guesses) +
          "</h3></div></div>");
      } else {
        if (!state.winner) {
          if ((state.turn && state.spy_master) && !state.show_spy_master_info) {
            out.w("<div class=\"input-group justify-content-center\"><input type=\"text\" placeholder=\"Clue\"" +
              marko_attr("value", "" + (state.clue_state || "")) +
              "><div class=\"input-group-append\"><button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">For</button><div class=\"dropdown-menu\">");

            var for__85 = 0;

            marko_forEach(state.turn === state.team_blue.team_name ? state.team_blue.words : state.team_red.words, function(word, wordIndex) {
              var keyscope__86 = "[" + ((for__85++) + "]");

              out.w("<div class=\"dropdown-item\">" +
                marko_escapeXml(wordIndex) +
                "</div>");
            });

            out.w("<div class=\"dropdown-item\">" +
              marko_escapeXml(state.turn === state.team_blue.team_name ? state.team_blue.words.length : state.team_red.words.length) +
              "</div></div></div></div>");
          } else {
            out.w("<div class=\"row justify-content-center\"><div class=\"col-1\"><div" +
              marko_classAttr("spinner-border text-" + (state.turn === "RED" ? "danger" : "primary")) +
              " role=\"status\"><span class=\"sr-only\">Loading...</span></div></div><div class=\"col-5\"><h3 class=\"text-center\">SpyMaster Thinking...</h3></div></div>");
          }
        }
      }

      out.w("</div><div class=\"col-1\"><h3 class=\"justify-content-end\"><span" +
        marko_classAttr((("badge mb-1 badge-light border mr-2 border-" + (state.team_red.team_name === "RED" ? "danger" : "primary")) + " ") + state.team_red.text_color) +
        ">" +
        marko_escapeXml(state.team_red.words.length) +
        "</span><div class=\"progress\" style=\"height: 3px;\"><div" +
        marko_classAttr("progress-bar bg-" + (state.team_red.team_name === "RED" ? "danger" : "primary")) +
        " role=\"progressbar\"" +
        marko_styleAttr(("width: " + (((state.team_red.total_word_count - state.team_red.words.length) / state.team_red.total_word_count) * 100)) + "%;") +
        marko_attr("aria-valuenow", "" + (state.team_red.total_word_count - state.team_red.words.length)) +
        " aria-valuemin=\"0\"" +
        marko_attr("aria-valuemax", "" + state.team_red.total_word_count) +
        "></div></div></h3></div></div></div></div></div>");
    } else {
      out.w("<div class=\"my-5\">");

      if (state.game_over_active_toggle === "spymaster") {
        out.w("<div class=\"mt-4 position-static\">");

        var for__102 = 0;

        marko_forEach(state.rows, function(row) {
          var keyscope__103 = "[" + ((for__102++) + "]");

          out.w("<div class=\"row my-2 row-card\">");

          var for__105 = 0;

          marko_forEach(row, function(col) {
            var keyscope__106 = "[" + (((for__105++) + keyscope__103) + "]");

            out.w("<div" +
              marko_classAttr(("bg-" + col.color) + " col h-100 border border-dark rounded py-4 m-1") +
              "><div" +
              marko_classAttr("h3 m-1 font-weight-bold py-2 text-center " + col.text_color) +
              ">" +
              marko_escapeXml(col.word));

            if (!col.is_hidden) {
              out.w("<span" +
                marko_classAttr("badge badge-" + col.color) +
                "><svg class=\"bi bi-person-check mb-1\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.854.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z\"></path></svg></span>");
            }

            out.w("</div></div>");
          });

          out.w("</div>");
        });

        out.w("</div>");
      } else {
        out.w("<div class=\"row justify-content-center\"><div class=\"card\"><div class=\"card-body\"><h4 class=\"text-center\">WINNER IS TEAM " +
          marko_escapeXml(state.winner) +
          "!</h4></div></div></div><div class=\"row my-4 justify-content-center\"><div class=\"card m-2\"><div class=\"card-header text-center\">BETTER LUCK NEXT TIME TEAM " +
          marko_escapeXml(state.team_blue.team_name !== state.winner ? state.team_blue.team_name : state.team_red.team_name) +
          "...</div><div class=\"card-body d-flex justify-content-center\"><iframe src=\"https://giphy.com/embed/d10dMmzqCYqQ0\" width=\"300\" height=\"300\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div></div><div class=\"card m-2\"><div class=\"card-header text-center\">CONGRATS TEAM " +
          marko_escapeXml(state.winner) +
          "!</div><div class=\"card-body d-flex justify-content-center\"><iframe src=\"https://giphy.com/embed/MEWeqM3BehSDLdghe2\" width=\"350\" height=\"300\" class=\"giphy-embed\" allowFullScreen></iframe></div></div></div>");
      }

      out.w("<div class=\"row justify-content-center fixed-bottom\"><div class=\"btn-group my-4\"><button" +
        marko_classAttr("btn " + (state.game_over_active_toggle === "see_who_won" ? "btn-primary" : "btn-secondary")) +
        " type=\"button\">See Who Won</button><button" +
        marko_classAttr("btn " + (state.game_over_active_toggle === "spymaster" ? "btn-primary" : "btn-secondary")) +
        " type=\"button\">Spy Master Board</button></div></div></div>");
    }
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/undefined$0/components/code_names.marko",
    component: "./code_names.marko"
  };
