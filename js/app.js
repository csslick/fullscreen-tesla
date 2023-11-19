/*
  1. depth1 li에는 mouseenter만 감지
  2. depth2에서 mouseleave 감지
*/

const depth1_li = document.querySelectorAll('.gnb > .depth1 > li');

// depth1 메뉴 mouseover시
depth1_li.forEach((li, i) => {
  li.addEventListener('mouseenter', function () {
    // header 배경 스타일 dark로 변경
    if(this.querySelector('.depth2')) {  // 하위 메뉴(depth2) 가 있는지 확인
      document.querySelector('header').classList.add('dark');
    }

    // 기존 2depth 비표시(초기화)
    document.querySelectorAll('.gnb .depth2').forEach(el => {
      el.classList.remove('show');
    })

    // 해당 2depth 표시
    if(this.querySelector('ul.depth2')) { // 하위 메뉴(depth2) 가 있는지 확인
      this.querySelector('ul.depth2').classList.add('show');

      // depth2 영역을 벗어나면 닫힘
      this.querySelector('ul.depth2').addEventListener('mouseleave', function(){
        console.log(this, 'mouseleave');
        this.classList.remove('show');
  
        // header 배경 스타일 원래대로
        document.querySelector('header').classList.remove('dark');
      })
    }
  })
})

// depth2 mouse out시 비표시
// const depth2 = document.querySelectorAll

