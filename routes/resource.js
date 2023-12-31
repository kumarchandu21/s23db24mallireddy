var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var journey_controller = require('../controllers/journey');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// journey ROUTES ///
// POST request for creating a journey.
router.post('/journey', journey_controller.journey_create_post);
// DELETE request to delete journey.
router.delete('/journey/:id', journey_controller.journey_delete);
// PUT request to update journey.
router.put('/journey/:id', journey_controller.journey_update_put);
// GET request for one journey.
router.get('/journey/:id', journey_controller.journey_detail);
// GET request for list of all journey items.
router.get('/journey', journey_controller.journey_list);
module.exports = router;