// using call 
var person = {
    Course: function () {
        return this.course;
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
var person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
var person3 = {
    course: "Javascript and the DOM"
}
document.write(person.fullName.call(person2));
document.write("<br>")
document.write("I am taking a course in " + person.Course.call(person3));


// example two for using call with arguments
var person = {
    fullName: function (city, country) {
        return "I am " + this.firstName + " " + this.lastName + " and I live in " + city + " , " + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
document.write(person.fullName.call(person1, "Oslo", "Norway"));