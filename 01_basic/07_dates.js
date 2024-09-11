let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let fmtDate = new Date(2024 , 0 , 14)       // jan = 0
console.log(fmtDate.toLocaleString());

let fmtDate1 = new Date("9-11-2024" )       
console.log(fmtDate1.toLocaleString());

let fmtDate2 = new Date("11-9-2024")       // jan = 1
console.log(fmtDate2.toLocaleString());

let fmtDate3 = new Date(2024 , 9 , 11, 5, 7)       
console.log(fmtDate3.toLocaleString());

let myTime = Date.now()
console.log(myTime);        // in ms
console.log(Math.floor(Date.now()/1000));       // in sec
console.log(Date.now()/1000);

console.log(fmtDate.getTime());

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay() + 1);      //starts vt monday-add 1
console.log(newdate.getMonth() + 1);        //starts vt 0 so add 1

console.log(newdate.getFullYear);

console.log(newdate.toLocaleString('default' , {
    weekday:"long",
}))