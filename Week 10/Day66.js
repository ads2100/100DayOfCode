// JavaScript Closures ; different between local and global variable 

function myFunction() {
    var a = 4; // local
    return a * a;
}

console.log(myFunction())


var a = 4; //global
function myFunction() {
    return a * a;
}

console.log(myFunction())


// another example 
var counter = 0;
function add() {
    counter += 2;
}
add();
add();
add();
document.write(counter);


// example
var counter = 0;
function add() {
    var counter = 0;
    counter += 1;
}
add();
add();
add();
document.write(counter); // it will print 0 

// simple example of closure ; any function where you using variable from outside the scoop are closure

var passed = 3

var addTo = function(){
    var inner = 2;
    return passed + inner;
}
console.log(addTo()) // it will print 5


// example
function add() {
    var counter = 0;
    counter += 1;
    return counter;
}
add();
add();
add();
console.log(add()); // it will print 1

// example
var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter
    }
})();

add();
add();
add();
document.write(add()); // it will print 4