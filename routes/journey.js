/*var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('journey', { title: 'Search Results for Journey' });
});

module.exports = router;*/

var express = require('express');
const journey_controlers = require('../controllers/journey');
var router = express.Router();
/* GET costumes */
router.get('/', journey_controlers.journey_view_all_Page);
/* GET detail journey page */
router.get('/detail', journey_controlers.journey_view_one_Page);
/* GET create journey page */
router.get('/create', journey_controlers.journey_create_Page);

/* GET create costume page */
//router.get('/create', journey_controlers.journey_create_post);

/* GET update costume page */
router.get('/update', journey_controlers.journey_update_Page);

/* GET delete journey page */
router.get('/delete', journey_controlers.journey_delete_Page);

// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
}




module.exports = router;


