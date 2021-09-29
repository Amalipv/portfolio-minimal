//3 var -> function - not recommended
//2 let -> block - reassign a value
//1 const -> block - same value throughout the app

function syHello(){
  for(let i=0;i<4;i++){
    console.log(i);
  }
}

syHello();

const persons=[ 
  {name: "pot",age : 23},
  {name: "pan",age: 34},
{name: "kettle", age:36}]

console.log(persons.filter(function(person){return person.age>30;}));
console.log(persons.filter((person) => person.age>35))


