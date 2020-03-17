$(function() {
  $(window).scroll(sticktothetop);
  sticktothetop();
});

watchSubmit();
switchDisplay();

function switchDisplay() {
  $('.CoP-button').on('click', (e) => {
    // console.log(e.target.value)
    if(e.target.classList.contains('computer')) {
      $('.computer-demo')[e.target.value].classList.add("focused")
      $('.phone-demo')[e.target.value].classList.remove("focused")
    }
    if(e.target.classList.contains('phone')) {
      $('.computer-demo')[e.target.value].classList.remove("focused")
      $('.phone-demo')[e.target.value].classList.add("focused")
    }
  })
}

function watchSubmit() {
  $('.nav-buttons').on('click', (e) => {
    if(e.target.classList.contains('p1')) {
      focusProjectOne()
    }
    else if(e.target.classList.contains('p2')) {
      focusProjectTwo()
    }
    else if(e.target.classList.contains('p3')) {
      focusProjectThree()
    }
  })
}

function sticktothetop() {
  var window_top = $(window).scrollTop();
  let documentHeight = document.querySelector('html').offsetHeight;
  this.oldScroll = this.scrollY;

  if(window_top === 0) {
    setTimeout(() => {$('#name-plate')[0].classList.add('landing-animation')}, 250);
    $('#name-plate')[0].style.transform = "scale(1)";
    $('.project-selector-buttons')[0].classList.remove('in-focus');
    $('.project-containers')[0].classList.remove('in-focus');
    $('.project-containers')[0].style.transform = "translate3d(0, 0, 0)";
  }

  else if(window_top != 0) {
    $('#name-plate')[0].classList.remove('landing-animation');
    $('.project-selector-buttons')[0].classList.add('in-focus');
    $('.project-containers')[0].classList.add('in-focus');
    $('footer')[0].classList.remove('in-focus');
    $('.project-containers')[0].style.transform = "translate3d(-100vw, 0, 0)";
  }

  if(window_top > documentHeight * 0.60) {
    $('.project-selector-buttons')[0].classList.remove('in-focus');
    $('.project-containers')[0].classList.remove('in-focus');
    $('footer')[0].classList.add('in-focus');

    // $('#name-plate')[0].classList.remove('landing-animation');
  }

  // if(window_top === document.querySelector('.project-containers').offsetTop) {
  //   $('#name-plate')[0].classList.add('be-my-top-bar');
  //   $('#name-plate')[0].style.transform = "scale(1)";
  //   $('.project-containers')[0].classList.add('in-focus');
  // }
  // else if(window_top !== document.querySelector('.project-containers').offsetTop) {
  //   $('#name-plate')[0].classList.remove('be-my-top-bar');
  //   $('.project-containers')[0].classList.remove('in-focus');
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