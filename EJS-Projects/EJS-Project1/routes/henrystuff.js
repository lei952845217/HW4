var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('henryshoestore', { title: 'Henry Shoe Store' });
})

router.get('/register', function(req, res, next) {
  res.render('henryregister', { title: 'Henry Shoe Store' });
})

module.exports = router;
