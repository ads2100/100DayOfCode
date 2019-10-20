// String as array is a way to deal with string as array 

// charAt method
var str = "HELLO WORLD";
var res = str.charAt(0); // Will take the first letter 
var resEnd = str.charAt(str.length - 1);// will take the last letter because it's negative number and that mean it will start from the end 
document.write(res);
document.write("<br>");
document.write(resEnd);


// include method ; it will check if this word is in the string or not and it return either true or false
var str = "Hello world, welcome to the universe.";
var check1 = str.includes("world");
var check2 = str.includes("sun");
document.write(check1);
document.write("<br>");
document.write(check2);

// localeCompare method ; to compare , it will return -1 if the first string order before the second string, and it will return 0 if they are equal , and 1 if it was the oppesite
var str1 = "ab";
var str2 = "cd";
var n = str1.localeCompare(str2);
document.write(n);

// search method
var str1 = "welcome to this learning journey";
var n = str1.search("to");
document.write(n);

