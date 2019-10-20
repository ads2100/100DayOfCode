// map method ; creates an array by calling a specific function on each element present in the parent array.

var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
document.write(x);

// another example on map method

var persons = [
    { firstname: "Shahad", lastname: "Alyahya" },
    { firstname: "Jomana", lastname: "alyahya" },
    { firstname: "Aisha", lastname: "almalki" }
];

function getFullName(item) {
    var fullname = [item.firstname + " " + item.lastname].join(" ");
    return fullname;
}
function myFunction() {
    return persons.map(getFullName);
}
document.write(myFunction());

// filter method ; take part of the array and create new array from it

a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function (x) {
     return x < 3 
    }
    );
everyother = a.filter(function (x, i) { 
    return i % 2 == 0 
    }
    );
document.write(smallvalues);
document.write("<br>");
document.write(everyother);


// another example for filter 
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length < 6);

console.log(result);

// every & some method 
// using every
a = [1, 2, 3, 4, 5];
y = a.every(function (x) {
    return x < 10;
}
)
z = a.every(function (x) {
    return x % 2 === 0;
}
)
document.write(y);
document.write("<br>");
document.write(z);


document.write("<br>");

// using some 
a = [1, 2, 3, 4, 5];
y = a.some(function (x) {
    return x < 10;
}
)
z = a.some(function (x) {
    return x % 2 === 0;
}
)
document.write(y);
document.write("<br>");
document.write(z);



// reduce & reduceRight method 

var numbers = [175, 50, 25];
var leftToRight = numbers.reduce(function (total, num) {
    return total - num;
});
var RighToLeft = numbers.reduceRight(function (total, num) {
    return total - num;
});
document.write(leftToRight);
document.write("<br>");
document.write(RighToLeft);


// indexOf & lastIndexOf method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
var b = fruits.lastIndexOf("Mango");
document.write(a);
document.write("<br>");
document.write(b);


// another example on indexOf & lastIndexOf method
var Welcoming = "Welcome to new beginning!";
var first = Welcoming.indexOf("n");
var last = Welcoming.lastIndexOf("n");
document.write(first);
document.write("<br>");
document.write(last);