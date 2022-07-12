let a = 10;
let b = 20;
let c = 15;
let d = 16;
let x = 22;
let y = 33;

// Параметры - локальные переменные внутри функции при ее объявлении
// Параметры используются только внутри тела функции
// Во внешнем коде нет доступа к параметрам
function calculateTotal(x, y) {
  //x u y - parametrs
  console.log(`Total of ${x} and ${y} = ${x + y}`);
  console.log("x: ", x);
  console.log("y: ", y);
  //   return x + y; undefined
}

// console.log("result: ", calculateTotal(1, 3) * 3); // result = 4 * 3 // calculateTotal(1, 3) = undefined

// calculateTotal(x, y); // x = 22, y = 33 - arguments

// calculateAnotherTotal(2, 9); Будет ошибка потому что используем функцию до ее инициализации(создания/объявления)

const calculateAnotherTotal = (a, b) => {
  console.log(`Another total of ${a} and ${b} = ${a + b}`);
  console.log("a: ", a);
  console.log("b: ", b);
};

// calculateAnotherTotal(1, 7);

function getTotal(a, b) {
  return a + b;
}

const getArrowTotal = (a, b) => a + b;

const getDouble = (a) => a * 2;

const tripleValue = (x) => x * 3;

function tripleValueFunction(x) {
  return x * 3;
}

console.log("triple: ", tripleValue(2));
console.log("triple function: ", tripleValueFunction(2));

// console.log("total: ", getArrowTotal(1, 6) * 2);
// console.log("total: ", getArrowTotal(2, 4) * 2);
// console.log("total: ", getArrowTotal(3, 16) * 2);
// console.log("total: ", getArrowTotal(11, 24) * 2);
// console.log("double: ", getDouble(11));

// 1) Посчитать сумму
// 2) Почитать разницу
