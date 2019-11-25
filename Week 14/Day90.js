// if we want to locate the url of the current website:
document.write(window.location.href);
document.write("<br>");
document.write(window.location.hostname); // this locate the hostname of the website
document.write("<br>");

// example of searchParams
var url_string = "http://www.example.com/t.html?a=1&b=3&username=m2-m3-m4-m5";
var url = new URL(url_string);
var c = url.searchParams.get("username");
document.write(c);


// another example
var params = (new URL("https://example.com/?name=Jonathan%20Smith&age=18"));
var name = params.searchParams.get("name"); // is the string "Jonathan Smith".
var age = params.searchParams.get("age"); // is the number 18
document.write(name + "<br>");
document.write(age);