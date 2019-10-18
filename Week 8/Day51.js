// using for loop
var Students = ["Shahad", "Amal", "Fatima", "Aljohara", "Mona"];
for (var i = 0; i < Students.length; i++) {
    document.write(Students[i]);
     document.write("<br>");
}


document.write("<br>");

// using forEach
var txt = "";
var Cities = ["Riyadh", "Khobar", "Jeddah", "Alola"];
Cities.forEach(function (City) {
    document.write(City);
    document.write("<br>");
});

document.write("<br>");

// another example that print just the elements that is bigger than 18
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction); // Filter method creates a new array with all array elements that passes a test.
document.write(over18);

function myFunction(value) {
    return value > 18;
}