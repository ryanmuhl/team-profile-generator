const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('New Manager', () => {
    const manager = new Manager ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "officenumber");
  
    expect (manager.getName()).toEqual("Ryan Uhl");
  });

  test('New Manager id', () => {
    const manager = new Manager ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "officenumber");
  
    expect (manager.getId()).toEqual(1);
  });

  test('New Manager email', () => {
    const manager = new Manager ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "officenumber");
  
    expect (manager.getEmail()).toEqual("ryanmuhl@hotmail.com");
  });

  test('New Manager officenumber', () => {
    const manager = new Manager ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "officenumber");
  
    expect (manager.getOffice()).toEqual("officenumber");
  });