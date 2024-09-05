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

// ****************operations********************

let c = 6
let negValue = -c
console.log(negValue);

let str1 = "hii"
let str2 = " Gm"
let str3 = str1 + str2;
console.log("hi "+str3);

// +,-,/,*,%
console.log("1" + 2);   //12
console.log(1 + "2");   //12
console.log("1" + 2 + 2)   //122 -->first it checks string and it treats other numbers also string
console.log(1 + 2 + "1");  //31 -->adds number then adds string
// using () is a good practise

console.log("1" + (2+2));

console.log(true);
console.log(+true);
// console.log(true+); //error

let count = 20
count++
console.log(count);








