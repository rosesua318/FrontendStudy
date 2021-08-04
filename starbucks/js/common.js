const searchEl = document.querySelector(".search"); // 클래스 이름이 search인 element 찾음
const searchInputEl = searchEl.querySelector("input"); // searchEl 안의 input 태그를 찾음

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused"); // focused 클래스 추가
  searchInputEl.setAttribute("placeholder", "통합검색"); // css 속성 placeholder을 통합검색으로 지정
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused"); // focused 클래스 제거
  searchInputEl.setAttribute("placeholder", ""); // css 속성 placeholder을 없애기
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 현재 년도
