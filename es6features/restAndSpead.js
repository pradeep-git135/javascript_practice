// example for rest operator(...)
// function fxn1(a, b, ...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// fxn1(1, 2, 3, 4, 5, 6)



// example for spread operator(...)
function fxn2(a, b, c) {
    console.log(a,b,c);
}
var x = [9, 8, 7]
fxn2(...x)
