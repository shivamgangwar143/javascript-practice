// const year = ["januray","February", "March", "April"]
// console.log(year["2"] !== year["02"]);
// console.log(year["2"]);
// console.log(year["02"]);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(fruits[4]);// 'undefined'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
