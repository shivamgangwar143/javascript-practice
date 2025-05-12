// const year = ["januray","February", "March", "April"]
// console.log(year["2"] !== year["02"]);
// console.log(year["2"]);
// console.log(year["02"]);

const fruits = [];
fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3
fruits[5] = "mango";
// console.log(fruits[0]); // 'mango'
// console.log(fruits[4]);// 'undefined'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6
// indexof() return -1 when element not present
fruits.push("Orange")
fruits.unshift("Guava") //add in starting of array & shift is used to pop from begining
// console.log(fruits);
//join() returns 2 arrays in string format adter combining

// console.log(fruits.join());
// console.log(fruits.join(""));
// console.log(fruits.join("-"));

const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";"));