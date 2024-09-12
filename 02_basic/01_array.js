// arrays

const myArr = [1 , 2 , 3 , 4, 5]
console.log(myArr[2]);
myArr.push(8)       //adds at last
console.log(myArr)  

myArr.pop()             //deletes at last
console.log(myArr);

myArr.unshift(0)        //adds at first
console.log(myArr)  

myArr.shift(0)        //dlts at first
console.log(myArr)  

console.log(myArr.indexOf(3));
console.log(myArr.fill(9, 3));      //[1,2,3,9,9]

console.log(myArr.includes());

let newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

console.log(myArr);


//slice and splice

console.log("original Array",myArr);

console.log("slice",myArr.slice(1,3));      //last value nt included
console.log(myArr);     //original array printed

console.log("splice", myArr.splice(1 , 3));     // include last value
console.log(myArr);     //except splice other elements will print


