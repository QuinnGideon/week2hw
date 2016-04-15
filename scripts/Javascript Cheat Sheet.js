var lunch = pizza; // Example of variable
var movies = ["Dark Knight", "Sicario", "Pans Labyrinth"]; //  Another example of variable

alert('Alert!')  // 1st debugger
console.log ('Alert!') // 2nd debugger
// comments // 3rd debugger


"This is a string"  // Data-type: String
5,500  // Data-type: Number
True, False  // Data-type: Boolean;
var car = {make: 'Toyota', model: 'Prius'}  //  Data-
if // Number, Boolean, Undefined,


["Dark Knight", "Sicario", "Pans Labyrinth"] // Example of an Array

if (x === 3){								//  Example of logic
	console.log ('Awesome number choice');
else {
	console.log ('Please try again');
};
};

var freeLunch = function(pizza);  //  Example of a function



// Question 1:
//Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings.
var x = 2;
var y = 3;

var add = function(x,y) {
	console.log(x + y);
};


var a = "This was an ";
var b = "interesting week";

var add = function(x,y) {
	console.log(x + y);
};
//////////////////

// Question 2:
// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var classroom = [["students", "projector", "teachers", "desks"], ["chairs", "windows", "shades"]];
	console.log(classroom[0][3]); // gives desks
	console.log(classroom[1][0]); // gives chairs

///////////////////

// Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.

var lessThan10 = function(x){
	if (x < 10){
		alert(x + " is less than 10");
	} else {
		console.log('Your number was greater than 10.');
	};
};
lessThan10(8) // gives alert
lessThan10(12) // prints to console



