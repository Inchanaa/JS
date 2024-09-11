// Numbers
let math = 10.789876
console.log(math.toFixed(2));       //10.79

let num = new Number(100)
console.log(num);

console.log(num.toString().length);

let num1 = 100000000
console.log(num1.toLocaleString());
console.log(num1.toLocaleString('en-IN'));

let pre = 123.46728736637
console.log(pre.toPrecision(3));
console.log(pre.toPrecision(4));
console.log(pre.toPrecision(2));   //1.2e+2     



// Maths
console.log(Math)       //run in console
console.log(Math.round(10.6));      //11
console.log(Math.floor(20.9))       //20
console.log(Math.ceil(30.2))        //31
console.log(Math.abs(-4));          //4

console.log((Math.random() * 10) + 1);    // +1 to avoid '0'

let min = 10
let max = 90
let rod = (Math.floor(Math.random() * (max - min + 1)) )+ min
console.log(rod);

let diceLow = 1
let diceHigh = 6
console.log(Math.floor(Math.random() * (diceHigh - diceLow + 1)) + diceLow);

// dice
console.log(Math.floor(Math.random() * 6) + 1);     // min 1
