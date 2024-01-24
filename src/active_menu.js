
//구현계획
//1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
//2. intersectionobserver를 사용해서 모든 섹션들을 관찰해야 한다.
//3.보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
//보여지는 섹션:
//- 다수의 섹션이 동시에 보여진다면, 가장 첫번째 선택
//- 마지막 contact섹션이 보이잔다면, 마지막 선택


const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98] //0.98정도 페이지 비율이 들어왔을 때 호출
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));


//무엇을
function observerCallback(entries) {
  let selectLastOne; //flag변수 - true인지 아닌지 간직하고 있는 변수
  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.99;
    console.log('ratio', entry.intersectionRatio);
  })
  console.log('visibleSections:', visibleSections);
  console.log('selectLastOne', selectLastOne);

  //navindex에서 선택하기
  const navIndex = selectLastOne? sectionIds.length - 1 : findFirstIntersecting(visibleSections);
  console.log('navindex', sectionIds[navIndex]);

  selectNavItem(navIndex);  
}

// 첫번째로 true인 index를 반환
function findFirstIntersecting(visibleSections) {
  const index = visibleSections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if(!navItem) return; //배열보다 많이 인덱스를 입력했을 경우 힘수 종료되도록 설정
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}
