"use strict";

var fn = require("./src/app");

fn({
	webServer: {
		port: 3000,
		folder: "www"
	}
});
