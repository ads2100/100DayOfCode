var url = new URL('http://demourl.com/path?id=100&topic=main'); 
var query_string = url.search; 
var search_params = new URLSearchParams(query_string);
// new value of "id" is set to "101" 
search_params.set('id', '101'); 
// change the search property of the main url  
url.search = search_params.toString(); // the new url string 
var new_url = url.toString(); // output : http://demourl.com/path?id=101&topic=main
console.log(new_url);