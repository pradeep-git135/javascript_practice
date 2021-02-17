var person1 = {
    fname  : "pradeep",
    lname : "C R",
    fullName : function (){
        return this.fname +" "+ this.lname
    }
}

var person2 = {
    fname  : "xyz",
    lname : "C R"
}

function greet(){
    console.log(`hello ${this.fname} ${this.lname} wellcome`)
}

var name = person1.fullName.call(person2)
// console.log(name)

console.log("====================================")

fxn = person1.fullName.bind(person2)
console.log(fxn())

// greet.call(person1)