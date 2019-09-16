for(var i = 0; i < 1000; i++) {
     document.write("Hello<br>"); 
if (i===4) 
  break; 
}

document.write("<br>");


var x = 0; 
var z = 0;
labelCancelLoops: while (true) { 
  document.write("Outer loops(x): " + x + " "); 

x += 1; 
z = 1; 
while (true) { 
document.write("Inner loops(z): " + z + "<br>" ); 

z += 1; 
if (z === 3 && x === 3) {
  break labelCancelLoops; 
} 
else if (z === 3) {
  break; 
} 
 }
  }



  // another example

  //outer is the name of label
  outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if it is an empty or canceled from user, then break out of both loops
      if (!input) break outer;
  
    }
  }
  alert('Done!');

  // example

  LabelStudnet: for (let i = 0; i < 1; i++) {


    let name = prompt("What is your name?");
    if (name){
     let classNum = prompt("What is the number of your class?"); 
      document.write("your name is" + " " + name + " " + "and your class is" + " " + classNum )
    
   
    // if an empty string or canceled, then break out of both loops
    if (!input) break LabelStudnet; // (*)

    // do something with the value...
}
}
alert("Sorry! we did not find any result.. \n You should go to the students affair");