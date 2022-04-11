const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee ('Ryan Uhl', 1,'ryanmuhl@hotmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
   
  });

  test("gets an Employee name", () => {
    const employee = new Employee ('Ryan Uhl', 1,'ryanmuhl@hotmail.com');
  
    expect(employee.getName()).toEqual(expect.any(String));
  });