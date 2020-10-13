$(function() {
  $(window).scroll(sticktothetop);
  // $(window).scroll(step);
  sticktothetop();
});


let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;
  console.log(start)

  let l1 = document.querySelector('.line1').getBoundingClientRect()
  let findAngle = document.querySelector('.projects-container').getBoundingClientRect()
  let y1 = (findAngle.y*0.8) - l1.bottom
  let x1 = findAngle.right - l1.right
  let y2 = (findAngle.y) - l1.bottom
  let x2 = findAngle.x - l1.x
  let angle = Math.atan2(y1, x1)
  let angle2 = Math.atan2(y2, x2)
  angle = 1 - angle

  // console.log(angle)

  // document.querySelector('.line2').style.transform = "rotate3d(1, 0, 1, -" + angle*100 + "deg)"
  // document.querySelector('.line3').style.transform = "rotate3d(1, 0, 1, " + angle*100 + "deg)"

  document.querySelector('.svg-triangle').setAttribute("width", findAngle.width)
  document.querySelector('.svg-triangle').setAttribute("height", (findAngle.height * 0.25))
  document.querySelector('.polygon-triangle').setAttribute("points", l1.right + "," + (findAngle.height * 0.1) + " " + findAngle.right + "," + findAngle.top + " " + findAngle.left + "," + findAngle.top)

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

// window.requestAnimationFrame(step);






