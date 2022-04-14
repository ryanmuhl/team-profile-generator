const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('New Intern', () => {
    const intern = new Intern ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "university");
  
    expect(intern.getName()).toEqual("Ryan Uhl");
  });

  test('New Intern id', () => {
    const intern = new Intern ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "university");
  
    expect(intern.getId()).toEqual(1);
  });

  test('New Intern email', () => {
    const intern = new Intern ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "university");
  
    expect(intern.getEmail()).toEqual("ryanmuhl@hotmail.com");
  });

  test('New Intern university', () => {
    const intern = new Intern ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "university");
  
    expect(intern.getUniversity()).toEqual("university");
  });