$(function() {
  $(window).scroll(sticktothetop);
  sticktothetop();
});

let rotateTarget1;
let rotateTarget2;

watchSubmit();
document.querySelector('body').addEventListener('mousemove', rotateEffects);


function rotateEffects() {
  // let toRotate = document.querySelectorAll('.move-me');
  if(rotateTarget1 != undefined) {
    let height = $(window).innerHeight();
    let width = $(window).innerWidth();
    // rotateTarget.forEach(toRotate => {
      let x = ((width / 2) - event.clientX) * 0.03;
      let y = ((height / 2) - event.clientY) * 0.03;
      rotateTarget1.style.transform = "perspective(3000px) rotateX(" + y + "deg) rotateY(" + -x + "deg) translate3d( 0, 0, 0 )";
      rotateTarget2.style.transform = "perspective(3000px) rotateX(" + y + "deg) rotateY(" + -x + "deg) translate3d( 0, 0, 0 )";
    // })
  }
}

function watchSubmit() {
  $('.nav-buttons').on('click', (e) => {
    // console.log(e.target.classList)
    let scrollHeight = document.querySelector('html').offsetHeight
    if(e.target.classList.contains('abtme')) {
      let thisScroll =  scrollHeight * 0.20;
      window.scrollTo(0, thisScroll)
    }
    if(e.target.classList.contains('p1')) {
      let thisScroll =  scrollHeight * 0.40;
      window.scrollTo(0, thisScroll)
    }
    if(e.target.classList.contains('p2')) {
      let thisScroll =  scrollHeight * 0.60;
      window.scrollTo(0, thisScroll)
    }
    if(e.target.classList.contains('p3')) {
      let thisScroll =  scrollHeight * 0.80;
      window.scrollTo(0, thisScroll)
    }
  })
}

function sticktothetop() {
  var window_top = $(window).scrollTop();
  let documentHeight = document.querySelector('html').offsetHeight;
  let window_center = window_top + ($(window).innerHeight() * 0.5);


  let measureScroll = this.oldScroll > this.scrollY ? true : false;
  // console.log(measureScroll) 
  this.oldScroll = this.scrollY;


  


  if(window_top === 0) {
    setTimeout(() => {$('#name-plate')[0].classList.add('landing-animation')}, 250);
    $('#name-plate')[0].style.transform = "scale(1)";
    // landingAnimation();
  }
  // else if(window_top > documentHeight * 0.10 && window_top < documentHeight * 0.20) {
  //   console.log("here")
  //   $('#name-plate')[0].style.transform = "scale(1)";
  // }
  else if(window_top != 0) {
    $('#name-plate')[0].style.transform = "scale(0.9)";
  }

  if(window_top > documentHeight * 0.20) {
    $('#name-plate')[0].classList.remove('landing-animation');
  }

  if($('footer')[0].offsetTop >= window_top - 10 && $('footer')[0].offsetTop <= window_top + 10) {  
    focusAboutMe();
  }
  else if($('.project-one-container')[0].offsetTop >= window_top - 10 && $('.project-one-container')[0].offsetTop <= window_top + 10) {
    focusProjectOne();
    rotateTarget1 = document.querySelectorAll('.monitor')[0];
    rotateTarget2 = document.querySelectorAll('.screen')[0];
  }
  else if($('.project-two-container')[0].offsetTop >= window_top - 10 && $('.project-two-container')[0].offsetTop <= window_top + 10) {
    focusProjectTwo();
    rotateTarget1 = document.querySelectorAll('.monitor')[1];
    rotateTarget2 = document.querySelectorAll('.screen')[1];
  }
  else if($('.project-three-container')[0].offsetTop >= window_top - 10 && $('.project-three-container')[0].offsetTop <= window_top + 10) { 
    focusProjectThree();
    rotateTarget1 = document.querySelectorAll('.monitor')[2];
    rotateTarget2 = document.querySelectorAll('.screen')[2];
  }
}


function focusAboutMe() {
  $('.about-me-container')[0].classList.add('in-focus');
  $('.project-one')[0].classList.remove('in-focus');
  $('.project-two')[0].classList.remove('in-focus');
  $('.project-three')[0].classList.remove('in-focus');
}

function focusProjectOne() {
  $('.about-me-container')[0].classList.remove('in-focus');
  $('.project-one')[0].classList.add('in-focus');
  $('.project-two')[0].classList.remove('in-focus');
  $('.project-three')[0].classList.remove('in-focus');
}

function focusProjectTwo() {
  $('.about-me-container')[0].classList.remove('in-focus');
  $('.project-one')[0].classList.remove('in-focus');
  $('.project-two')[0].classList.add('in-focus');
  $('.project-three')[0].classList.remove('in-focus');
}

function focusProjectThree() {
  $('.about-me-container')[0].classList.remove('in-focus');
  $('.project-one')[0].classList.remove('in-focus');
  $('.project-two')[0].classList.remove('in-focus');
  $('.project-three')[0].classList.add('in-focus');
}