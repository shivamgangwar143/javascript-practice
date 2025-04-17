const score = 100;
const bonus = new Number(50);
// console.log(score);
// console.log(bonus);
const extraBonus = new Number(bonus)
//const bonus = new Number(100);
//console.log(extraBonus);
const money = 100000;
//console.log(money.toLocaleString('en-IN'));

const points = new Number(Math.floor(Math.random()*10)+1);
const points1 = new Number(Math.ceil(Math.random()*10));
console.log(points);
console.log(points1);

// To specify a range of the random number
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);