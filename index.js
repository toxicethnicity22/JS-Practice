// Operators
// Mod
// Modulus (remainder)

//Assignment Operators
/**
 *  =  x = y
 * +=  x = x + y (x += y)
 * -=  x = x - y
 * *=  x = x * y
 * /=  x = x / y
 * %=  x = x % y
 * **= x = x ** y
 */

/**
 * Comparison Operators
 *  ==
 *  === strictly equals
 *  != not equals
 *  !== strictly not equal
 *  >
 *  <
 *  <=
 *  >=
 *  ? ternary
 */

/**
 * Logical Operators
 * && AND
 * || OR
 * !  NOT
 */

/**
 * true && true  === true
 * true && false === false
 * false && true === false
 * false && false === false
 *
 * true || false === true
 * false || false === false
 * true || true === true
 * false || true == true
 *
 * !true = false
 * !false = true
 *
 *
 * !true && true == false
 *
 * false || !false == true
 */

/**
 * Data Types
 *
 *
 * Null -> let car = null
 * Undefined -> let car
 * Boolean
 * Number
 * BigInt
 * String -> let car = 'nissan'
 * Symbol
 */

//Objects
//Key value pair
//Key     :    value

let dog = {
  name: "sparky",
  age: 5,
  owner: null,
  greetingCall: function () {
    return "here sparky";
  },
};

let car = {
  make: "cadillac",
  model: "Escalade",
  type: "suv",
  age: 10,
  topSpeed: 150,
  customOptions: { color: "black", wheels: "30inch", interior: "leather" },
  prevOwners: null,
  keyStartNoise: function () {
    return "Vroom";
  },
};

// console.log(
//   `the make of this car is ${car.make}`,
//   `the model of this car is ${car.model}`,
//   `the top speed of this car is ${car.topSpeed} mph`
// );

//This

let gorrila = {
  name: "coco",
  age: 15,
  type: "Silverback",
  location: "Bronx Zoo",
  numChildren: 3,
  children: [
    {
      name: "baxter",
      age: 3,
      favoriteFoods: ["apple", "banana", "honeydew"],
    },
    {
      name: "Harambe",
      age: 1,
      favoriteFoods: ["apple", "berries", "sins"],
    },
    {
      name: "kong",
      age: 5,
      favoriteFoods: ["banana", "sap", "lizzard meat"],
    },
  ],
  birthday: "today",
  sayHi: function () {
    return `Hello, me ${this.name}`;
  },
  sayChild: function () {
    return `Hello, me best child ${this.children[0].name}, ${this.children[0].name} be ${this.children[0].age}  `;
  },
};
