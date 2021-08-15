/*
import getType from "./getType";

console.log(typeof "hello world");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
*/

/*

// 산술 연산자(arithmetic operator)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

// 할당 연산자(assignment operator)

let a = 2;
//a = a + 1;
a += 1;
a *= 1;
console.log(a);

*/

/* 
// 비교 연산자(comparision operator)

const a = 1;
const b = 3;

console.log(a === b);

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, "2"));

console.log(a !== b);
console.log(a < b);

*/

/* 
// 논리 연산자(logical operator)

const a = 1 === 1;
const b = "AB" === "AB";
const c = false;

console.log(a);
console.log(b);
console.log(c);

console.log("&&: ", a && b && c);
console.log("||: ", a || b || c);
console.log("!: ", !a);
*/

/*
// 삼항 연산자(ternary operator)

const a = 1 < 2;

if (a) {
  console.log("참");
} else {
  console.log("거짓");
}

console.log(a ? "참" : "거짓");
*/

import { timeout } from "q";
import random from "./getRandom";

/*

// 조건문 (If statement)

const a = random();

if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else {
  console.log("rest...");
}
*/

/*
// 조건문 (Switch statement)

const a = random();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    console.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;
  default:
    console.log("rest...");
}
*/

/*
// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector("ul");
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}
*/

/*
// 변수 유효범위(Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const a = 123;
    console.log(a);
  }
}
scope();
*/

/*
// 형 변환(Type conversion)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('false') {
    console.log(123)
}
*/

/*
// 함수 복습

function sum() {
  console.log(arguments);
  return arguments[0] + arguments[1];
}

sum(7, 3);
*/

/*
// 화살표 함수
// () => {} vs function() {}

const double = function (x) {
  return x * 2;
};
console.log("double: ", double(7));

const doubleArrow = (x) => {
  return x * 2;
};
console.log("doubleArrow", doubleArrow(7));
*/

/*
// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7;
function double() {
  console.log(a * 2);
}
double();

(function () {
  console.log(a * 2);
})();
*/

/*
// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올리는 현상

const a = 7;

double();

function double() {
  console.log(a * 2);
}
*/

/*
// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(function () {
  console.log("Kim");
}, 3000);

const h1el = document.querySelector("h1");
h1el.addEventListener("click", () => {
  clearTimeout(timer);
});
*/

/*
// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수 시간)
function timeout(callback) {
  setTimeout(() => {
    console.log("Kim");
    callback();
  }, 3000);
}
timeout(() => {
  console.log("Done!");
});
*/

/*
const person = {
  firstName: "gildong",
  lastName: "Hong",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.getFullName());

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const p = new User("gildong", "Hong"); // 생성자 함수
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");
console.log(p.getFullName());
console.log(amy);
console.log(neo);
*/

// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

/*
// ES6 Classes

const gildong = {
  name: "Gildong",
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

gildong.normal();
gildong.arrow();

//function User(first, last) {
//  this.firstName = first;
//  this.lastName = last;
//}
//User.prototype.getFullName = function () {
//  return `${this.firstName} ${this.lastName}`;
//};

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p = new User("gildong", "Hong"); // 생성자 함수
const amy = new User("Amy", "Clarke");
const neo = new User("Neo", "Smith");
console.log(p.getFullName());
console.log(amy);
console.log(neo);

*/

// JS 데이터

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

/*
const result = "Hello world!".indexOf("world"); // String.prototype.indexOf()
console.log(result);

//const str = "0123";

console.log("0123".length);

const str = "Hello world!";
console.log(str.indexOf("hey") !== -1);
console.log(str.slice(0, 3));
console.log(str.replace("world", "hey"));

const str2 = "thesecon@gmail.com";
console.log(str2.match(/.+(?=@)/)[0]);

const str3 = "  Hello world   ";
console.log(str3.trim());
*/
