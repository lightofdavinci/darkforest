'use strict';

var path = process.cwd();

module.exports = function (app) {

	function isLoggedIn (req, res, next) {
			return next();
		}

	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user.github);
		});
};