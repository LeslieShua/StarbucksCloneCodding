const searchEl = document.querySelector('.search');
const searchInputEl =  searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //Losic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 화면 맨오른쪽 뱃지부분 

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){  //윈도우 객채에서 쓸 수 있는 scroll 기능
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기 badgeEL.style.display = "none";
    // gsap.to(요소, 지속시간, 옵션);  ****
    gsap.to(badgeEl, .6, {
      opacity: 0, //점점 서서히 사라짐 0.6초 (투명도)
      display: 'none'
    });

    // 버튼 보이기!   위로 올라가는 버튼 사라지게하고 나타나게하기 ---------

    gsap.to(toTopEl, .2, {  //오른쪽으로 가게 하기
      x:0,
    });

  } else {       //<--- .badges class를 할당받은 badgeEl을 입력해줘야 이여야 css 위치값 오류가 생기지않는다.
    //배지 보이기 badgeEL.style.display = "block";           
    gsap.to(badgeEl, .6, {       
      opacity: 1, //점점 서서히 나타남 0.6초 (투명도 기본값)
      display:'block'
    })
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x:100
    })
  }
}, 300));  // 0.3초씩 부하를 줘서 함수가 빨리 실행되서 과부하되는걸 방지하는 기능
// _.throttle(함수 }, 시간));

 //누르면 위로 올라가는 기능 ---------
toTopEl.addEventListener('click' , function () {          //<-- Handler
  gsap.to(window, .7, {             //<-- widow 객체를 사용 하면서 화면 자체를 애니메이션 처리 특정위치로 옮겨줌
    scrollTo:0                
  })
})



const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {   //반복 함수 실행시 idex를 사용해줌
  gsap.to(fadeEl, 1, {        // gsap.to(요소, 지속시간, 옵션);
    delay: (index + 1) * .7,             // delay 지연시키는 용도, 여러개 지정해줄때 용이
    opacity: 1,       //index는 기본적으로 0부터시작
  })
});     // 첫번째 1 * .7 두번째 2 * .7  세번째 3 * .7    
        // .7s   ,   1.4s   ,    2.1s  




// new Swiper(선택자, 옵션)

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드   //수평은 horizontal 기본값
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  slidesPerView:3,   // 한번에 보여줄 슬라이더 개수
  spaceBetween: 10,  // 슬라이드 사이의 여백
  centeredSlides: true,  // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000   //m/s 단위 5000 = 5초 
  },
  pagination: {   //옵션 추가  ... 통째로 다 속성
    el: '.promotion .swiper-pagination', // .swiper-pagination는 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능하게 하는 것
  },
  navigation: {   //옵션 추가 양옆으로 움직일 수 있는 버튼
    prevEl:'.promotion .swiper-prev', //swiper js 에서 이 class 요소를 가지고
    nextEl:'.promotion .swiper-next' //찾은다음 기능을 실행시킬 수 있게함
  }
});
// new Swiper(선택자, 옵션)

new Swiper('.awards .swiper-container', {
  // direction:'horizontal' 수평슬라이더 기본값
  autoplay: {
    delay: 3000   //m/s 단위 3000 = 3초 
  },
  loop: true,
  spaceBetween: 30, //사이사이 여백 30px 
  slidesPerView: 5,  //한번에 보여줄 개수
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});







const promotionEl = document.querySelector('.notice .promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');               
let isHidePromotion = false;   //프로모션 영역이 숨겨져 있나 = > 숨김요소를 false >표시해라
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion  // ! 를 넣어주는이유는  isHidePromotion의 반대값을 원할때 false --> true
  if (isHidePromotion) {  //isHidePromotion 요소 속성 정하기
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});
 
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {      //새 오토바이 그림 
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,       //둥둥 떠다니는 애니메이션 Y축으로 얼마만큼 이동할건지 
      repeat: -1, // gsap 에서 지원하는 무한반복  -1 
      yoyo: true,  // 한번 재생된 애니메이션을 역재생 
      ease: Power1.easeInOut,
      delay: random(0, delay)
   }
  );
}
floatingObject('.floating1', 1, 15); 
floatingObject('.floating2', .5, 15); 
floatingObject('.floating3', 1.5, 20); 


// 스파이 스크롤 올리다가 적정 부분에서 나타나서 누르면 기능 발동
// ScrollMagic 의 기능 cdn 넣어주고 
// 그냥 감시해주는 javaScript 프로그램 
const spyEls = document.querySelectorAll('section.scroll-spy')  // scroll-spy라는  class를  (일치선택자) 섹션마다 추가해줌
spyEls.forEach(function(spyEl) { 
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8   //화면의 0~1 중에서 어떤부분에서 트리거가 발동되는지
    })                 //화면에 보여진다 판단되면 setClassToggle 발동
    .setClassToggle(spyEl, 'show') //(토글 할 요소, 토글 할 class 이름 show를 넣었다 뺏다.)
    .addTo(new ScrollMagic.Controller());          /* 체이닝 형태 */
});  /*forEach 메소드를 써서 각각 요소들을 반복한다.*/  

/*new ScrollMasic 를 제어하기 위한 컨트롤러 --> addTo();*/
/*setClass...>class 속성을 지정할건데 toggle 기능이 추가됨 넣었다 뺏다*/
/*Scene = ScrollMasic 라이브러리를 통해서 특정요소를 감시하는 옵션을 지정해준주는 메소드 */ 
/* {} <-- 객체 데이터*/



const thisYear = document.querySelector('.this-year');  //<--getFullYear
thisYear.textContent = new Date().getFullYear();  //2021