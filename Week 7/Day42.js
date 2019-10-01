function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "Arabic";
Person.prototype.Country = "Saudi Arabia";
var myFather = new Person("Mohammed", "AlAli", 50, "Red");
var myMother = new Person("Mohammed", "AlAli", 50, "Red");

console.log("The nationality of my father is " + myFather.nationality);
console.log("My mother live in " + myMother.Country); // we inherent the properties of Person function and add new Property "country"