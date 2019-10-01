var str = "A string in Javascript can be any text inside double or single quotes";
// document.write(s.length);
var a = str.charAt(0);
// var b = s.charAt(s.length-1)); // will print the last character
var c = str.substring(1,8); // this will print the character from the first character to the third one, the index start from 0
var e = str.indexOf("i" , 4); // this will print the number of index for this character after index 4
var f = str.replace("Javascript" , "programming languages");
var g = str.toUpperCase()
document.write(a + "<br>" + c + "<br>" + e + "<br>" + f + "<br>" + g);