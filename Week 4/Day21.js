// In do/while we execute the statement before the expression

// example one
var count =0; 
do { 
  document.write(count + "<br>"); 
  count++;
}
while (count++ < 10);


document.write("<br>")

// example two
var count =0; 
do { 
  document.write(count + "<br>");
  count++; 
}
while (count < 10);


document.write("<br>")

// example three
var Languages = ["Arabic", "German", "France", "spanish"];
var i = 0;
do{
  document.write(Languages[i] + "<br>");
   i++;
}
while (Languages[i]);
