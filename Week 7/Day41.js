function Person1() { }
function Person2() { }
Person1.prototype = Object.create(Person2.prototype);
const Person3 = new Person2;
console.log(Person1.prototype.isPrototypeOf(Person3));
//expected output: false
console.log(Person2.prototype.isPrototypeOf(Person3));
//expected output: true



// another example 

function Parent(Name,Age,EyeColor){
    this.Name = Name;
    this.Age= Age;
    this.EyeColor = EyeColor;
}


var mother = new Parent("Aljohara", 50 , "brown");
var father = new Parent("Ahmad", 48, "brown");

Parent.prototype.getName = function(){ // mother and father objects have inherent getName method from person.prototype
    return "Name : " + this.Name;
}

console.log(mother.getName());
console.log(father.getName());