document.write("First example:" +"<br>")
for(var count =0 ; count < 10 ; count++){ document.write(count + "<br>"); 
}

document.write("<br>" + "Second example:" +"<br>")
// we can also declare more that variable in the same loop

var i,j,multi; 
for(i = 1, j = 6 ; i < 4 ; i++, j--){
  multi = i * j; 
  document.write(multi+"<br>"); 
}

document.write("<br>" + "Third example:" + "<br>")

// Also we can declare the variable outside the loop

function OddNum(num) {
  let i=1
  for (let i=1; i<num; i++) {
    if(i % 2 !== 0) {
      document.write(i + "<br>");
    }
  }
}

function EvenNum(num) {
  let i=1
  for (; i<num; i++) {
    if(i % 2 === 0) {
      document.write(i + "<br>");
    }
  }
}

EvenNum(10);
document.write("<br>");
OddNum(10);