// window : 글로벌 객체, 브라우저를 의미함
// window.document.querySelector();

// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
// [how to] clinetY 좌표 값 > header height -> header 색상을 black으로 바꾼다.black으로

// ? header height는 어떻게 알 수 있지?
const header = document.querySelector('.header');
const headerHeight =  header.getBoundingClientRect().height;

// ? 페이지가 스크롤링 될 때, clientY의 좌표값을 읽는다. 어떻게?
// window창 자체에서 scroll event가 일어나므로..
// console.log(window.scrollY);

//!구현
document.addEventListener('scroll', () => {
  if (headerHeight < window.scrollY) {
    // classlist에 새로운 class를 추가해주기
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
})


// scrolling 될 때 점점 home section 이 투명해지도록 만들기
// opacity가 1에서 0으로 수렴하도록 공식 만들기
const home = document.querySelector('.home__container');
//homeHeight = home.getBoundingClientRect().height;
homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - (scrollY / homeHeight);
});


// home 절반정도 가려지면 arrow btn이 나타나도록 설정
const arrowBtn = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2 ) {
    arrowBtn.style.opacity = 1;
  } else {
    arrowBtn.style.opacity = 0;
  }
})


// 모바일 페이지에서 navbar toggle btn 클릭처리
const navMenu = document.querySelector('.header__menu');
const navToggle = document.querySelector('.header__toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
})

//navbar menu 클릭 시 자동으로 닫기
navMenu.addEventListener('click', () => {
  // navMenu 아무데나 눌러도 닫히는 것을 방지하기 위하여
  const menuItem = event.target.className == 'header__menu__item';
  if (menuItem) {
    navMenu.classList.toggle('open');
  }
})