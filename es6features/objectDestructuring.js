var c1 = {
    make:"bmw",
    model:"m5",
    color:"blue"
}

var c2 = {
    make:"benz",
    model:"a5",
    color:"black"
}
//object destucturing
let {model,color} = c1
console.log(model);
console.log(color);

//changing name in object
let {model:name, make:brand} = c2
console.log(name);
console.log(brand);