$(document).ready(function() {
  // console.log("made it this far!")
  $(window).scrollTop(0)
})

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".scroll-down", 1, {
//   delay: 4,
//   // delay: 8,
//   opacity: 0,
// })

// function intro() {
// 	let tl = gsap.timeline();
//   tl.from('.arrow-line3', {
//     ease: "power3",
//     x: -50,
//     // opacity: 0,
//     duration: 0.5,
//   }, "-=0.35")
//   tl.from('.arrow-line2', {
//     ease: "power3",
//     x: -50,
//     // opacity: 0,
//     duration: 0.5,
//   }, "-=0.35")
//   tl.from('.arrow-line1', {
//     ease: "power3",
//     x: -50,
//     // opacity: 0,
//     duration: 0.5,
//   }, "-=0.35")
//   tl.to(".svg-arrow", {
//       ease: "slow",
//       // opacity: 0,
//       yPercent: 60,
//       duration: 2
//   }, "-=0.5")
// 	return tl;
// }

// function middle() {
//   let tl = gsap.timeline();
//   tl.to('.arrow-line1', {
//     ease: "slow",
//     x: 50,
//     opacity: 0,
//     duration: 0.5,
//   }, "-=0.35")
//   tl.to('.arrow-line2', {
//     ease: "slow",
//     x: 50,
//     opacity: 0,
//     duration: 0.5,
//   }, "-=0.35")
//   tl.to('.arrow-line3', {
//     ease: "power3",
//     x: 50,
//     opacity: 0,
//     duration: 0.5,
//   }, "-=0.35")
//   tl.to(".svg-arrow", {
//     ease: "power3",
//     // opacity: 0,
//     yPercent: 0,
//     duration: 2
//   }, "-=0.5")
// 	return tl;
// }

// function conclusion() {
// 	let tl = gsap.timeline({repeat: -1});
//   tl.to('.arrow-line1', {
//     ease: "power3",
//     x: 50,
//     // opacity: 0,
//     duration: 0.5,
//   }, "-=.4")
//   tl.to('.arrow-line2', {
//     ease: "power3",
//     x: 50,
//     // opacity: 0,
//     duration: 0.5,
//   }, "-=.4")
//   tl.to('.arrow-line3', {
//     ease: "power3",
//     x: 50,
//     // opacity: 0,
//     duration: 0.5,
//   }, "-=.4")
//   tl.to(".svg-arrow", {
//     ease: "power3",
//     // opacity: 0,
//     yPercent: 0,
//     duration: 3
//   })
// 	return tl;
// }

// let master = gsap.timeline({repeat: -1});
// master.add(intro())
      // .add(middle(), "=-1")    
      // .add(conclusion(), "=-1") 


gsap.from(".nav-button", 1, {
  ease: "sine",
  opacity: 0,
  // yPercent: -100,
  // skewX: 20,
  delay: 4,
  // delay: 8,
  stagger: {
    amount: 0.2,
    from: "start"
  }
})

gsap.from(".pl", 1, {
  yPercent: -100,
  delay: 1,
  // delay: 5,
  ease: "power3",
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
  stagger: {
    amount: 0.1,
    from: "random"
  }
})

gsap.from(".sl", 1, {
  yPercent: -100,
  delay: 1,
  // delay: 5,
  ease: "power4",
  skewY: 20,
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
  stagger: {
    amount: 0.1,
    from: "random"
  }
})

gsap.from(".lt", 2, {
  yPercent: 1000,
  delay: 2,
  // delay: 6,
  ease: "power4",
  // skewY:-20,
  // repeat: -1,
  // repeatDelay: 2,
  stagger: {
    amount: 0.3,
    from: "start"
  }
})

gsap.from(".am-sentence", 1, {
  scrollTrigger: {
    trigger: ".about-me-trigger",
    toggleActions: "play none none none"
  },
  yPercent: 300,
  // delay: 2,
  // delay: 6,
  ease: "power4",
  opacity: 0,
  skewY: 3,
  // repeat: -1,
  // repeatDelay: 2,
  stagger: {
    amount: 0.5,
    from: "start"
  }
})

// gsap.from(".lt", 2, {
//   scrollTrigger: {
//     trigger: ".lt4",
//     // toggleActions: "restart none none none"
//   },
//   xPercent: 1000,
//   // delay: 2,
//   // delay: 6,
//   ease: "power4",
//   // skewY:-20,
//   // repeat: -1,
//   // repeatDelay: 2,
//   stagger: {
//     amount: 0.3,
//     from: "start"
//   }
// })

gsap.from(".ltp", 1, {
  scrollTrigger: {
    trigger: ".ltp",
    toggleActions: "restart none none none"
  },
  yPercent: 100,
  delay: 3,
  ease: "power3",
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
  stagger: {
    amount: 0.1,
    from: "random"
  }
})

gsap.from(".lts", 1, {
  scrollTrigger: {
    trigger: ".lts",
    toggleActions: "restart none none none"
  },
  yPercent: 100,
  delay: 3,
  ease: "power4",
  skewY: 20,
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
  stagger: {
    amount: 0.1,
    from: "random"
  }
})

const navButs = document.querySelectorAll('.nav-button')
for(const navButton of navButs) {
  navButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target)
    let target = event.target.innerHTML
    changeTarget(target)
  })
}

function changeTarget(target) {
  let bodyHeight = document.querySelector('body').offsetHeight;


  if(target === "Home") {
    $(window).scrollTop(1)
  }
  else if(target === "Projects") {
    $(window).scrollTop(0.265 * bodyHeight)

  }
  else if(target === "About") {
    $(window).scrollTop(0.62 * bodyHeight)

  }
  else if(target === "Contact") {
    $(window).scrollTop(.9 * bodyHeight)

  }
}

const thumbnails = document.querySelectorAll('.project-thumbnail')
for (const thumbnail of thumbnails) {
  thumbnail.addEventListener('mouseenter', (event) => {
    event.preventDefault()
    // console.log(event.target.parentElement.classList[0])
    let evTarg = event.target.parentElement.classList;
    evTarg.toggle('collapse')
    evTarg.toggle('expand')
  })
  thumbnail.addEventListener('mouseleave', (event) => {
    event.preventDefault()
    // console.log(event.target.parentElement.classList[0])
    let evTarg = event.target.parentElement.classList;
    evTarg.toggle('collapse')
    evTarg.toggle('expand')
  })
}


