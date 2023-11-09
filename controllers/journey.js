var journey = require('../models/journey');
// List of all journeys
exports.journey_list = function(req, res) {
res.send('NOT IMPLEMENTED: journey list');
};
// for a specific journey.
exports.journey_detail = function(req, res) {
res.send('NOT IMPLEMENTED: journey detail: ' + req.params.id);
};
// Handle journey create on POST.
exports.journey_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: journey create POST');
};
// Handle journey delete form on DELETE.
exports.journey_delete = function(req, res) {
res.send('NOT IMPLEMENTED: journey delete DELETE ' + req.params.id);
};
// Handle journey update form on PUT.
exports.journey_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: journey update PUT' + req.params.id);
};

// List of all Costumes
exports.journey_list = async function(req, res) {
    try{
    thejourney = await journey.find();
    res.send(thejourney);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
 };

    
