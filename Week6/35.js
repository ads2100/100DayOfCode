function user(id, FirstName, LastName) {
this.id = id; this.FirstName = FirstName;
    this.LastName = LastName;
}

var User1 = new user(11001, "Shahad", "khalid");
var User2 = new user(11002, "Noura", "Saad");

document.write("Users : " + '<br>');
document.write(User1.id + " " + User1.FirstName + " " + User1.LastName
    + '<br>' + User2.id + " " + User2.FirstName + " " + User2.LastName);


// another example
    
function Employees(JobNumber, FirstName, Department) {
    this.JobNumber = JobNumber; this.FirstName = FirstName;
    this.Department = Department;
}

var Employee1 = new Employees(1112, "jomana", "IT")
var Employee2 = new Employees(1113, "Noura", "Finance")

document.write('<br>' + '<br>' + "Employees : " + '<br>');
document.write(Employee1.JobNumber + " " + Employee1.FirstName + " " + Employee1.Department
    + '<br>' + Employee2.JobNumber + " " + Employee2.FirstName + " " + Employee2.Department);