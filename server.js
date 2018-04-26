

// npm packages used

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// ==============================================================================

// Express process server

var app = express(); 
var PORT = process.env.PORT || 3000; // Sets an initial port

// Body parse the results
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER


require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


// ==============================================================================
// LISTENER
// Tells user that port is listening 
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});