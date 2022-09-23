// using Employee constructor 
const Employee = require('../lib/employee');

// creates employee object 
describe("employee", () => {
    it ("Should return object containing name(string), ID(number), email(string)", ()=>{
        const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

        expect(employee.name).toBe(String);
        expect(employee.ID).toBe(Number);
        expect(employee.email).toBe(String);
    })
});