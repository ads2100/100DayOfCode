var n = 4 ;

if (n === 1) { 
  document.write("You have 1 new message.");
} 
else if (n === 2) { 
    document.write("You have 2 new messages.");
} 
else if (n === "4") { 
    document.write("You have 4 new messages.");
 }
else { 
     document.write("You have no new messages.");
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