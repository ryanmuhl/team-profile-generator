const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('New Engineer', () => {
    const engineer = new Engineer ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "github");
  
    expect(engineer.getName()).toEqual("Ryan Uhl");
  });

  test('New Engineer id', () => {
    const engineer = new Engineer ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "github");
  
    expect(engineer.getId()).toEqual(1);
  });

  test('New Engineer email', () => {
    const engineer = new Engineer ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "github");
  
    expect(engineer.getEmail()).toEqual("ryanmuhl@hotmail.com");
  });

  test('New Engineer github', () => {
    const engineer = new Engineer ("Ryan Uhl", 1,"ryanmuhl@hotmail.com", "github");
  
    expect(engineer.getGithub()).toEqual("github");
  });