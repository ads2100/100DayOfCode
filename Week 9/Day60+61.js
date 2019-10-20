/* If we have two arrays :
var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];
Write a code that compares them and then returns the place and value of the difference in the second array */

var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];


for (var i = 0; i < second.length; i++) {
    if (first[i] - second[i] == 0) {
        continue;
    }
    else {
        var n = second[i]; // it will take the value that is different than the first array
        document.write("The different between the two array is: " + "<br> " + "The index" + " " + i + " " + "in the second array and the value is" + " " + n)
    }
}