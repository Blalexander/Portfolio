$(function() {
  $(window).scroll(sticktothetop);
  sticktothetop();
});

$(document).ready(function() {
  console.log("made it this far!")

  for(i = 0; i < 100; i++) {
    let box = document.createElement("div");
    box.classList.add("box", "b" + i)
    // document.querySelector('.bg-boxes').appendChild(box)
  }

  let allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach(eachBox => {
    let randX = Math.floor(Math.random() * 401) - 200;
    let randY = Math.floor(Math.random() * 1000) + 1;
    let randZ = Math.floor(Math.random() * 500) + 1;

    eachBox.style.transform = "translate3d(" + randX + "%, " + randY + "%, " + randZ + "px)";
  })


  
})

document.querySelector('.hamburger').addEventListener("click", toggleHamburger);

function toggleHamburger() {
  document.querySelector('.fixed-navbar').classList.toggle('toggleMe');
}

const thumbnails = document.querySelectorAll('.project-thumbnail')
for (const thumbnail of thumbnails) {
  thumbnail.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target.parentElement.classList[0])
    let evTarg = event.target.parentElement.classList;
    evTarg.toggle('expand')
  })
}


function sticktothetop() {
  // var window_top = $(window).scrollTop() + $(window).innerHeight();
  var window_top = $(window).scrollTop();
  let documentHeight = document.querySelector('html').offsetHeight;
  let backgroundScrollVal = $(window).scrollTop() / document.querySelector('main').offsetHeight;
  // document.querySelector('.bg-boxes').style.transform = "translate3d(0, " + -(window_top) + "px, 0)";
  this.oldScroll = this.scrollY;
  document.querySelector('main').style.transform = "translate3d(0, " + -(window_top) + "px, 0)";
  document.querySelector('.projects-header').style.transform = "translate3d(0, " + -(window_top)*0.2 + "px, 0)";

  if(backgroundScrollVal < 0.2) {
    document.querySelector('.background-border-reveal').style.transform = "scale3d(1, 1, 1)";
  }
  else if(backgroundScrollVal > 0.2) {
    document.querySelector('.background-border-reveal').style.transform = "scale3d(1, 0, 1)";
  }

  // if(window_top < documentHeight * 0.143) { //LANDING
  //   document.querySelector('.bg-boxes').style.transform = "translate3d(0%, 0%, 0)";
  //   // $('.page-indicator-container')[0].style.transform = "translate3d(-40%, 0, 0)";
  //   $('.line-left')[0].style.transform = "translate3d(-100%, 0, 0)";
  //   $('.line-right')[0].style.transform = "translate3d(0%, 0, 0)";
  //   $('.visual')[0].style.transform = "translate3d(-350%, 200%, 0)";

  //   $('.about-me-container')[0].style.transform = "translate3d(0, 200%, 0)";
  // }
  // else if(window_top >= documentHeight * 0.143 && window_top < documentHeight * 0.286) { //ABOUT ME
  //   document.querySelector('.bg-boxes').style.transform = "translate3d(0%, -33%, 0)";
  //   // $('.page-indicator-container')[0].style.transform = "translate3d(-31.67%, 0, 0)";
  //   $('.line-left')[0].style.transform = "translate3d(-90%, 0, 0)";
  //   $('.line-right')[0].style.transform = "translate3d(-85%, 0, 0)";
  //   $('.visual')[0].style.transform = "translate3d(-350%, 0, 0)";

  //   $('.about-me-container')[0].style.transform = "translate3d(0, 0%, 0)";

  //   $('.project-containers')[0].style.transform = "translate3d(-5%, 200%, 0)";
  // }
  // else if(window_top >= documentHeight * 0.286 && window_top < documentHeight * 0.429) { //PROJECTS 1
  //   document.querySelector('.bg-boxes').style.transform = "translate3d(0%, -66%, 0)";
  //   // $('.page-indicator-container')[0].style.transform = "translate3d(-23.34%, 0, 0)";
  //   $('.line-left')[0].style.transform = "translate3d(-70%, 0, 0)";
  //   $('.line-right')[0].style.transform = "translate3d(-65%, 0, 0)";
  //   $('.visual')[0].style.transform = "translate3d(-270%, 0, 0)";

  //   $('.about-me-container')[0].style.transform = "translate3d(0, -200%, 0)";

  //   $('.project-containers')[0].style.transform = "translate3d(-5%, 0%, 0)";
  // }
  // else if(window_top >= documentHeight * 0.429 && window_top < documentHeight * 0.572) { //PROJECTS 2
  //   document.querySelector('.bg-boxes').style.transform = "translate3d(-50%, -66%, 0)";
  //   $('.project-containers')[0].style.transform = "translate3d(-35%, 0%, 0)";

  // }
  // else if(window_top >= documentHeight * 0.572 && window_top < documentHeight * 0.715) { //PROJECTS 3
  //   document.querySelector('.bg-boxes').style.transform = "translate3d(-100%, -66%, 0)";
  //   // $('.page-indicator-container')[0].style.transform = "translate3d(-23.34%, 0, 0)";
  //   $('.line-left')[0].style.transform = "translate3d(-70%, 0, 0)";
  //   $('.line-right')[0].style.transform = "translate3d(-65%, 0, 0)";
  //   $('.visual')[0].style.transform = "translate3d(-270%, 0, 0)";

  //   $('.project-containers')[0].style.transform = "translate3d(-60%, 0%, 0)";

  // }
  // else if((window_top + $(window).innerHeight()) >= documentHeight * 0.95) { //CONTACT ME
  //   document.querySelector('.bg-boxes').style.transform = "translate3d(-100%, -100%, 0)";
  //   // $('.page-indicator-container')[0].style.transform = "translate3d(-15%, 0, 0)";
  //   $('.line-left')[0].style.transform = "translate3d(-40%, 0, 0)";
  //   $('.line-right')[0].style.transform = "translate3d(-35%, 0, 0)";
  //   $('.visual')[0].style.transform = "translate3d(-150%, 0, 0)";

  //   $('.project-containers')[0].style.transform = "translate3d(-60%, -200%, 0)";

  // }
}