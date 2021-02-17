function fnc1(arg){
    console.log("function1")
    arg()
}

function fnc2(){
    console.log("function2 this is call back function ")
}
 fnc1(fnc2)