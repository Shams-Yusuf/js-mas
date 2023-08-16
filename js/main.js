/////1
let array = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
array.forEach(function (item) {
  if (item % 2 !== 0) {
    console.log(item);
  }
});
/////

/////2
let ar = [
  "lorem ipsum",
  "javascript",
  "php",
  "css",
  "react",
  "git",
  "html",
  "mysgl",
];
ar.forEach(function (item) {
  if (item.length <= 4) {
    console.log(item);
  }
});
/////

/////3
let num = [1, -3, 5, 6, -7, 8, 9, -11];
let num2 = num.filter(function (item, index) {
  return item < 0;
});
console.log(num2);
/////

/////4
let numb = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
let numb2 = numb.filter(function (item) {
  return item % 2 == 0;
});
console.log(numb2);
/////

/////5
let str = [
  "lorem ipsum",
  "javascript",
  "php",
  "css",
  "react",
  "git",
  "html",
  "mysql",
];
let string = str.filter(function (item) {
  return item.length > 3;
});
console.log(string);
/////

/////6
let ab = [5, 6, 7, 8, 9];
let abc = ab.map(function (a) {
  return a ** 2;
});
console.log(abc);
/////

/////7
let price = [
  { a: 10, b: 5 },
  { a: 20, b: 22 },
  { a: 131, b: 55 },
];
let prices = price.map(function (item) {
  return item.a + item.b;
});
console.log(prices);
/////

/////8
let aaa = [-13, 0, 12, 1662, -0.32, -102, -2];
let bbb = aaa.filter(function (item) {
  return item < 0;
});
let ccc = bbb.reduce(function (sum, item) {
  return sum + item;
}, 0);
console.log(ccc);
/////

/////9
let object = [
  { x: 10, y: "lorem" },
  { x: 21, y: "lorem" },
  { x: -17, y: "lorem" },
  { x: 156, y: "lorem" },
];
let name = object.reduce(function (sum, obj) {
  return sum + obj.x;
}, 0);
console.log(name);
////////
