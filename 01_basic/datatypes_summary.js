// js is Dynamic language:

// This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it


// --> dynamic typing :In JavaScript, you do not need to declare the type of a variable when you define it. Types are determined at runtime. For example, you can change the type of a variable from a number to a string without any errors.
let x = 10
x = "hello"

/* dynamic object :
 You can add, modify, or delete properties from objects at runtime.*/

let a = {"age": 10}
a.name ="Abc"
delete a.age;

/*Dynamic Execution: JavaScript code can be generated and executed at runtime, such as when using the eval() function (though using eval() is generally discouraged due to security and performance concerns). */


/* on the basis of how data is stored and accesed - datatpes are divided into 2 types 
1. primitive  2. non-primitive */

// primitive(call by value):7 types
// String , Number , Boolean , null , undefined , symbol , BigInt 

const str = "hello"     //String

const score = 301       //Number

const isLoggedIn = false     //Boolean

const tempreature = null        //null - object

let date;        //undefined

let bigNumber = 87365372536358276355366252525526565n
console.log(typeof bigNumber);      // BigInt - add 'n'

const marks = Symbol(100)
const marks1 = Symbol(100)

console.log(marks == marks1);

const maths = Symbol('pass')
const scinece = Symbol('pass')

console.log(maths === scinece);

// reference (non - primitive):
// Array - object(datatype) ,
 //function - function,
  //Objects - object

  let subject = ['maths','science','social']

  function student(){
    console.log("hello");
    
  }
// function storing in variabe
let myFun = function(){
    console.log("hii");
    
}

person = {
    name : "abc",
    age : 30
}

person.salary = 50000

console.log(person);

delete person.age;
console.log(person);

//*************************************************** */

// two types of memory 
//1. stack - all primitive types use stack memory alocation, call by value, when data changes only value will change not reference , original data won't channge

let num = 10
let num1 = num
console.log(num1);      //10
 num1 = 20
 console.log(num1);     // 20
 console.log(num);      // 10 original value doesn't change

 //2. heap - all non primitive, call by reference, vn data changes reference will change, original data also change 

 let obj = {
    name1: "arya",
    age1 : "20"
 }

 let obj1 = obj
 console.log(obj1);     // 20

 obj1.age1 = "25"

 console.log(obj1);     // 25
 console.log(obj)       //25 original value changes
 
 