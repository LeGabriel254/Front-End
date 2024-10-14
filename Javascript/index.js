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



//Walk the dog
//clean the kitchen
// take ut the ctrash

function walkDog(callback){
  setTimeout(() => {
    console.log("You walk the dog")
    callback()
  },1500)
};

function cleanKitchen(callback){
  setTimeout(() => {
    console.log("You cleaned the kitchen")
    callback()
  },2500)
};

function collectTrash(callback){
  setTimeout(() => {
    console.log("You collected the trash")
    callback()
  },1500)
};

walkDog(() => {
   cleanKitchen(() => {
      collectTrash(() =>{
         console.log("Completd chores")
      })
   })
})