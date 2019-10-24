// example
var o;
function printprops(o) {
    for (var p = 0; p < o; p++) {
        document.write("p = " + p + "<br>");
    }
}
printprops(5);


// example
function distance(x, z) {
    return ((x * z) / 5);
}
document.write(distance(6, 10));


// we can use function inside function 
function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(a) + square(b));
}
document.write(hypotenuse(3, 4));