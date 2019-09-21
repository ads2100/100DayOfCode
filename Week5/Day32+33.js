var x = Number(prompt("Add number"));
var z = 0;
function DivisionZero(x, z) {
    if (x / z ) document.write("You try to divide to zero!");
    else throw "Sorry there is somthing wrong!";
}

try {
    var tr = DivisionZero(x / z);
    alert(tr);
}
catch (err) {
    alert("Error has occurred!");
}