var x; 
function positive(x) {
     if (x >= 0) document.write("the number is positive"); 
     else throw "x must not be negative"; 
    } 
    positive(-1);


// another example

var z;
function OddNum(z) {
    if (z % 2) document.write("the number is odd");
    else throw "x must not be even";
}
OddNum(2); // it will print "x must not be even" in the console