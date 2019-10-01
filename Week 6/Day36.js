var User1 = {
    Username: "User55221",
    Email: "Test@test.com",
    Country: "Saudi Arabia",
    $ReturnFun: function () {
        return "Username: " + this.Username + '<br> Country: ' + this.Country;
    },
};

delete User1.Username; // this will delete the property
delete User1.Country;
document.write(User1.Username + '<br>');
document.write(User1.Country + '<br>');
document.write(User1.$ReturnFun() + '<br>');