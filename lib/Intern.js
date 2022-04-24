//require Employee Class from ./employee directory
const Employee = require('./Employee');

//Create Intern sub class that extends the Employee Class
class Intern extends Employee {
    constructor(name, id, email, university) {
        super(name, id, email)
        this.university = university
    }

    getRole() {
        return "Intern"
    }

    getUniversity() {
        return this.university
    }

}

//Export Intern Class
module.exports = Intern; 