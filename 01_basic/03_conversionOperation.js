let score = true

console.log(typeof score) 

let valuInNumber = Number(score)
console.log(typeof valuInNumber) 
console.log(valuInNumber)

let score1 = "35abc"

console.log(typeof score1) 

let valuInNumber1 = Number(score1)
console.log(typeof valuInNumber1) 
console.log(valuInNumber1)  //prints NaN - Not a Number 
//33--> number
//null--> 0
//undefined-->NaN
//"33abc" --> NaN
//true-->1

let a =null
console.log(typeof a)

let Num = Boolean(a)
console.log(typeof Num);
console.log(Num);

// null => false
// " some string" => true
// 1-true; 0 - false
//"" -  false

let b = 33
console.log(typeof b)
let str = String(b)
console.log(typeof str)
console.log(str)