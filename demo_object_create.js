"use strict";

var priya = {
	amt: 20000
};

var ria = Object.create(priya);

console.log(ria.amt);
console.log(Object.getPrototypeOf(ria) === priya);

ria.amt = 300;
console.log(ria.amt);
console.log(priya.amt);
