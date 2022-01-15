// 검색창 반응형 모션 만들기
const searchEl = document.querySelector('.search');
const searchInputEl =  searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //Losic..
  searchInputEl.focus(); //강제로 focus 기능을 넣어줌
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});





const thisYear = document.querySelector('.this-year');  //<--getFullYear
thisYear.textContent = new Date().getFullYear();  //2021