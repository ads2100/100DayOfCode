// Create an object: 
var person = {
  firstName: "Jolia",
  lastName: "Nazia",
  language: "EN",
  get langGet() { // get إنشاء
    return this.language;
  },
  set langSet(value) { // set إنشاء
    this.language = value;
  },
  get NameGet() {
    return this.firstName;
  },
  set NameGet(name) {
    this.firstName = "Noura";
  }
};

person.langSet = "AR";
person.NameGet = "Noura";
// Display data from the object using getter 
document.write(person.langGet + '<br>' + person.NameGet);

