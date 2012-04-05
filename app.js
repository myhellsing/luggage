var express = require('express')
  , routes = require('./routes')
  , db = require('mongoose')
  , models = require('./models')
  , lib = require('./lib')
  , utils = lib.utils;

var app = module.exports.app = express.createServer();
module.exports.models = models
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  db.connect('mongodb://hsalkaline.dlinkddns.com/dev_db');
});

app.configure('production', function(){
  app.use(express.errorHandler());
  db.connect('mongodb://hsalkaline.dlinkddns.com/prod_db');
});

// Routes
app.get('/', utils.curry(routes.list, models.bill));
//app.get('/create', routes.create);
//app.post('/create', routes.create);

app.listen(process.env.PORT);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
