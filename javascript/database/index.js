var readlineSync = require('readline-sync');
var moment = require('moment');

var library = [
];

var users = [
	{ id: 0 }
];

var books = [
	{ id: 1, name: 'The God Father', limitTime: 5 },
	{ id: 2, name: 'The Alchemist', limitTime: 10 },
	{ id: 3, name: 'Lean Startup', 	limitTime: 12 },
	{ id: 4, name: 'Your name', limitTime: 12 }
];



function user (id, userName, password) {
	this.id = id;
	this.userName = userName;
	this.password = password;
}


function createNewAccount() {
	var userName = readlineSync.question('User name: ');
	var password = readlineSync.question('Password: ');

	users.push(new user(users[users.length].id + 1, userName, password));
}


function chooseBook() {

}


function hireBooks() {

	// Login 
	var userName = readlineSync.question('User name: ');
	var password = readlineSync.question('Password: ');
	var user = users.find((element) => element.userName === userName && element.password === password);

	if (user !== undefined) {

		

	}



}




