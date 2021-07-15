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

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  /* scroll 마다 몇십개씩 이벤트가 발생하는 것 방지하기 위한 라이브러리 사용 */
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      //gsap.to(요소, 지속시간, 옵션); : gsap 라이브러리를 이용하여 애니메이션 적용
      gsap.to(badgeEl, 0.6, {
        opacity: 0, // 0.6초 동안 사라지기
        display: "none",
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1, // 0.6초 동안 나타나기
        display: "block",
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  //gsap.to(요소, 지속시간, 옵션); : gsap 라이브러리를 이용하여 애니메이션 적용
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3, // 요소의 순서대로 0.7초마다 이미지가 나타나게
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션) - 공지사항 스와이퍼 기능 구현
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 방향: 수직방향
  autoplay: true, // 자동재생 여부
  loop: true, // 반복재생 여부
});
