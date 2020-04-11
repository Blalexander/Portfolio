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

$(function() {
  $(window).scroll(sticktothetop);
  sticktothetop();
});

let documentHeight = document.querySelector('html').offsetHeight * 0.4;
let documentWidth = document.querySelector('html').offsetWidth * 0.4;

$('.name-mouseover-obj').mousemove(
  (e) => {
    e.preventDefault();
    // console.log(e.clientX, e.clientY)

    if(e.clientX > (documentWidth * 0.8) && e.clientY < (documentHeight * 0.5)) {
      console.log(e.clientY / documentHeight)
      // let adjustBy = 
      // document.querySelector('.about-me').style.transform = "translate3d(" + adjustBy + "%, 0, 0)";
    }
  }
)

watchSubmit();

function watchSubmit() {
  $('.nav-buttons').on('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('about-me')) {
      focusAboutMe()
    }
    else if(e.target.classList.contains('p1')) {
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
  // var window_top = $(window).scrollTop() + $(window).innerHeight();
  var window_top = $(window).scrollTop();
  let documentHeight = document.querySelector('html').offsetHeight;
  // document.querySelector('.bg-boxes').style.transform = "translate3d(0, " + -(window_top) + "px, 0)";
  this.oldScroll = this.scrollY;
}

function focusAboutMe() {
  console.log("focus about me")
  reset()

  $('.about-me-content')[0].style.transform = "translate3d(0%, 0%, 0)";
}

function focusProjectOne() {
  console.log("focus p1")
  reset()

  $('.project-one-container')[0].style.transform = "translate3d(0%, 0%, 0)";
}

function focusProjectTwo() {
  console.log("focus p2")
  reset()

  $('.project-two-container')[0].style.transform = "translate3d(0%, 0%, 0)";

}

function focusProjectThree() {
  console.log("focus p3")
  reset()

  $('.project-three-container')[0].style.transform = "translate3d(0%, 0%, 0)";

}

function reset() {
  $('.about-me-content')[0].style.transform = "translate3d(200%, -200%, 0)";
  $('.project-one-container')[0].style.transform = "translate3d(200%, 200%, 0)";
  $('.project-two-container')[0].style.transform = "translate3d(200%, 200%, 0)";
  $('.project-three-container')[0].style.transform = "translate3d(200%, 200%, 0)";
}