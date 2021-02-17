function add(a){
    return function sum(b){
        return a+b
    }
}
sum5 = add(5)
console.log(`the output of the fxn is ${sum5(5)}`)