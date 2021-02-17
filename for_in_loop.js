var person1 = {
    fname  : "pradeep",
    lname : "C R",
    fullName : function (){
        return this.fname +" "+ this.lname
    }
}

var person2 = {
    address : "India"
}
 person2.__proto__ = person1

 console.log(person2.fullName())

 var person3 = Object.create(person1)
console.log(person3)

for(var prop in person2){
    if (prop == person2.hasOwnProperty){
        console.log(`${prop} : ${person2[prop]}`)
    }
    
}