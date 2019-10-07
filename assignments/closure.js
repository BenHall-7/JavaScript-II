// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function getRandomGenerator(seed = 0) {
  let s = seed;
  return () => {
    s = (s * 61 + 1401) & 0xfff;
    return s;
  }
}

let rng = getRandomGenerator();
console.log(rng());
console.log(rng());
console.log(rng());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 0;
  return () => ++count;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
let c = counterMaker();
console.log(c());
console.log(c());
// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  }
};

let f = counterFactory();
console.log(f.increment());
console.log(f.decrement());