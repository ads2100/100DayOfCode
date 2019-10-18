// toString method ; Returns string for all elements of the array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
document.write(fruits);

// forEach method
// First example
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
    return sum += item;
}
document.write(sum);
document.write("<br>");

// Second example

function myFunction(item, index) {
    document.write(index + ":" + item + "<br>");
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(myFunction);

//Third example
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)
function myFunction(item, index, arr) {
    arr[index] = item * 10;
} 
document.write(numbers);