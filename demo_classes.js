"use strict";
class Person2 {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return this.firstName + " " + this.lastName;
	}

}

class Student2 extends Person2 {

	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId
	}

	getRecordInfo() {
		return this.studentId + " " + this.lastName + ", " + this.firstName;
	}

}

var s = new Student2(2, "Super Mario", "Brothers");
console.log(s.getRecordInfo());
console.log(s.getFullName());

// var p3 = new Person2("Bob", "Martin");
// console.log(p3.getFullName());
// console.log(typeof Person);
// console.log(typeof Person2);
