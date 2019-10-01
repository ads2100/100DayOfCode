// The first way: create object with properties and assign the values ​​using getter & setter

var Studnet = {
    Subject: "Computer architecture",
    CoordinatorName: "Fatima M",
    NOofHours: 3,
    NoofStudents: 30,
    get SetSubject() {
        return this.Subject;
    },
    set SetSubject(subject) {
        this.Subject = subject;
    },
    get SetCorName() {
        return this.CoordinatorName;
    },
    set SetCorName(CorName) {
        this.CoordinatorName = CorName;
    },
    get SetNofHours() {
        return this.NOofHours;
    },
    set SetNofHours(NoOfHours) {
        this.NOofHours = NoOfHours;
    }
};

Studnet.SetSubject = "Opreating system";
Studnet.SetCorName = "Najla";
Studnet.SetNofHours = 4;

document.write(Studnet.SetSubject + '<br>')
document.write(Studnet.SetCorName + '<br>')
document.write(Studnet.SetNofHours)


// the second way: create function with properties and assign the values ​​using inheritance


function $Student(Subject, CoordinatorName, NOofHours, NoofStudents){
    this.Subject = Subject;
    this.CoordinatorName = CoordinatorName;
    this.NOofHours = NOofHours;
    this.NoofStudents = NoofStudents;
}

var Student1 = new $Student("Network analysis" , "Fatima M" , 3 , 30);
var Student2 = new $Student("Opreating system", "Najla", 4, 30);

document.write("Student1: " + '<br>' + "Subject: " + Student1.Subject + '<br>' + 'Coordinator Name: ' + Student1.CoordinatorName + '<br>' + 'Number of Hours: ' + Student1.NOofHours + '<br>');
document.write('<br>' + "Student1: " + '<br>' + "Subject: " + Student2.Subject)