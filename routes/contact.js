const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {insert, get} = require('../db.js');
const {confirmRoute} = require('../auth.js');
const contact = require('../components/contact.marko');
const index = require("../index.marko");

router.get('/', async function (req, res) {
  res.marko(index, {path: '../', page_id: 'CONTACT', active_page: 'contact'});
});

module.exports = router;
