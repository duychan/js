// constructor function
function Course(name, cost) {
    this.name = name;
    this.cost = cost;
}
const myCourse =
    new Course('JS', '1');
console.log(myCourse);

// class

class Course {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}