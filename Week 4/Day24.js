var i = 0; 
var n = 0; 
while (i < 5) {
     i++; if (i == 3) { 
         continue; 
        } 
        n += i; 
        document.write("n="+n+" i="+i+"<br>");
     }
     
     XMLDocument

     // another example

     for (let i = 0; i <= 7; i++) {

        // if true, skip the remaining part of the body
        if (i % 2 == 0) continue;
      
        documetn.write(i); // will print 1, 3, 5, 7
      }

      // example


      var i = 0; 
      var j = 10;
var i = 0; 
var j = 10;
checkiandj: while (i < 4) {
   document.write(i); 
   i += 1; 
   checkj: while (j > 4) {
      document.write(j); 
      j -= 1; 
      if ((j % 2) == 0) { 
        continue checkj; 
      }
         document.write(j + " is odd.");
         } 
         document.write("i = " + i); 
         document.write("j = " + j); 
        }