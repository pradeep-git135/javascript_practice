console.log(this)

console.log("===============================================")

function sample(){
    console.log(this)
}
sample()
console.log("===============================================")
var person = {
    fname:"pradeep",
    lname:"C R",
    fullName:function (){
        console.log(this)
    }
}
// person.fullName()