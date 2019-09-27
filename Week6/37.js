var User1 = {
    Username: "User55221",
    Email: "Test@test.com",
    Country: "Saudi Arabia",
    $ReturnFun: function () {
        return "Username: " + this.Username + '<br> Country: ' + this.Country;
    },
};

document.write("Username" in User1); // that test if this property is in this object or not
document.write('<br>');
document.write("Country" in User1);
document.write('<br>');
document.write("Passowrd" in User1); // this will return false because this property is not in this object
document.write(User1.hasOwnProperty("Passowrd")); 
document.write(User1.propertyIsEnumerable('name')); // another method to test about the property