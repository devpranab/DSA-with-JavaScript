//recursion
//when function call itself
//otherwise it will get called for infinite time
//if a function call itself then there must be an end point

/*
//simply loop
//now use recursion
function countDown(n){
    //simply loop
    // for(let i=n; i>0; i--){
    //     console.log(i);
    // }

    //now use recursion
    console.log(n);
    n--;
    if(n>0){
        countDown(n);
    }

}
countDown(10);
*/

/*
let counter = 1;
function demo(number){ //function with defination
    if(counter > number){
        return;
    }
    console.log("call"+ counter +"time");
    counter++;
    demo(number); //recursion function (call itself)
}

demo(3);
*/

//Another example
// function sumNumber(n){
//     let sum = 0;
//     for(let i=n; i>0; i--){
//         sum += i
//     }
//     return sum;
// }
// console.log(sumNumber(10));

//Do it by recursive
function sumNumber(n){
    if(n < 0) return 0;

    return n + sumNumber(n-1);
    //10 + 9
    //19 + 8
    //27 + 7

}
console.log(sumNumber(10));