var x = 5;
var y = 9;
if (x!=y) 
document.write("It will print if they are not equal else it will not print it");

document.write("<br>");

var n = 2; 
if (n == 1) 
document.write("You have 1 new message."); else 
  document.write("You have " + n + " new messages.");

document.write("<br>");

var a = 2;
var b = 3; 
var c = 5; 
var d = "5"
if (a == b){ 
  if (b == c) {
    if (c === d)
  document.write("You have 1 new message."); else 
    document.write("You have " + n + " new messages.");
  } 
else 
  document.write("Something wrong! n not equal to b");
}
else 
  document.write("You have empty message");


// failing and passing example using if statment

var shahad_grade = 100;
  var noura_grade = 80;
  var ahmad_grade = 57;
  var passing_grade = 60;
  
  if (shahad_grade >= passing_grade){
    document.write("Congratulations! you pass and did great job");
    if (noura_grade >= passing_grade){
      document.write("<br> Congratulations! You pass");
    }
    if (ahmad_grade < passing_grade){
     document.write("<br> Sorry you failed");
  } }