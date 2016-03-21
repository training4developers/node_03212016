"use strict";



function outer() {
	var t = 10;

	function inner() {
		console.log(t);
	}

	setTimeout(function() {
		t = 100;
	}, 1000);

	return inner;
}

var f = outer();
f();
setTimeout(function() {
	f();
}, 2000);
