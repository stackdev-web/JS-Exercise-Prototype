/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const james = new Person('James', 31);
const sam = new Person('Sam', 37);
const latoya = new Person('Latoya', 32);

console.log(james.toString());
console.log(sam.toString());
console.log(latoya.toString());

james.eat('noodles');
james.eat('fun food');
james.eat('tacos')
james.eat('sandwich');
james.eat('sushi');
james.eat('cake');

console.log('James stomach', james.stomach);

console.log(james.poop);
console.log(james.stomach);




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon, tank, odometer) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  return this.tank = this.tank + gallons;
}

const carOne = new Car('Chevy', 20, 0, 0);
const carTwo = new Car('Pontiac', 30, 0,0);
const carThree = new Car('Ford', 35, 0,0);

console.log(carOne.fill(10));
console.log(carOne.tank);
console.log(carTwo.fill(15));
console.log(carTwo.tank);
console.log(carThree.tank);
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/



function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy = favoriteToy;

}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
  }

// create a child constructor functions 
     

const babyOne = new Baby('Anna', 1,'rattle');

const babyTwo = new Baby('Angus', 3, 'blanket');

const babyThree = new Baby('Fred', .5, 'play pen');

console.log(babyOne.favoriteToy);
console.log(babyTwo.name);
console.log(babyThree.age);


  
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Simple function call. simple function call: in non-strict mode this will default to the global object but in strict mode it will error as 'undefined'
  2. implicit binding: this points to the object to the left of the period when the function is called
  3. explicit binding: set this to point to a certain value using call, apply or bind
  4. new binding: Using the new keyword constructs a new object, and this points it
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}