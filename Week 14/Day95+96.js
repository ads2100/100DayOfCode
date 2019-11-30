var url = new URL('http://demourl.com/path?id=100&topic=main');

var query_string = url.search;

var search_params = new URLSearchParams(query_string);

search_params.append('id', '101');

search_params.append('id', '102');

url.search = search_params.toString();

var new_url = url.toString();

// output : http://demourl.com/path?id=100&id=101&id=102&topic=main
console.log(new_url);