var Today = new Date();
var ThisDay = Today.getDay();

if (ThisDay===0){
  alert("Have a good Sunday");
}
else if (ThisDay >= 5 && ThisDay <= 7){
  alert("Have a good weekend")
}
else {
  alert("Have a good day")
}


// second example 

var a = 10;
var b = 18;
var c = 8;

if ( a>5 && b<8) {
    document.write("You can enter for free");
}
else if (a || b >= c) {
  document.write("You will have 50% disscount");
}
else {
  document.write("Sorry you will have to pay");
}