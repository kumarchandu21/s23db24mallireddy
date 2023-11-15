/*var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('journey', { title: 'Search Results for Journey' });
});

module.exports = router;*/

var express = require('express');
const journey_controlers= require('../controllers/journey');
var router = express.Router();
/* GET costumes */
router.get('/', journey_controlers.journey_view_all_Page );
/* GET detail journey page */
router.get('/detail', journey_controlers.journey_view_one_Page);


module.exports = router;


