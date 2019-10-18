// join method ; it return the values of the array as string

var Universities = [" PMU ", " KSU ", " PNU ", " KFU "];
document.write(Universities.join());

// reverse method ; it reverse the order of the array
var Universities = [" PMU ", " KSU ", " PNU ", " KFU "];
document.write(Universities.reverse());

// Concat method ; to merge to method
var Universities1 = [" PMU ", " KSU ", " PKU "];
var Universities2 = [" PSU ", " IAU  ", " PNU ", " KFU "];
document.write(Universities1.concat(Universities2));


// slice method ; to take part of the array where the first parameter is the beginning of the array and the second parameter is the end of the array.
var Universities = [" PSU ", " IAU  ", " PNU ", " KFU "];
document.write(Universities.slice(1, 3));
document.write("<br>");
document.write(Universities.slice(1)); // it take the elements that is from the first index to the end of the array
document.write("<br>");
document.write(Universities.slice(2)); // it take the elements that is from the second index to the end of the array
document.write("<br>");
document.write(Universities.slice(-1)); // The negative number starts from the end
document.write(Universities.slice(1, -1));