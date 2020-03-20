$(function() {
  $(window).scroll(sticktothetop);
  sticktothetop();
});

$(document).ready(function() {
  console.log("made it this far!")

  for(i = 0; i < 100; i++) {
    let box = document.createElement("div");
    box.classList.add("box", "b" + i)
    document.querySelector('.bg-boxes').appendChild(box)
  }

  let allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach(eachBox => {
    let randX = Math.floor(Math.random() * 401) - 200;
    let randY = Math.floor(Math.random() * 1000) + 1;
    let randZ = Math.floor(Math.random() * 500) + 1;

    eachBox.style.transform = "translate3d(" + randX + "%, " + randY + "%, " + randZ + "px)";
  })
})

function sticktothetop() {
  var window_top = $(window).scrollTop();
  let documentHeight = document.querySelector('html').offsetHeight;
  document.querySelector('.bg-boxes').style.transform = "translate3d(0, " + -(window_top) + "px, 0)";
  this.oldScroll = this.scrollY;

  if(window_top === 0) {
    // $('#buffer-name-buffer')[0].classList.remove('landing-animation');
    setTimeout(() => {$('#buffer-name-buffer')[0].classList.add('landing-animation')}, 250);
    // $('#buffer-name-buffer')[0].style.transform = "scale(1)";
    // $('.project-containers')[0].classList.remove('in-focus');
    $('.project-containers')[0].style.transform = "translate3d(0, 0, 0)";
    $('#buffer-name-buffer')[0].style.top = "0vh";
    $('.about-me-container')[0].style.top = "100vh";
    
    $('.about-me-label')[0].style.transform = "translate3d(0, 300%, 0)";
    $('.about-me-content')[0].style.transform = "translate3d(0, 300%, 0)";
    $('.about-me-visual')[0].style.transform = "translate3d(0, 300%, 0)";
  }
  else if(window_top > documentHeight * 0.125 && window_top < documentHeight * 0.25) { //aboutMe 1
    $('#buffer-name-buffer')[0].style.top = "-50vh";
    $('.about-me-container')[0].style.top = "50vh";

    $('.about-me-label')[0].style.transform = "translate3d(0, 100%, 0)";
    $('.about-me-content')[0].style.transform = "translate3d(0, 100%, 0)";
    $('.about-me-visual')[0].style.transform = "translate3d(0, 100%, 0)";

    $('.project-containers')[0].style.top = "200vh";
  }
  else if(window_top >= documentHeight * 0.25 && window_top < documentHeight * 0.375) { //aboutMe 2
    $('#buffer-name-buffer')[0].classList.remove('landing-animation');
    $('#buffer-name-buffer')[0].style.top = "-150vh";

    $('.about-me-container')[0].style.top = "0vh";
    $('.about-me-label')[0].style.transform = "translate3d(0, 0%, 0)";
    $('.about-me-content')[0].style.transform = "translate3d(0, 0%, 0)";
    $('.about-me-visual')[0].style.transform = "translate3d(0, 0%, 0)";

    $('.project-containers')[0].style.top = "50vh";
    $('.project-one-container')[0].style.transform = "translate3d(100%, 140%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(150%, 200%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(300%, 200%, 0)";
  }
  else if(window_top >= documentHeight * 0.375 && window_top < documentHeight * 0.5) { //projects 1
    $('.about-me-container')[0].style.top = "-15vh";
    $('.about-me-visual')[0].style.transform = "translate3d(0, -30%, 0)";

    $('.project-containers')[0].style.top = "50vh";
    $('.project-one-container')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(15%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(30%, 0%, 0)";
  }
  else if(window_top >= documentHeight * 0.5 && window_top < documentHeight * 0.625) { //projects 2
    $('.about-me-container')[0].style.top = "-100vh";
    $('.project-containers')[0].style.top = "0vh";
    $('.project-one-container')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(0, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(0, 0%, 0)";

    $('footer')[0].style.top = "300vh";
  }
  else if(window_top >= documentHeight * 0.625 && window_top < documentHeight * 0.75) { //footer 1
    $('.project-containers')[0].style.top = "-50vh";
    $('.project-one-container')[0].style.transform = "translate3d(-75%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(-50%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(-25%, 0%, 0)";

    $('footer')[0].style.top = "50vh";
    // $('.contact-me')[0].style.transform = "translate3d(0%, 0%, 0)";
    // $('.information')[0].style.transform = "translate3d(0, 0%, 0)";
  }
  else if(window_top >= documentHeight * 0.75 && window_top < documentHeight * 0.875) { //footer 2
    $('.project-containers')[0].style.top = "-100vh";
    $('.project-one-container')[0].style.transform = "translate3d(-100%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(-100%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(-100%, 0%, 0)";

    $('footer')[0].style.top = "0vh";
    // $('.contact-me')[0].style.transform = "translate3d(0%, 0%, 0)";
    // $('.information')[0].style.transform = "translate3d(0, 0%, 0)";
  }







  // else if(window_top != 0) {
    // $('.project-containers')[0].classList.add('in-focus');
    // $('footer')[0].classList.remove('in-focus');
    // $('.project-containers')[0].style.transform = "translate3d(-100vw, 0, 0)";
  // }

  // if(window_top > documentHeight * 0.60) {
    // $('.project-containers')[0].classList.remove('in-focus');
    // $('footer')[0].classList.add('in-focus');
  // }
}

function focusProjectOne() {
  $('.project-containers')[0].style.transform = "translate3d(-100vw, 0, 0)";
  // $('.about-me-container')[0].classList.remove('in-focus');
  // $('.project-one-container')[0].classList.add('in-focus');
  // $('.project-two-container')[0].classList.remove('in-focus');
  // $('.project-three-container')[0].classList.remove('in-focus');
}

function focusProjectTwo() {
  $('.project-containers')[0].style.transform = "translate3d(-200vw, 0, 0)";
  // $('.about-me-container')[0].classList.remove('in-focus');
  // $('.project-one-container')[0].classList.remove('in-focus');
  // $('.project-two-container')[0].classList.add('in-focus');
  // $('.project-three-container')[0].classList.remove('in-focus');
}

function focusProjectThree() {
  $('.project-containers')[0].style.transform = "translate3d(-300vw, 0, 0)";
  // $('.about-me-container')[0].classList.remove('in-focus');
  // $('.project-one-container')[0].classList.remove('in-focus');
  // $('.project-two-container')[0].classList.remove('in-focus');
  // $('.project-three-container')[0].classList.add('in-focus');
}

function focusAboutMe() {
  $('.about-me-container')[0].classList.add('in-focus');
  $('.project-one-container')[0].classList.remove('in-focus');
  $('.project-two-container')[0].classList.remove('in-focus');
  $('.project-three-container')[0].classList.remove('in-focus');
}