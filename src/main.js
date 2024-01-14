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
homeHeight = home.getBoundingClientRect().height;
homeHeight2 = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - (scrollY / homeHeight);
})