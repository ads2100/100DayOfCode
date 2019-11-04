do {
    var name = prompt("What is your name?");
    var correct = confirm("You entered '" + name + "'.\n" + "Click Okay to proceed or Cancel to re-enter.");
} while (!correct) 
alert("Hello, " + name);

window.onerror = function (msg, url) {
    alert("ERROR: " + msg + "\n" + url);
}
docu111ment.write("Hello");