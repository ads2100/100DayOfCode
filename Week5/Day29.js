var x;
function positive(x) {
    if (x >= 0) return x;
    else throw "the number must not be negative";
}

try {
    var n = Number(prompt("Please enter a positive integer", ""));
    positive(n);
    alert(n + " is positive");
}
catch (y) {
    alert(y);
    document.write(y);
}

// another example

var x;
function OddNum(x) {
    if (x % 2) document.write(Num + " " + " is odd");
    else throw "x must not be even";
}

try {
    var Num = prompt("Please enter a Odd number", "");
    OddNum(Num);
    alert(Num + " is odd");
}
catch (e) {
    alert(e);
    document.write(e);
}
finally {
    if (Num % 2) // if we don't add the condition here it will print the sentence whether it's odd or even number
        alert("Finally, you got it");
}