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


  //FOR STYLING THE LANDING PAGE
  document.querySelector('.screen-second').style.transform = "translate3d(0%, 100%, 0)";

  setTimeout(() => {
    document.querySelector('.screen-first').style.transform = "translate3d(-100%, 0%, 0)";
  }, 500)

  setTimeout(() => {
    document.querySelector('.letter-holders').style.transform = "translate3d(-60%, 0%, 0)";
  }, 500)

  $('.about-me-container')[0].style.top = "100vh";
  
  $('.about-me-label')[0].style.transform = "translate3d(0, 300%, 0)";
  $('.about-me-content')[0].style.transform = "translate3d(0, 300%, 0)";

  setTimeout(() => {
    $('.about-me-container')[0].style.top = "0vh";
    $('.project-containers')[0].style.top = "10vh";

    $('.about-me-label')[0].style.transform = "translate3d(0, 220%, 0)";
    $('.about-me-content')[0].style.transform = "translate3d(0, 150%, 0)";
  }, 1500)

  setTimeout(() => {
    let letters = [...document.querySelectorAll('.letter')]
    // console.log(letters)
    letters.reverse()
    letters.forEach((letter, i) => {
      // console.log(letter)
      setTimeout(() => {
        letter.style.transform = "translate3d(0, -95%, 0)";
        letter.style.lineHeight = "196vh";
        letter.style.boxShadow = "0px 0px 0px 10px rgba(0, 0, 0, 1)";
      }, (i * 30))
    })
  }, 1500)

  // setTimeout(() => {
  //   document.querySelector('.screen-left').style.transform = "translate3d(0%, -97%, 0)";
  // }, 1500)

})

function sticktothetop() {
  var window_top = $(window).scrollTop();
  let documentHeight = document.querySelector('html').offsetHeight;
  document.querySelector('.bg-boxes').style.transform = "translate3d(0, " + -(window_top) + "px, 0)";
  this.oldScroll = this.scrollY;

  if(window_top === 0) { //1
    $('.project-containers')[0].style.transform = "translate3d(0, 0, 0)";
    // $('.about-me-container')[0].style.top = "10vh";

    $('.about-me-label')[0].style.transform = "translate3d(0, 220%, 0)";
    $('.about-me-content')[0].style.transform = "translate3d(0, 150%, 0)";

    $('.about-me-label')[0].style.height = "10vh";
    $('.about-me-label')[0].style.lineHeight = "10vh";
    $('.about-me-label')[0].style.textAlign = "center";

    $('.project-one-container')[0].style.transform = "translate3d(0%, 245%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(0%, 130%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(0%, 15%, 0)";
  }
  else if(window_top > documentHeight * 0.125 && window_top < documentHeight * 0.25) { //2
    $('.about-me-container')[0].style.top = "0vh";
    $('.about-me-label')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.about-me-content')[0].style.transform = "translate3d(0%, 0%, 0)";

    // $('.about-me-label')[0].style.height = "6vh";
    // $('.about-me-label')[0].style.lineHeight = "6vh";

    $('.project-containers')[0].style.top = "10vh";
    // $('.project-one-container')[0].style.transform = "translate3d(100%, 140%, 0)";
    // $('.project-two-container')[0].style.transform = "translate3d(150%, 200%, 0)";
    // $('.project-three-container')[0].style.transform = "translate3d(300%, 200%, 0)";
  }
  else if(window_top >= documentHeight * 0.25 && window_top < documentHeight * 0.375) { //3
    $('.about-me-content')[0].style.transform = "translate3d(0%, -100%, 0)";

    $('.project-containers')[0].style.top = "10vh";
    $('.project-one-container')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(0%, 0%, 0)";
  }
  else if(window_top >= documentHeight * 0.375 && window_top < documentHeight * 0.5) { //4
    // $('.about-me-container')[0].style.top = "0vh";
    // $('.about-me-visual')[0].style.transform = "translate3d(0, 20%, 0)";

    $('.project-containers')[0].style.top = "10vh";
    $('.project-one-container')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(15%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(30%, 0%, 0)";
  }
  else if(window_top >= documentHeight * 0.5 && window_top < documentHeight * 0.625) { //5
    // $('.about-me-container')[0].style.top = "-100vh";
    $('.project-containers')[0].style.top = "10vh";
    $('.project-one-container')[0].style.transform = "translate3d(0%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(0, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(0, 0%, 0)";

    $('footer')[0].style.top = "300vh";
  }
  else if(window_top >= documentHeight * 0.625 && window_top < documentHeight * 0.75) { //6
    $('.project-containers')[0].style.top = "-50vh";
    $('.project-one-container')[0].style.transform = "translate3d(-75%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(-50%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(-25%, 0%, 0)";

    $('footer')[0].style.top = "50vh";
    // $('.contact-me')[0].style.transform = "translate3d(0%, 0%, 0)";
    // $('.information')[0].style.transform = "translate3d(0, 0%, 0)";
  }
  else if(window_top >= documentHeight * 0.75 && window_top < documentHeight * 0.875) { //7
    $('.project-containers')[0].style.top = "-100vh";
    $('.project-one-container')[0].style.transform = "translate3d(-100%, 0%, 0)";
    $('.project-two-container')[0].style.transform = "translate3d(-100%, 0%, 0)";
    $('.project-three-container')[0].style.transform = "translate3d(-100%, 0%, 0)";

    $('footer')[0].style.top = "0vh";
    // $('.contact-me')[0].style.transform = "translate3d(0%, 0%, 0)";
    // $('.information')[0].style.transform = "translate3d(0, 0%, 0)";
  }
}