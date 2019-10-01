var x, z;
function square(x, z) {
    return x * z;
}
document.write(square(3, 9));

document.write("<br>")

function counter() {
    for (var count = 1; ; count++) { 
        document.write(count + "A<br>"); // it will print until 5
        if (count === 5) {
            return;
        }
        document.write(count + "B<br>"); // it will print until 4
    }
    document.write(count + "C<br>"); // it will never print this part
}
document.write(counter());