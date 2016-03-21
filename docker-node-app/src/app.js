module.exports = function(config) {

	"use strict";

	const
		util = require("util"),
		url = require("url"),
		fs = require("fs"),
		express = require('express'),
		path = require("path");

	let
		app = express();

	app.use(function(req, res, next) {

		var pathName = url.parse(req.url).pathname;
		var fileName = "";

		if (pathName === "/") {
			fileName = "index.html";
		} else {
			fileName = pathName.substring(1);
		}

		fs.readFile(path.join(__dirname, config.webServer.folder, fileName),
			"utf-8", function(err, data) {

				if (err) {
					console.log(util.inspect(err, {
					 	depth: 0
					}));
					res.send("an error occurred");
					return;
				}

				res.send(data);

			});
		// console.log(util.inspect(url.parse(req.url), {
		// 	depth: 0
		// }));

	});

	//app.use(express.static(path.join(__dirname, config.webServer.folder)));
	app.listen(config.webServer.port, function() {
		console.log('Running a web server on port ' + config.webServer.port);
	});

};
