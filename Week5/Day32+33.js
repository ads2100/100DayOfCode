// Use try/catch/finally when divid by zero, and to avoid the appearnce of "infinity" statement use any other statement.

var AddNum = Number(prompt("Add number"));
var Zero = 0;
try {
    if (Zero === 0) {
        throw ("Ops! you can't divide by zero!");
    }
    else {
        var divide = AddNum / Zero;
    }
}

catch (err) {
    alert(err);
}

finally {
    if (AddNum == "null" || AddNum == null || AddNum == "") {
        alert("Sorry there is somthing wrong!");
    }
}