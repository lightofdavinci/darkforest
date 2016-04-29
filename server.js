'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var api = require('./app/api/api.js');

var app = express();
require('dotenv').load();

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);
api(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});