function sticktothetop() {
  let full_window_top = $(window).scrollTop() + $(window).innerHeight();
  let window_top = $(window).scrollTop();
  let bodyHeight = document.querySelector('body').offsetHeight;
  let backgroundScrollVal = $(window).scrollTop() / document.querySelector('main').offsetHeight;
  let contactScrollVal = bodyHeight - full_window_top;
  let endingHeight = bodyHeight * 0.8;
  let aboutOpacityVal2 = ((full_window_top - bodyHeight*0.65) / (bodyHeight - bodyHeight*0.9)).toFixed(2)


  // let l1 = document.querySelector('.line1').getBoundingClientRect()
  // let findAngle = document.querySelector('.projects-container').getBoundingClientRect()
  // let y1 = (findAngle.y*0.8) - l1.bottom
  // let x1 = findAngle.right - l1.right
  // let y2 = (findAngle.y) - l1.bottom
  // let x2 = findAngle.x - l1.x
  // let angle = Math.atan2(y1, x1)
  // let angle2 = Math.atan2(y2, x2)
  // angle = 1 - angle

  // // console.log(angle)

  // // document.querySelector('.line2').style.transform = "rotate3d(1, 0, 1, -" + angle*100 + "deg)"
  // // document.querySelector('.line3').style.transform = "rotate3d(1, 0, 1, " + angle*100 + "deg)"

  // document.querySelector('.svg-triangle').setAttribute("width", findAngle.width)
  // document.querySelector('.svg-triangle').setAttribute("height", (findAngle.height * 0.25))
  // document.querySelector('.polygon-triangle').setAttribute("points", l1.right + "," + (findAngle.height * 0.1) + " " + findAngle.right + "," + findAngle.top + " " + findAngle.left + "," + findAngle.top)



  this.oldScroll = this.scrollY;
  // console.log(this.oldScroll, this.scrollY)
  document.querySelector('main').style.transform = "translate3d(0, " + -(window_top)*1 + "px, 0)";
  document.querySelector('.projects-header').style.transform = "translate3d(0, " + (window_top)*0.15 + "px, 0)";
  // document.querySelector('.ph-text').style.transform = "translate3d(0, " + -(window_top)*0.05 + "px, 0)";

  if(backgroundScrollVal > 0.04) {
    document.querySelector('.landing-title').style.filter = "unset";
    document.querySelector('.landing-name-holder').style.filter = "blur(3px)";
  }
  else if(backgroundScrollVal < 0.04) {
    document.querySelector('.landing-title').style.filter = "blur(3px)";
    document.querySelector('.landing-name-holder').style.filter = "blur(0px)";
  }

  // if(backgroundScrollVal < 0.25) {
  //   document.querySelector('.landing-name-holder').style.transform = "translate3d(0, " + (window_top)*.1 + "px, 0)";
  //   document.querySelector('.landing-title').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
  //   // document.querySelector('.scroll-down').style.transform = "translate3d(0, " + (window_top)*0.15 + "px, 0)";
  // }

  
  // if(backgroundScrollVal > 0.16) {
  //   document.querySelector('.projects-header').style.opacity = 1;
  //   document.querySelector('.ph-bg').style.opacity = 1;
  // }
  // else {
  //   document.querySelector('.projects-header').style.opacity = 0;
  //   document.querySelector('.ph-bg').style.opacity = 0;
  // }

  // if(backgroundScrollVal < 0.16) {
    // document.querySelector('.landing-name-holder').style.transform = "translate3d(0, " + (window_top)*0.8 + "px, 0)";

  // }

  if(backgroundScrollVal < 0.25) {
    // document.querySelector('.landing-title').style.transform = "translate3d(0, " + (window_top)*.05 + "px, 0)";
    // document.querySelector('.landing-title').style.transform = "translate3d(0, " + (window_top)*.1 + "px, 0)";
    document.querySelector('.landing-name-holder').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
    // document.querySelector('.line-container').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
    // document.querySelector('.scroll-down').style.transform = "translate3d(0, " + (window_top)*0.15 + "px, 0)";
  }

  if(backgroundScrollVal > 0.18 && backgroundScrollVal < 0.7) {
    document.querySelector('.img-to-move0').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight())*2.1)*0.1 + "px, 0)";
    document.querySelector('.img-to-move1').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*2.6))*0.1 + "px, 0)";
    document.querySelector('.img-to-move2').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*3.2))*0.1 + "px, 0)";
  }

  if(backgroundScrollVal > 0.8) {
    // document.querySelector('.contact-card-outer').style.transform = "translate3d(0, " + (contactScrollVal)*0.8 + "px, 0)";
    document.querySelector('.lets-talk-container').style.transform = "translate3d(0, " + (contactScrollVal)*.3 + "px, 0)";
  }

  if(backgroundScrollVal > 0.4) {
    // document.querySelector('.about-me-label').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
    document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top)*0.2 + "px, 0)";
    document.querySelector('.about-me-header').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
    document.querySelector('.about-me-label').style.transform = "translate3d(0, " + -(window_top)*0.05 + "px, 0)";
  }

  // if(backgroundScrollVal > 0.42 && backgroundScrollVal < 0.65) {
  //   document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top - (bodyHeight*0.50))*0.8 + "px, 0)";
  // }

  // if(backgroundScrollVal > 0.55) {
  //   document.querySelector('.am-body-content').style.backgroundColor = "unset";
  // }
  // else if(backgroundScrollVal < 0.55) {
  //   document.querySelector('.am-body-content').style.backgroundColor = "#000e13";
  // }

  if(full_window_top / bodyHeight > 0.40) {
    document.querySelector('.proj1-title').style.opacity = 1
    document.querySelector('.proj1-description').style.opacity = 1
  }

  if(full_window_top / bodyHeight > 0.47) {
    document.querySelector('.proj2-title').style.opacity = 1
    document.querySelector('.proj2-description').style.opacity = 1
  }

  if(full_window_top / bodyHeight > 0.54) {
    document.querySelector('.proj3-title').style.opacity = 1
    document.querySelector('.proj3-description').style.opacity = 1
  }

  if(full_window_top / bodyHeight > 0.65) {
    document.querySelector('.about-me-label').style.opacity = (1.8 - aboutOpacityVal2)
    // document.querySelector('.about-me-body').style.opacity = aboutOpacityVal2

  }

  if(backgroundScrollVal > 0.6) {
    document.querySelector('.background-fade-left').style.opacity = 0;
  }
  else {
    document.querySelector('.background-fade-left').style.opacity = 1;
  }

  if(backgroundScrollVal > 0.7) {
    document.querySelector('.background-fade-right').style.opacity = 1;
  }
  else {
    document.querySelector('.background-fade-right').style.opacity = 0;
  }

  if(backgroundScrollVal > 0.8) {
    // document.querySelector('.contact-card-inner').classList.add('at-bottom')
    document.querySelector('.contact-section').classList.add('at-bottom')
    document.querySelector('.background-gradient').style.backgroundColor = "#062d3e";
  }
  else {
    // document.querySelector('.contact-card-inner').classList.remove('at-bottom')
    document.querySelector('.contact-section').classList.remove('at-bottom')
    document.querySelector('.background-gradient').style.backgroundColor = "transparent";
  }

  if(backgroundScrollVal > 0.23 && backgroundScrollVal < 0.59 || backgroundScrollVal > 0.8) {
    document.querySelector('.nav-buttons').classList.add('high-contrast')
  }
  else if(backgroundScrollVal < 0.23 || backgroundScrollVal > 0.59 && backgroundScrollVal < 0.8) {
    document.querySelector('.nav-buttons').classList.remove('high-contrast')
  }
}