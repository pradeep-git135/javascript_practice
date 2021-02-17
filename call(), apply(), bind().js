function greet(greeting) {
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
  //console.log(${greeting}, "i am" '${this.name}' "and i am" ${this.age} "old"  )
}

const pradeep = {
    name: 'pradeep',
    age: 24,
  };

  const xyz = {
    name: 'xyz',
    age: 20,
  };
  

greet.call(pradeep,"hi")  //call()method first sets the value to this keyword and immidiatly invokes the function
greet.call(xyz,"hello")
/*const greetpradeep = greet.bind(pradeep,"hola")
greetpradeep()*/ //  "this is the correct way to call the bind() method"

greet.bind(pradeep,"hola") // this  is not the ryt way to call the bind of method bcz 
                            //it first creates the copy of function and then sets the value to this keyword