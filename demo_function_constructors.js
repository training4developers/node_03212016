"use strict";

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

function Student(studentId, firstName, lastName) {
	this._super.call(this, firstName, lastName);
	this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getRecordInfo = function() {
	return this.studentId + " " + this.lastName + ", " + this.firstName;
};

var s = new Student(1, "Vijay", "Kapoor");
console.log(s.getRecordInfo());
console.log(s.getFullName());

//
// var p = new Person("Neha", "Sikri");
// //console.log(require("util").inspect(p));
// console.dir(p, { depth: 1 });
// console.log(p.getFullName());
//
// var p2 = new Person("Bob", "Martin");
// console.log(p2.getFullName());
//
// console.log(Object.getPrototypeOf(p) === Person.prototype);
// console.log(Object.getPrototypeOf(Person) === Person.prototype);
//
// console.log(p.getFullName === p2.getFullName);
// console.log(Object.getPrototypeOf(p) === Object.getPrototypeOf(p2));
