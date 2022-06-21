
const Employee = require('../lib/Employee');



  test('Employee name', () => {
    const employee = new Employee ("Ryan Uhl", 1,"ryanmuhl@hotmail.com");
  
    expect(employee.getName()).toEqual("Ryan Uhl");
  });

  test('Employee id', () => {
    const employee = new Employee ("Ryan Uhl", 1,"ryanmuhl@hotmail.com");

    expect(employee.getId()).toEqual(1);

  });

  
  test('Employee email', () => {
    const employee = new Employee ("Ryan Uhl", 1,"ryanmuhl@hotmail.com");

    expect(employee.getEmail()).toEqual("ryanmuhl@hotmail.com");

  });

  test('Employee role', () => {
    const employee = new Employee ("Employee");

    expect(employee.getRole()).toEqual("Employee");

  });

  