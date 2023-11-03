var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('journey', { title: 'Search Results for Journey' });
});

module.exports = router;

