function addto(passed){
    return function add(inner){
        return passed + inner
    }
}
addthree = addto(3)
//addfour = new addto(4)

console.log(addthree(2))