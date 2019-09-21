var x;
var z = 0;
function DivisionZero(z, x) {
    if (x / z) document.write("You try to divide to zero!");
    else throw "Sorry there is somthing wrong!";
}

try {
    var Num = Number(prompt("Add number"));
    var tr = DivisionZero(Num / 0);
    alert(tr);
}
catch (err) {
    alert("Error has occurred!");
}
finally {
    if (!x / z)
        document.write("Sorry there is somthing wrong!")
}