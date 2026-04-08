let scora = "Zain"

scora = 21  

scora = true

console.log(scora)


let x = 10
x.toUpperCase()  // ❌ ERROR (number pe string ka function) --> RunTime/Execution time pe Error ae ga.


// ----------------------------------------------------------------------------


// Primitives Data Types in JavaScript  --> Immutable

let namer = "Zain"
let message = "Hello World"

console.log(typeof namer);

let score = 101
console.log(typeof score);


let isLoggedIn = true
console.log(typeof isLoggedIn);


let bag =  null
console.log(typeof bag);  


let address = undefined
let car;
console.log(typeof address);
console.log(typeof car);



const id_1 = Symbol("534")

const id_2 = Symbol("534")

console.log(id_1 === id_2);



// Non Primitive(Reference) DataTypes  --> Mutable

let Fruits = ["Apple", "Banana", "Orange"]
let healthFood = Fruits
console.log(typeof Fruits);

healthFood.push("Kiwi")

console.log(healthFood);
console.log(Fruits);


// ----------

let Student1 = {
    name: "Zain",
    age: 21,
    isFeePaid: true,
}
console.log(typeof Student1);

let studentData = Student1
studentData.age = 20
console.log(studentData);
console.log(Student1);


// ----------

const Greet = function(name){
    console.log(`Hello ${name}`);
}

Greet("Zain")
console.log(typeof Greet);

