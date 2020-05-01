var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hellos from the GET call to the server on the router user');
});

module.exports = router;
