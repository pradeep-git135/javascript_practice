let arr1 = [1,2,3,4,5]
let arr2 = ["a","b","c","d","e"]

// array destructuring
// let [x,y] = arr1
// console.log(x);
// console.log(y);

// // skipping elements in araay
//  let [a,,,b] = arr1
//  console.log(a);
//  console.log(b);

//  using rest parameter 
let [p,q,...rest] = arr1
console.log( rest);

//adding two arrays by using rest 
// let newarray = [...arr1,...arr2]
// console.log(newarray);
 

// [
//    [ 1,   2,   3,   4,   5,],
//     ['a', 'b', 'c', 'd', 'e']
//   ]