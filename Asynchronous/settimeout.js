function CallwithDelay() {
let TimeClear = setTimeout( () => {
        console.log("time")
    }, 3000);

for( let i = 0 ; i< 1000 ; i++){
    if ( i === 9999 ){
        clearTimeout(TimeClear);
    }
}
}
CallwithDelay();