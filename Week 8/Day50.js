// ways of deleting element in array

var numbers = [1, 2, 3];
delete numbers[1]; // here we delete index 1
console.log(numbers); // It will print the array but index 1 will be 'undefined' because we delete it

var n = numbers.length; 
console.log(n); // if we try to see the length of the array it will be the same 3 because even if we delete element it will not affect the length it will be the same 

// another way
 
var names = ['Omar', 'Talal', 'Ahmed', 'Saad', 'Fahad']; // we create array with 5 values 
names.length = 3; // here we specify the length of the array so it will directly delete the last two values 
names.length = 0; // here we delete all the values of the array because we specify the length is zero 
name.length = 5; // here we specify the length of the array again ! but it's empty now
console.log(name) // if we try to print it it will not print anything because it's empty 