/*
let myName = "ROESUA";
let email = "test@gmail.com";
let hello = `Hello ${false}?!`;

console.log(myName);
console.log(email);
console.log(hello);
*/

// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector(".box");

boxEl.addEventListener("click", () => {
  console.log("Click~!");
});

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add("active");
let isContains = boxEl.classList.contains("active");
console.log(isContains); // true

boxEl.classList.remove("active");
isContains = boxEl.classList.contains("active");
console.log(isContains); // false

// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll(".box");
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach((boxEl, index) => {
  // 첫번째 매개변수: 반복 중인 요소, 두번째 매개변수: 반복 중인 번호
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

const boxEl = document.querySelector(".box");

// Getter, 값을 얻는 용도
console.log(boxEl, textContent);
// Setter, 값을 지정하는 용도
boxEl.textContent = "ROSESUA?!";
console.log(boxEl.textContent);
