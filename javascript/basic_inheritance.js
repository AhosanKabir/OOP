
//******************** ================ prototype based inheritance ================ ********************
// if we define our method with prototype , then this mehod is not call everytime when we create new object. but we can access everytime this method cause of prototype chain.

let CreateObject = function(name, age, phone) {
    this.name = name,
    this.age = age,
    this.phone = phone
}


CreateObject.prototype.dateOfBirth = function(){
    const date = new Date();
    console.log(` ${this.name} born in ${ date.getFullYear() - this.age}`);
}  


karim = new CreateObject("Karim", 24, "5454545454");
rahim = new CreateObject("rahim", 44, "1234547475");
// karim.dateOfBirth();
// rahim.dateOfBirth();


//******************** ================ constructor inheritance ================ ********************

let Person = function(name, phone, email, age){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.age = age;
}

let Teacher = function(name, phone, email, age, subject) {
    Person.call(this, name, phone, email, age);
    this.subject = subject;
}

const jamal_sir = new Teacher("jamal", "5545454", "asdyhg@gmail.com", 26, 'science')
const kodu_sir = new Teacher("kodu", "54545221", "nmn@gmail.com", 46, 'english')
console.log(jamal_sir);
console.log(kodu_sir);


