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
const toTopEl = document.querySelector("#to-top");

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

      // 버튼 보이기!
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1, // 0.6초 동안 나타나기
        display: "block",
      });

      // 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0, // 화면을 최상단으로 위치시킴
  });
});

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

new Swiper(".promotion .swiper-container", {
  direction: "horizontal",
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생 여부
  autoplay: {
    delay: 5000, // 5초에 한번씩 슬라이드됨
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", // 이전버튼 요소 선택자
    nextEl: ".promotion .swiper-next", // 다음버튼 요소 선택자
  },
});

new Swiper(".awards .swiper-container", {
  direction: "horizontal", // 수평 슬라이드
  autoplay: true, // 반복재생 여부
  loop: true,
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: {
    prevEl: ".awards .swiper-prev", // 이전버튼 요소 선택자
    nextEl: ".awards .swiper-next", // 다음버튼 요소 선택자
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
const random = (min, max) => {
  // .toFixed() 를 통해 반환된 문자 데이터를,
  // parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const floatingObject = (selector, delay, size) => {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로재생
    ease: Power1.easeInOut,
    delay: random(0, delay), // 지연 시간
  });
};

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

/* 특정한 섹션이 화면에 나타나면 애니메이션을 실행시키기 위해 */
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여질 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 스크롤 하다가 부포트의 0.8 지점에 걸리게 되면 감시되었다고 판단되게
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 현재 년도
