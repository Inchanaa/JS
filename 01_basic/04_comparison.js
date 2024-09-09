console.log(2 > 1);   //T
console.log("2" > 1);   //T
console.log("02" > 1);  //T

console.log(null > 0);  //F
console.log(null == 0); //F
console.log(null >= 0); //TRUE-->comparison converts null to a number treating it as 0
console.log(null <= 0);     //T

console.log(undefined == 0);    //F
console.log(undefined >= 0);    //F
console.log(undefined < 0);     //F
console.log(undefined === 0);   //F

// strict ====

console.log("2" === 2);     //F
console.log(null === 0);    //F
console.log("null" === 0);  //F
console.log(-0 === +0);   //T
console.log(-2 === +2);  //fals
console.log(NaN == NaN); // NaN is not equals to NaN













