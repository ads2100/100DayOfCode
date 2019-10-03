// write one array for graduated students and another array for GBA using double data type, then assign each student with their GBA in separate variables.

var GraduatedStudents = ["Shahad", "Noura", "Fahda", "Aljohara", "Fatima"];
var GBA = [5 , 4.30 , 3.93 , 2.85 , 4.0];

for (var index in GraduatedStudents) {
    document.write("Studnet name: " + GraduatedStudents[index] + '<br>' + "GBA: " + GBA[index] + "<br>" + "<br>");
}

Array.prototype.inher = function() {
    return "Studnet name: " + this.GraduatedStudents + '<br>' + "GBA: " +this.GBA;
}