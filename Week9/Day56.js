/* splice method ; it make changes to the array, the first parameter for the start (it's mandatory) 
and the second parameter is for how many element in array will be deleted , 
after that we add the new elements that we want to add in the array */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.splice(1, 2, "Lemon", "Kiwi"));
document.write("<br>")
document.write(fruits)


document.write("<br>")

var Num = ["11", "12", "17", "20", "55", "2"];
document.write(Num.splice(2, 4, "13", "14", "15", "16"));
document.write("<br>")
document.write(Num)


// Push method ; to add new element in the array 
var Universities = [" PSU ", " IAU  ", " PNU ", " KFU "];
Universities.push(" KSU ");
document.write(Universities)


// pop method ; to delete the last element in the array
var Universities = [" PSU ", " IAU  ", " PNU ", " KFU "];
Universities.pop()
document.write(Universities)

// Unshift method ; to add new elements in the beginning of the array
var Universities = [" PSU ", " IAU  ", " PNU ", " KFU "];
Universities.unshift(" KSU ", " IMAMU ")
document.write(Universities)

// shift method ; to delete the first element in the array
var Universities = [" PSU ", " IAU  ", " PNU ", " KFU "];
Universities.shift()
document.write(Universities)