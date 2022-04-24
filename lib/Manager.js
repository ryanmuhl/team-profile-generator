//require Employee Class from ./employee directory
const Employee = require('./Employee');

//Create Manager sub class that extends the Employee Class
class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.officenumber = officenumber
    }

    getRole() {
        return "Manager"
    }

    getOffice() {
        return this.officenumber
    }

}

//export manager class
module.exports = Manager; 