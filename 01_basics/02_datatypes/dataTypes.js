"use strict"; // Treat all JS code as newer version. not allowing to use old methods.

// ---------------- Data types in JavaScript ----------------------


// 1) Primitiive data types: 
// String, Number, Boolean, Null, Undefined, BigInt, Symbol

// 1. String
let name = "Zain"
let email = 'abc@gmail.com'
let message = `Hi! dev`


// 2. Number
let num = 2134
let age = 21
console.log(typeof num);

// 3. Boolean
let isVerified = false
let isLoggedIn = true
console.log(typeof isLoggedIn);

// 4. Null : empty yani janbojh kar empty value rakhi gae hai.
let weather = null
console.log(weather);


// 5. Undefined : yani variable toh hai lekin value defined karna bhol gae hai.
let cost;
console.log(typeof cost);
console.log(cost);

// 6. BigInt : it handles Big numbers value jo noraml Numbers handle nahe kar sakhte
let transection = 549302092480548402n
console.log(typeof transection);
console.log(transection);

// 7. Symbol: Unique identity - make data unique:
let id_1 = Symbol("4321")
let id_2 = Symbol("4321")
console.log(typeof id_1);
console.log(id_2);
id_1 === id_2 // false, because both are unique identity. 


// -------------------------------------------------


// 2) Non-primitive data types: Object, Array, Function

// 1. Object : key-value pair
let person = {
    name: "Zain",
    age: 21,
    isStudent: true
}
console.log(typeof person);


// 2. Array : ordered collection of items
let arr = [1, 2, 3, 4, 5]
console.log(typeof arr);


// 3. Function : reusable block of code that performs functionality
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
console.log(typeof greet);

