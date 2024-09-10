const str = "Arya"
const str1 = " Bengaluru"
console.log(str + str1);
console.log(`Name is ${str} and place is ${str1}`);

const name = new String("Shamrao")    // run in console
console.log(name.charAt(2));
console.log(name.indexOf("a"))

let name1 = name.substring(2,6)
console.log(name1);

console.log(name.length);

let trimNm = "    krishna     ."
console.log(trimNm.trim());

let slicenm = new String('sliceTheValue')
console.log(slicenm);

let sl = slicenm.slice(-8,11)
let sli = slicenm.slice(8,11)
console.log(sl);
console.log(sli);

let splt = " my name-is-arvi"
console.log(splt.split("-"));
let emptySplit = splt.split("")
console.log(emptySplit);




