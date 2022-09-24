// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Ryan', 1, 'ryan1@gmail', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Ryan', 1, 'ryan1@gmail', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 