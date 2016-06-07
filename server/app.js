// require express
var express = require( 'express' );
// create a new express app
var app = express();
// require path
var path = require( 'path' );

// spin up the server
var server = app.listen( 8080, 'localhost', function(){
  console.log( 'server listening on port 8080' );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'hello world from base url get' );
  res.writeHead(200);
  res.write('we are in the base url');
  res.end();
});

// another url
app.get( '/kitties', function( req, res ){
  console.log( 'hello world from kitties get' );
  res.write('we are in the kitties path');
  res.write('we are still in the kitties path');
  res.end();
});

// set up "public" folder for static files
app.use( express.static( 'public' ) );
