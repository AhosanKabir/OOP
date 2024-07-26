// general 
const person = {};
person.name ='ahosan';
person.email= 'ahosan12@gmail.com';

console.log(person); // output: { name: 'ahosan', email: 'ahosan12@gmail.com' }

// object orientd 
//class name should be start with capital letter and function name should be started with small letter. best practice
class Person { }
const p1 = new Person();
p1.name = "person 1"
p1.email = 'email 1'

console.log(p1); //output: Person { name: 'person 1', email: 'email 1' }