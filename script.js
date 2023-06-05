let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


searchBtn.addEventListener('click', () => {
     // 찾기 버튼은 x 로 변경
    searchBtn.classList.toggle('fa-times');
    // 찾기 바 활성화 
    searchBar.classList.toggle('active');   
})

// 로그인 버튼이 눌려질때, 
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

loginBtn.addEventListener('click', ()=> {       
    loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=> {       
    loginForm.classList.remove('active');
});

// 햄버거 버튼 클릭시에 나타나도록 코드 구성
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// 비디오 버튼 클릭시에 나타나도록 코드 구성
let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
        // 기존 선택 제거
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay:1500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });