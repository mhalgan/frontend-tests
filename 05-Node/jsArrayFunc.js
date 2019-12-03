data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  }
];

let dogs = data.filter(item => {
  return item.type == "dog";
});

dogs.map(item => {
  return (item.age *= 7);
});

var totalAge = dogs.reduce((sum, item) => {
  return sum + item.age;
}, 0);

console.log(dogs);
console.log("Total age:" + totalAge);
