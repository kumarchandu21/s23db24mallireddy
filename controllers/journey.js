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

 // VIEWS
// Handle a show all view
exports.journey_view_all_Page = async function(req, res) {
    try{
    thejourney = await journey.find();
    res.render('journey', { title: 'Journey Search Results', results: thejourney });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.journey_create_post = async function(req, res) {
    console.log(req.body)
    let document = new journey();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.destination = req.body.destination;
    document.cost = req.body.cost;
    document.seasons = req.body.seasons;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
    
