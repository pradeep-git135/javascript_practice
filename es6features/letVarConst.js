// function f1(){
//     var i=0
//     for(;i<=5; i++){        //you can access var
//         console.log(i)      // outside of the block
//     }
//     console.log(i); //6
// }
// f1()

// function f1(){
//     // let i = 2
//     for(let i=0;i<=5; i++){   //you can't access let 
//         console.log(i)        //outside of the block
//     }
//     console.log(i);  // Uncaught ReferenceError: i is not defined
// }
// f1()

let a = 10;
console.log(a); //10
let a = 20;
console.log(a); //SyntaxError: Identifier 'a' has already been declared

// const a = 10;
// console.log(a);
// a = 20
// console.log(a); // uncaught TypeError: Assignment to constant variable

// function f1(){
//     // let i = 2
//     for(let i=0;i<=5; i++){   //you can't access let 
//         console.log(i)        //outside of the block
//     }
//     console.log(i); //
// }
// f1()
