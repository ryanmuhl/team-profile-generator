//require Employee Class from ./employee directory
const Employee = require('./Employee');

//Create Engineer sub class that extends the Employee Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer; 