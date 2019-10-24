// example
function myFunction(a, b) {
    return a * b;
}
var x = myFunction(4, 3);
document.write(x)


// example for function called it self
    (function s() {
        document.write("Hello! I called myself");
    })();
    

// example for built-in JavaScript function constructor
var myFunction = function (a, b) { return a * b }
document.write(myFunction(4, 3));

document.write("<br>")

var myFunction = new Function("a", "b", "return a * b");
document.write(myFunction(4, 3));
