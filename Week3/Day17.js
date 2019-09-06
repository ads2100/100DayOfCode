var Day = "Friday"; 
switch (Day) { 
  case "Sunday": 
  case "Monday":
  case "Tuesday": 
  case "Wednesday": 
  case "Thursday": 
    alert("it is work days");       
    break;
  default:
    alert("Happy weekend"); 
    break; 
}

// second example 

var grade = 59;
switch(true){
   case grade >=60:
    document.write("You pass");
    break;
   case grade <=60:
   document.write("You fail");
    break;
    default:
    document.write("I wish you will do great in the exam!");
    break;
}