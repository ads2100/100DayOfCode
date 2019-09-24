var User1 = {
    Username: "User55221",
    Email: "Test@test.com",
    Country: "Saudi Arabia",
    $ReturnFun: function () {
        return "Username: " + this.Username + '<br> Country: ' + this.Country;
    },
};

document.write(User1.$ReturnFun() + '<br>');
document.write("'this' keyword is object Window: ")
document.write(this === window)
var Num = 89;
document.write('<br>' + window.Num + '<br>'); // or we can use this.Num all the same


function TestFun() { 
    return this;
 } 
document.write(TestFun()) // this function will return that 'this' is object Window