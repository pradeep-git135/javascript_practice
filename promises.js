// var promise = new Promise(function(resolve, reject){
//     const x = "hey this is a promise";
//     const y = "hey this is a promise"
//     if (x===y){
//         resolve()
//     }else{
//         reject()
//     }
// })
// promise.then(function(){
//     console.log("resolved")
// }).catch(function(){
//     console.log("rejected")
// });

async function call() {
    console.log("start");
    var success =  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("successMsg")
        },3000)
    })
    await success.then((msg)=>{
        console.log(msg);
    })
    console.log("end");
}
call()


// example for promise all and promise race

// var fxn1 = function (){
//     return new Promise((resolve, reject)=>{
//         resolve("completed 1")
//     }) 
// }
    
// var fxn2 = function (){
//     return new Promise((resolve, reject)=>{
//         resolve("completed 2")
//     }) 
// }

// var fxn3 = function (){
//     return new Promise((resolve, reject)=>{
//         resolve("completed 3")
//     }) 
// }

// fxn1().then((msg)=>{
//     console.log(msg);
//     return fxn2()
// }).then((msg)=>{
//     console.log(msg);
//     return fxn3()
// }).then((msg)=>{
//     console.log(msg)
//     console.log("all fxns eexecuted successfully")
// })

// Promise.race([fxn1(), fxn2(), fxn3()]).then(()=>{
//     console.log("completed all the 3");
// })