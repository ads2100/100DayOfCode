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
document.write(person.fullName.apply(person2));
document.write("<br>")
document.write("I am taking a course in " + person.Course.apply(person3));


// example two for using apply with arguments ; the different between apply and call that call take Separate arguments while apply take it as array
var person = {
    fullName: function (city, country) {
        return "I am " + this.firstName + " " + this.lastName + " and I live in " + city + " , " + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
document.write(person.fullName.apply(person1 , ["Oslo", "Norway"]));