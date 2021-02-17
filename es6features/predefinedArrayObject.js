var arr1 = [4,2,1,3,2,1,3]
var arr2 = ["d", "c", "a", "b"]

// var person1 = new Object()
// person1.fname = "pradeep"
// person1.lname = "C R"
// console.log(person1);


//for of loop wont work for object
// for (const iterator of person1) {
//     console.log(iterator);          //Uncaught TypeError: person1 is not iterable
    
// }


// for (const property in person1) {
//     console.log(person1[property]);   
// }



// for each method won't work for object
// person1.forEach(element => {
//     console.log(element);     //Uncaught TypeError: person1.forEach is not a function
// });


// var person2 = new Object()
// person2.fullname = "PRADEEP C R"
// person2.__proto__=person1

// for (const key in person2) {
//      if (person2.hasOwnProperty.call(person2, key)) {
//          const element = person2[key];
//          console.log(element);   
//      }
//  }

//  for (const key in person2) {
//      console.log( person2[key]);
// }

//  console.log(person2);




//diference between for, for of, for in, for each

//for loop returns the index of array
// for(let i = 0; i<arr1.length; i++){
//     console.log(arr1[i])
// }

//for of loop returns element of the array
// for (const ele of arr2) {
//     console.log(ele);
// }

//for in loop returns the index of array
// for (const ele in arr2) {
//     console.log(ele);  
//     }

//for each  returns the element and index of an array
// arr2.forEach((i, element) => {
//     console.log(i, element);
// });



// array methods

//cancatinating 2 arrays array.concat()
// console.log(arr1.concat(arr2)); 

//arry.every(callback fxn) and arry.some(callback fxn) will return true or false 
// console.log(arr1.every((item)=>{
//     return item>0                    //true
// })); 
// console.log(arr2.every((item) => {
//     return item>-1                      //false

// }));



// console.log(arr1.some((item)=>{
//     return item>2
// })); 

//array.forEach(callback fxn) will return the desired action inside callback(can't use return inside the callback)

// arr1.forEach((item)=>{
//     console.log(item*3);
// })


//array.index(value,index) and array.lastIndex(value,index) will return the index of an array

// console.log( arr1.indexOf(2,2));

//array.map(callback fxn) will return the array (used to modify the array)
// console.log(arr1.map((item)=>{
//     return (item*2); 
// })); 


//array.filter(callback) returns original array and used to filter the array elements (can't modify original array)
// var ph = arr1.filter((element) => {
//     return element>2
// })
// console.log(ph);

// array.push(value) and array.unshift(value) will add value to array from back and front respectively
//     arr1.push(9)        //append value to array
//     console.log(arr1);

    // arr1.unshift(7)        //adds value at the front of array
    // console.log(arr1);

//array.pop() and array.shift() will remove array element from back and front respectively
    // arr1.pop()           remove element at the end from array
    // console.log(arr1);

    // arr1.shift()         removs element from the frnt of the array
    // console.log(arr1);

//array.reduce(callback(a, b)) will reduse an array to a single element
    //  console.log( arr1.reduce((a,b)=>{
    //     return a+b 
    // }));
    

//array.reduseRight(callback(a,b)) will reduse an array to a single element but it'll starts from right
//    console.log(arr1.reduceRight((a,b)=>{
//     return a-b
// })); 
// array.reverse() will return an array with reversed elements
    // arr1.reverse()
    // console.log(arr1);
    // arr1.reverse()
    // console.log(arr1);
//array.slice(startindex, endindex+1) will return the subarray with specified indexes
    //    console.log( arr1.slice(0,-1));

//array.sort() will retrun the array in sorted order it will work only for array of string 
    //console.log(arr2.sort()); 
// array .sort(callback(a,b){
//     return a-b
// }) it will work for numerical elements in array

        // console.log(arr1.sort((a,b)=>{
        //     return a-b
        // })); 

//array.toString() converts to string
        console.log( (arr1.toString()));

        // console.log( arr2.sort());
        // console.log( arr1.sort());


