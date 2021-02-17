// var a = "msg"
// function fxn1(){
//     // console.log(this);
//     console.log(`the value is ${this.a}`);
// }
// fxn1()

var bike = {
    make:"hero M",
    model:"xpulse",
    fxn2:function(){
        console.log(this.make+":"+this.model);
    }
}
var bike2 = {
    make:"yamaha M",
    model:"mt_15",
    
}
bike2.__proto__= bike
console.log(bike2);




// function fxn3(){
//     console.log(`${this.make}:${this.model}`);
// }
// fxn3.apply(bike,[1, 2, 3, 4])
// fxn3.call(bike, "q", 1, 4, 5)
// var result = bike.fxn2.bind(bike2)
// result()
// bike.fxn2.call(bike2)


// function fxn4(a){
//     console.log(arguments);
//     console.log(a);
// }
// fxn4("helo", 1, 2, 3, 4)
