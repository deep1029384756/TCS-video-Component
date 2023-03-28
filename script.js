//Video
//for story 1
var btn1 = document.querySelector(".btn1");
var story1 = document.querySelector(".stories1");
var model = document.querySelector(".modalsec")
var modalimg = document.querySelector(".modalimg")
var modalcontainer = document.querySelector(".modal-container")

// clickable
model.addEventListener("click",()=>{
  model.classList.remove('visible');
})
 btn1.addEventListener('click',()=>{
  model.classList.add('visible')
  btn1.classList.add('changecolor')
  var src =btn1.getAttribute("src");
  modalimg.setAttribute("src",src);
 })

 var cbtn = document.querySelector('.cbtn');
  cbtn.addEventListener('click',()=>{
    model.classList.remove('visible');
  })

  // for story 2
var btn2 = document.querySelector(".btn2");
var model = document.querySelector(".modalsec")
 btn2.addEventListener('click',()=>{
  model.classList.add('visible')
  btn2.classList.add('changecolor')
  var src =btn2.getAttribute("src");
  modalimg.setAttribute("src",src);
 })

 var cbtn = document.querySelector('.cbtn');
  cbtn.addEventListener('click',()=>{
    model.classList.remove('visible');
  })

  // for story 3
var btn3 = document.querySelector(".btn3");
var model = document.querySelector(".modalsec")
 btn3.addEventListener('click',()=>{
  model.classList.add('visible')
  btn3.classList.add('changecolor')
  var src =btn3.getAttribute("src");
  modalimg.setAttribute("src",src);
 })

 var cbtn = document.querySelector('.cbtn');
  cbtn.addEventListener('click',()=>{
    model.classList.remove('visible');
  })

  // for story 4
var btn4 = document.querySelector(".btn4");
var model = document.querySelector(".modalsec")
 btn4.addEventListener('click',()=>{
  model.classList.add('visible')
  btn4.classList.add('changecolor')
  var src =btn4.getAttribute("src");
  modalimg.setAttribute("src",src);
 })

 var cbtn = document.querySelector('.cbtn');
  cbtn.addEventListener('click',()=>{
    model.classList.remove('visible');
  })

  // for story 5
var btn5 = document.querySelector(".btn5");
var model = document.querySelector(".modalsec")
 btn5.addEventListener('click',()=>{
  model.classList.add('visible')
  btn5.classList.add('changecolor')
  var src =btn5.getAttribute("src");
  modalimg.setAttribute("src",src);
 })

 var cbtn = document.querySelector('.cbtn');
  cbtn.addEventListener('click',()=>{
    model.classList.remove('visible');
  })
  

  // modal css
    // const story = document.querySelector('.stories');
    // let storries= story.children();
    // console.log(stories);


  //video play
  var video= document.querySelector(".background")
  var btn = document.querySelector(".videobtn")
  function playvideo(){
    if(video.paused){
      video.play();
      btn.innerHTML = 'Pause';
    }else{
      video.pause();
      btn.innerHTML = "Play"
    }
  }
  //image click :done
  //swiper better : done
  //modal ui
  //navbar :done
 //swiper js  
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3.5,
      spaceBetween: 30,
      freeMode: true,
      loop:true,
      navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
      },
      // autoplay:{
      //   delay:1000
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
// when window width is >= 320px
      320: {
      slidesPerView: 1.5,
      spaceBetween: 20
       },
// when window width is >= 480px
     480: {
     slidesPerView: 2.2,
     spaceBetween: 30
     },
// when window width is >= 640px
     640: {
     slidesPerView: 2.5,
     spaceBetween: 40
    },
    840:{
      slidesPerView:3.5,
      spaceBetween:50
    }
    }
    });
  
