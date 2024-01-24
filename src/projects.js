`use strict`;

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects')

// 카테고리s 전체에 클릭 이벤트를 주고, 이벤트 중에서 데이터타입을 가져오기.
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  // 버튼이 아닌 곳을 누르면 이벤트 발생하지 않도록 처리
  if (filter == null) {
    return;
  };
  handleActiveSelection(event.target);
  filterProjects(filter);
});

//함수는 동사형으로 시작하는 것이 좋다
//선택한 카테고리 하이라이트 하기
function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects (filter) {
  //프로젝트 필터링
  projects.forEach((project) => {
    if(filter === 'all' || filter === project.dataset.filter) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }  
  })
  
  //프로젝트 필터링 될 때 애니메이션 효과 넣기
  projectsContainer.classList.add('anime-out')
  setTimeout(() => {
    projectsContainer.classList.remove('anime-out')
  }, 250);
}