`use strict`;

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

// 카테고리s 전체에 클릭 이벤트를 주고, 이벤트 중에서 데이터타입을 가져오기.
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  // 버튼이 아닌 곳을 누르면 이벤트 발생하지 않도록 처리
  if (filter == null) {
    return;
  };

  projects.forEach((project) => {
    if(filter === 'all' || filter === project.dataset.filter) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  })
});