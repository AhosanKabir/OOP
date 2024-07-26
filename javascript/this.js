//*************** ============ BASIC of (THIS) ============ ********************
const myObject = {
    'name': "ahosan",
    'email':"abcd@gmail.com",
    'phone': '1234',
    result : function(){
        console.log(this);
    }
}
//? myObject.result();


const firstObject = {
    name: "riad",
    email:"1dfd234@gmail.com",
    phone: '54564564',

    childObject: {
        name : 'inside fiestObject',
        result : function(){
            console.log(this);
        }
    }
}
//? firstObject.childObject.result();
//? firstObject.childObject.result.call(firstObject);


//***************************** ============ call method ============ **********************************
const printMyName = {
    name: "Kazi Ahosan kabir Riad",
    email:"jsdf@gmail.com",
    phone: '54564564',

    anotherObject: {
        name: "ahosan",
        printName : function (){
            console.log(`My name is ${this.name}`);
        }
    }
}
//? printMyName.anotherObject.printName.call(printMyName);


const writeDetails = {
    name : "A",
    age: "12",

    printDetails : function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
}

const rahim = {
    name : "Rahim",
    age: "24"
}

// writeDetails.printDetails.call(rahim);


//***************************** ============ apply method ============ **********************************
// call and apply almost same . but the difference is apply method expects 2 arguments and it expects arguments as a array

const writeDetails1 = {
    name : "A",
    age: "12",

    printDetails : function(helloMsg){
        console.log(` ${helloMsg}! my name is ${this.name} and i am ${this.age} years old`);
    }
}

const rahim1 = {
    name : "Rahim (using apply method)",
    age: "34"
}

//? writeDetails1.printDetails.apply(rahim1, ["hello Chutia Public"]);




//***************************** ============ Bind method (most Important) ============ **********************************
// bind method are working same as call, apply method. but bind method don't call the function directly, Bind method assume the function and create a defination of this function. as if we can call anytime when we need .
// Bind is Most usefull method among three methods.

const firstObjects = {
    name: "riad",
    email:"1dfd234@gmail.com",
    phone: '54564564',

    childObject: {
        name : 'inside fiestObject',
        result : function(){
            console.log(this);
        }
    }
}

// const createDefination = firstObject.childObject.result.bind(firstObject);
// createDefination();


const writeDetailsUsingBinds = {
    name : "A",
    age: "12",

    printDetails : function(helloMsg = "hello"){
        console.log(` ${helloMsg}!  ${this.name} is ${this.age} years old`);
    }
}

const karim = {
    name : "Karim (using apply method)",
    age: "34"
}

writeDetailsUsingBinds.printDetails();

const createBindDefination = writeDetailsUsingBinds.printDetails.bind(karim);

createBindDefination("hey buddy", "ahosan", "24");
createBindDefination("hello aduu","kabir", "26");