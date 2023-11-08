require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var journey = require("./models/journey");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var journeyRouter = require('./routes/journey');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/journey', journeyRouter);
app.use('/board',boardRouter);
app.use('/choose',chooseRouter);
app.use('/resource', resourceRouter);

const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(){
console.log("Connection to DB succeeded")});


async function recreateDB(){
// Delete everything
//await journey.deleteMany();
await journey.deleteMany({}).maxTimeMS(30000); // Adjust the timeout value as needed

let instance1 = new
journey({destination:"Norway", seasons:'spring', cost:3000});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}


// Define a custom 404 error handler
//app.use(function(req, res, next) {
 // res.status(404).send('Not Found');
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
