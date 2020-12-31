$_mod.def("/undefined$0/components/code_names", function(require, exports, module, __filename, __dirname) { 'use strict';

const EventEmitter = require('/events$1.1.1/events'/*'events'*/);
const wretch = require('/wretch$1.7.2/dist/bundle/wretch'/*"wretch"*/)
class CodeNamesEvent extends EventEmitter {
  constructor(code_name_id) {
    console.log("jioejafgjewijfijewaf COD ANMES");
    super();
    this.fetch(code_name_id);
  }

  fetch(code_name_id) {
    wretch(`http://localhost:5000/projects/code_names/${code_name_id}/ajax`)
      .get()
      .notFound(error => { console.log("ERROR>>> ", error) })
      .unauthorized(error => { console.log("ERROR>>> ", error) })
      .error(418, error => { console.log("ERROR>>> ", error) })
      .res(response => console.log("RESPONSE>>> ", response))
      .catch(error => { console.log("ERROR>>> ", error) })
  }
}

module.exports = CodeNamesEvent;

});