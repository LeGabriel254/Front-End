// arrays this are variable structure that carries more than one value

let fruits = ["Mangoe", "Avocado", "Banana","Melon"]

fruits.sort().reverse();

for(let fruit of fruits){

console.log(fruit);

}

// oject are key values pairs in curlbraces
let user = {
  name:"Gabriel",
  age:23,
  Country:"Kenya"
}

console.log(user.age);

//Inheritance 
let vehicle = {
  type:"BMW",
  wheels:4,
  engine: function(){
    return"Vrooom"
  }
} 
// console.log(vehicle.engine)
const truck =  Object.create(vehicle)
truck.door = 2
console.log(truck.door)
console.log(truck.engine())
