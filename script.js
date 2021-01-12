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

  if (elapsed < 2000) { 
    window.requestAnimationFrame(step);
  }
}

// window.requestAnimationFrame(step);










makeLandingBg();
// makeAboutBg();

function makeLandingBg() {

  const scene = new THREE.Scene();  
  // scene.background = new THREE.Color( 0xffffff, 1 );
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

  const renderer = new THREE.WebGLRenderer(); 
  // const renderer = new THREE.WebGLRenderer({ alpha: true }); 
  // renderer.setSize( window.innerWidth, window.innerHeight ); 
  let centerP = document.querySelector('.centerpiece-container')
  // renderer.setSize( window.innerHeight*0.69, window.innerHeight*0.69 ); 
  // window.addEventListener('resize', () => {
  //   renderer.setSize(window.innerHeight*0.69, window.innerHeight*0.69);
  renderer.setSize( window.innerHeight*0.6, window.innerHeight*0.6 ); 
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerHeight*0.6, window.innerHeight*0.6);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
  })
  // document.querySelector('.centerpiece-container').appendChild( renderer.domElement );
  // document.querySelector('.moving-bg').appendChild( renderer.domElement );


  const geometry1 = new THREE.OctahedronBufferGeometry( 1 );
  // const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
  const material1 = new THREE.MeshLambertMaterial( { color: 0x0000ff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa1 = new THREE.Mesh( geometry1, material1 );

  const geometry2 = new THREE.OctahedronBufferGeometry( 0.9 );
  // const material2 = new THREE.MeshBasicMaterial( { color: 0xff1100, wireframe: true } );
  const material2 = new THREE.MeshLambertMaterial( { color: 0x0003ff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa2 = new THREE.Mesh( geometry2, material2 );

  const geometry3 = new THREE.OctahedronBufferGeometry( 0.8 );
  // const material3 = new THREE.MeshBasicMaterial( { color: 0xff2200, wireframe: true } );
  const material3 = new THREE.MeshLambertMaterial( { color: 0x0051ff, wireframe: true, depthTest: true, depthWrite: true } )
  const octa3 = new THREE.Mesh( geometry3, material3 );

  const geometry4 = new THREE.OctahedronBufferGeometry( 0.5 );
  // const material4 = new THREE.MeshBasicMaterial( { color: 0xff3300, wireframe: true } );
  const material4 = new THREE.MeshLambertMaterial( { color: 0x006aff, wireframe: true, depthTest: true, depthWrite: true } )
  const octa4 = new THREE.Mesh( geometry4, material4 );

  const geometry5 = new THREE.OctahedronBufferGeometry( 0.4 );
  // const material5 = new THREE.MeshBasicMaterial( { color: 0xff3300, wireframe: true} );
  const material5 = new THREE.MeshLambertMaterial( { color: 0x007fff, wireframe: true, depthTest: true, depthWrite: true } )
  const octa5 = new THREE.Mesh( geometry5, material5 );

  const geometry6 = new THREE.OctahedronBufferGeometry( 0.25 );
  // const material6 = new THREE.MeshLambertMaterial( { color: 0xff6600, transparent: true, depthTest: true, depthWrite: true, opacity: 0.3 } );
  const material6 = new THREE.MeshLambertMaterial( { color: 0x008dff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa6 = new THREE.Mesh( geometry6, material6 );

  // const geometry6 = new THREE.OctahedronBufferGeometry( 0.25 );
  // const material6 = new THREE.WireframeGeometry( geometry6 );
  // const octa6 = new THREE.LineSegments( material6 );
  // octa6.material.depthTest = false;
  // octa6.material.opacity = 0.25;
  // octa6.material.transparent = true;

  // const geometry7 = new THREE.OctahedronBufferGeometry( 0.15 );
  // const material7 = new THREE.MeshBasicMaterial( { color: 0xff6600, transparent: false, depthTest: true, depthWrite: true, opacity: 0.6, side: THREE.FrontSide } );
  // const octa7 = new THREE.Mesh( geometry7, material7 );

  const geometry7 = new THREE.OctahedronBufferGeometry( 0.15 );
  // const material7 = new THREE.MeshLambertMaterial( { color: 0xff6600, depthTest: true, depthWrite: true, opacity: 0.4 } );
  const material7 = new THREE.MeshLambertMaterial( { color: 0x0096ff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa7 = new THREE.Mesh( geometry7, material7 );


  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  directionalLight.position.set(20, 0, 25)


  scene.add( octa1, octa2, octa3, octa4, octa5, octa6, octa7, directionalLight );

  camera.position.z = 1;
  // camera.position.y = .1;

  const render = function () {
      requestAnimationFrame( render );

      octa1.rotation.y += 0.001;
      octa2.rotation.y += 0.001;
      octa3.rotation.y += 0.001;
      octa4.rotation.y += 0.0014;
      octa5.rotation.y += 0.0014;
      octa6.rotation.y += 0.0016;
      octa7.rotation.y += 0.0016;

      octa1.rotation.z += 0.001;
      octa2.rotation.z += 0.001;
      octa3.rotation.z += 0.001;
      octa4.rotation.z += 0.0014;
      octa5.rotation.z += 0.0014;
      octa6.rotation.z += 0.0016;
      octa7.rotation.z += 0.0016;

      // octa1.rotation.x += 0.001;
      // octa2.rotation.x += 0.0011;
      // octa3.rotation.x += 0.0012;
      // octa4.rotation.x += 0.0013;
      // octa5.rotation.x += 0.0013;
      // octa6.rotation.x += 0.0014;

      renderer.render(scene, camera);
  };

  render();
}

function makeAboutBg() {

  const scene = new THREE.Scene();  
  // scene.background = new THREE.Color( 0xffffff, 1 );
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

  const renderer = new THREE.WebGLRenderer(); 
  // const renderer = new THREE.WebGLRenderer({ alpha: true }); 
  // renderer.setSize( window.innerWidth, window.innerHeight ); 
  renderer.setSize( window.innerHeight, window.innerHeight ); 
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
  })
  document.querySelector('.moving-bg').appendChild( renderer.domElement );


  const geometry1 = new THREE.OctahedronBufferGeometry( 1 );
  // const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
  const material1 = new THREE.MeshLambertMaterial( { color: 0x0000ff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa1 = new THREE.Mesh( geometry1, material1 );

  const geometry2 = new THREE.OctahedronBufferGeometry( 0.9 );
  // const material2 = new THREE.MeshBasicMaterial( { color: 0xff1100, wireframe: true } );
  const material2 = new THREE.MeshLambertMaterial( { color: 0x0003ff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa2 = new THREE.Mesh( geometry2, material2 );

  const geometry3 = new THREE.OctahedronBufferGeometry( 0.8 );
  // const material3 = new THREE.MeshBasicMaterial( { color: 0xff2200, wireframe: true } );
  const material3 = new THREE.MeshLambertMaterial( { color: 0x0051ff, wireframe: true, depthTest: true, depthWrite: true } )
  const octa3 = new THREE.Mesh( geometry3, material3 );

  const geometry4 = new THREE.OctahedronBufferGeometry( 0.5 );
  // const material4 = new THREE.MeshBasicMaterial( { color: 0xff3300, wireframe: true } );
  const material4 = new THREE.MeshLambertMaterial( { color: 0x006aff, wireframe: true, depthTest: true, depthWrite: true } )
  const octa4 = new THREE.Mesh( geometry4, material4 );

  const geometry5 = new THREE.OctahedronBufferGeometry( 0.4 );
  // const material5 = new THREE.MeshBasicMaterial( { color: 0xff3300, wireframe: true} );
  const material5 = new THREE.MeshLambertMaterial( { color: 0x007fff, wireframe: true, depthTest: true, depthWrite: true } )
  const octa5 = new THREE.Mesh( geometry5, material5 );

  const geometry6 = new THREE.OctahedronBufferGeometry( 0.25 );
  // const material6 = new THREE.MeshLambertMaterial( { color: 0xff6600, transparent: true, depthTest: true, depthWrite: true, opacity: 0.3 } );
  const material6 = new THREE.MeshLambertMaterial( { color: 0x008dff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa6 = new THREE.Mesh( geometry6, material6 );

  // const geometry6 = new THREE.OctahedronBufferGeometry( 0.25 );
  // const material6 = new THREE.WireframeGeometry( geometry6 );
  // const octa6 = new THREE.LineSegments( material6 );
  // octa6.material.depthTest = false;
  // octa6.material.opacity = 0.25;
  // octa6.material.transparent = true;

  // const geometry7 = new THREE.OctahedronBufferGeometry( 0.15 );
  // const material7 = new THREE.MeshBasicMaterial( { color: 0xff6600, transparent: false, depthTest: true, depthWrite: true, opacity: 0.6, side: THREE.FrontSide } );
  // const octa7 = new THREE.Mesh( geometry7, material7 );

  const geometry7 = new THREE.OctahedronBufferGeometry( 0.15 );
  // const material7 = new THREE.MeshLambertMaterial( { color: 0xff6600, depthTest: true, depthWrite: true, opacity: 0.4 } );
  const material7 = new THREE.MeshLambertMaterial( { color: 0x0096ff, wireframe: true, depthTest: true, depthWrite: true } );
  const octa7 = new THREE.Mesh( geometry7, material7 );


  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  directionalLight.position.set(20, 0, 25)


  scene.add( octa1, octa2, octa3, octa4, octa5, octa6, octa7, directionalLight );

  camera.position.z = 1;
  // camera.position.y = .1;

  const render = function () {
      requestAnimationFrame( render );

      octa1.rotation.y += 0.001;
      octa2.rotation.y += 0.001;
      octa3.rotation.y += 0.001;
      octa4.rotation.y += 0.0014;
      octa5.rotation.y += 0.0014;
      octa6.rotation.y += 0.0016;
      octa7.rotation.y += 0.0016;

      octa1.rotation.z += 0.001;
      octa2.rotation.z += 0.001;
      octa3.rotation.z += 0.001;
      octa4.rotation.z += 0.0014;
      octa5.rotation.z += 0.0014;
      octa6.rotation.z += 0.0016;
      octa7.rotation.z += 0.0016;

      // octa1.rotation.x += 0.001;
      // octa2.rotation.x += 0.0011;
      // octa3.rotation.x += 0.0012;
      // octa4.rotation.x += 0.0013;
      // octa5.rotation.x += 0.0013;
      // octa6.rotation.x += 0.0014;

      renderer.render(scene, camera);
  };

  render();
}










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

let trig = document.querySelector('.about-me-trigger')

gsap.from(".am-sentence", 1, {
  scrollTrigger: {
    trigger: ".about-me-trigger",
    toggleActions: "play pause resume reset",
    scrub: 0.5,
    // start: () => `+={(trig.offsetHeight)*0.7}`,
    // start: () => `{trig.offsetHeight}`,
    start: () => `{trig}`,
  },
  yPercent: 300,
  // delay: 2,
  // delay: 6,
  // ease: "power4",
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

gsap.to(".si-top1", 10, {
  xPercent: -415,
  // delay: -3,
  // delay: 6,
  ease: "linear",
  // skewY:-20,
  opacity: 0,
  repeat: -1,
  repeatDelay: 10,
  stagger: {
    amount: 10,
    from: "start"
  }
})

gsap.to(".si-top2", 10, {
  xPercent: -415,
  // delay: -3,
  delay: 15,
  ease: "linear",
  // skewY:-20,
  opacity: 0,
  repeat: -1,
  repeatDelay: 10,
  stagger: {
    amount: 10,
    from: "start"
  }
})



gsap.to(".si-bottom3", 10, {
  xPercent: -415,
  delay: 2.5,
  // delay: 6,
  ease: "linear",
  // skewY:-20,
  opacity: 0,
  repeat: -1,
  repeatDelay: 10,
  stagger: {
    amount: 10,
    from: "start"
  }
})

gsap.to(".si-bottom4", 10, {
  xPercent: -415,
  delay: 17.5,
  // delay: 6,
  ease: "linear",
  // skewY:-20,
  opacity: 0,
  repeat: -1,
  repeatDelay: 10,
  stagger: {
    amount: 10,
    from: "start"
  }
})

gsap.from(".project-one-container", 0.25, {
  scrollTrigger: {
    trigger: ".project-one-container",
    // toggleActions: "restart none none none"
    toggleActions: "play pause resume reset",
  },
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
})

gsap.from(".project-two-container", 0.25, {
  scrollTrigger: {
    trigger: ".project-two-container",
    // toggleActions: "restart none none none"
    toggleActions: "play pause resume reset",
  },
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
})

gsap.from(".project-three-container", 0.25, {
  scrollTrigger: {
    trigger: ".project-three-container",
    // scrub: 0.1,
    // toggleActions: "restart none none none"
    toggleActions: "play pause resume reset",
  },
  opacity: 0,
  // repeat: -1,
  // repeatDelay: 2,
})

//they fade in together to show correlation + scroll needs to go opposite direction.  also when one is highlighted highlight corrallary as well.


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

// document.body.addEventListener('mousemove', (event) => {
//   event.preventDefault();
//   // console.log(event.clientX, event.clientY)
//   document.querySelector('.color-change').style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
// })


function sticktothetop() {
  let full_window_top = $(window).scrollTop() + $(window).innerHeight();
  let window_top = $(window).scrollTop();
  let bodyHeight = document.querySelector('body').offsetHeight;
  let backgroundScrollVal = $(window).scrollTop() / document.querySelector('main').offsetHeight;
  let contactScrollVal = bodyHeight - full_window_top;
  let endingHeight = bodyHeight * 0.8;
  let aboutOpacityVal2 = ((full_window_top - bodyHeight*0.7) / (bodyHeight - bodyHeight*0.9)).toFixed(2)
  let testVar1 = 1 - backgroundScrollVal*10
  let testVar2 = 1 - backgroundScrollVal*5
  let testVar3 = 1.3 - backgroundScrollVal*5
  let testVar4 = 1 - backgroundScrollVal*5
  let bottomTrailVar = (window_top - bodyHeight*0.6)*0.002
  let projBGvar = 1- (window_top/(bodyHeight*0.45))
  // let fixedBGvar = (window_top/(bodyHeight*0.55))
  let fixedBGvar = ((full_window_top - bodyHeight*0.4) / (bodyHeight - bodyHeight*0.6)).toFixed(2)
  let landingOpacityVar = 1 - (window_top/(bodyHeight*0.15))
  // console.log(projBGvar)
  // console.log(1 - (window_top/(bodyHeight*0.15)))

  this.oldScroll = this.scrollY;
  // console.log(this.oldScroll, this.scrollY)
  document.querySelector('main').style.transform = "translate3d(0, " + -(window_top)*1 + "px, 0)";
  document.querySelector('.center-panel').style.transform = "translate3d(0, " + -(window_top)*1 + "px, 0)";
  document.querySelector('.moving-bg').style.transform = "translate3d(0, " + -(window_top)*1.4 + "px, 0)";


  // if(backgroundScrollVal >= 0) {
  //   document.querySelector('.show-home').style.transform = "translate3d(-90vw, 0, 0)";
  //   document.querySelector('.show-home').style.textAlign = "left";
  // }
  // else {
  //   document.querySelector('.show-home').style.transform = "translate3d(0vw, 0, 0)";
  //   document.querySelector('.show-home').style.textAlign = "right";
  // }

  // if(backgroundScrollVal > 0.2) {
  //   document.querySelector('.show-projects').style.transform = "translate3d(-90vw, 0, 0)";
  //   document.querySelector('.show-projects').style.textAlign = "left";
  // }
  // else {
  //   document.querySelector('.show-projects').style.transform = "translate3d(0vw, 0, 0)";
  //   document.querySelector('.show-projects').style.textAlign = "right";
  // }

  // if(backgroundScrollVal > 0.5) {
  //   document.querySelector('.show-about-me').style.transform = "translate3d(-90vw, 0, 0)";
  //   document.querySelector('.show-about-me').style.textAlign = "left";
  // }
  // else {
  //   document.querySelector('.show-about-me').style.transform = "translate3d(0vw, 0, 0)";
  //   document.querySelector('.show-about-me').style.textAlign = "right";
  // }

  // if(backgroundScrollVal > 0.7) {
  //   document.querySelector('.show-contact-me').style.transform = "translate3d(-90vw, 0, 0)";
  //   document.querySelector('.show-contact-me').style.textAlign = "left";
  // }
  // else {
  //   document.querySelector('.show-contact-me').style.transform = "translate3d(0vw, 0, 0)";
  //   document.querySelector('.show-contact-me').style.textAlign = "right";
  // }



  // if(backgroundScrollVal > 0.08) {
  //   document.querySelector('.show-home').style.transform = "translate3d(0, 0vh, 0)";
  // }
  // else {
  //   document.querySelector('.show-home').style.transform = "translate3d(0, 30vh, 0)";
  // }

  // if(backgroundScrollVal > 0.06) {
  //   document.querySelector('.show-projects').style.transform = "translate3d(0, 0vh, 0)";
  // }
  // else {
  //   document.querySelector('.show-projects').style.transform = "translate3d(0, 30vh, 0)";
  // }

  // if(backgroundScrollVal > 0.04) {
  //   document.querySelector('.show-about-me').style.transform = "translate3d(0, 0vh, 0)";
  // }
  // else {
  //   document.querySelector('.show-about-me').style.transform = "translate3d(0, 30vh, 0)";
  // }

  // if(backgroundScrollVal > 0.02) {
  //   document.querySelector('.show-contact-me').style.transform = "translate3d(0, 0vh, 0)";
  // }
  // else {
  //   document.querySelector('.show-contact-me').style.transform = "translate3d(0, 30vh, 0)";
  // }

  // if(backgroundScrollVal > 0 && backgroundScrollVal < 0.04) {
  //   document.querySelector('.landing-page-bg').style.transform = "translate3d(0, " + (window_top)*.4 + "px, 0)";

  // }
  // else if(backgroundScrollVal > 0.0 && backgroundScrollVal < 0.3) {
  //   document.querySelector('.landing-page-bg').style.transform = "translate3d(0, " + (window_top)*.4 + "px, 0)";
  // }
  // else if(backgroundScrollVal === 0) {
  //   document.querySelector('.landing-page-bg').style.transform = "translate3d(0, 0px, 0)";
  // }


  // if(backgroundScrollVal < 0.1) {
  //   document.querySelector('.projects-header-text').style.opacity = 0;
  // }
  // else {
  //   document.querySelector('.projects-header-text').style.opacity = 1;
  // }

  // if(backgroundScrollVal === 0) {
  //   document.querySelector('.projects-header1').style.transform = "translate3d(0%, " + (window_top)*0.4 + "px, 0) scale3d(1, 1, 1)";
  //   document.querySelector('.ph-box').style.transform = "translate3d(0%, 0, 0) rotate(30deg) scale3d(1, 1, 1)";
  //   document.querySelector('.second-ph').style.transform = "translate3d(250%, 0px, -2000px) scale3d(1, 1, 1) rotate(10deg)";
  //   document.querySelector('.third-ph').style.transform = "translate3d(150%, 0px, -4000px) scale3d(1, 1, 1) rotate(70deg)";
  //   document.querySelector('.projects-header1').classList.add('spin-me')
  //   document.querySelector('.projects-header-text').style.transform = "translate3d(0, 0, -0px)";

  // }
  // else if(backgroundScrollVal < 0.5) {
  //   document.querySelector('.projects-header1').style.transform = "translate3d(0%, " + (window_top)*0.4 + "px, 0)";
  //   document.querySelector('.ph-box').style.transform = "translate3d(-0%, " + (window_top)*0.3 + "px, 0) rotate(30deg) scale3d(1, 1, 1)";
  //   document.querySelector('.projects-header1').classList.remove('spin-me')
  //   document.querySelector('.projects-header-text').style.transform = "translate3d(0, " + (window_top)*0.2 + "px, -0px)";
  // }

  // if(backgroundScrollVal === 0) {
  //   document.querySelector('.landing-page-centerpiece').style.transform = "translate3d(0%, " + (window_top)*0.4 + "px, 0)";
  //   document.querySelector('.centerpiece-container').style.transform = "translate3d(0%, 0, 0) rotate(30deg)  scale3d(1, 1, 1)";
  //   document.querySelector('.centerpiece-border').style.transform = "translate3d(0%, 0, 0) rotate(30deg)  scale3d(1, 1, 1)";
  // }
  // else if(backgroundScrollVal < 0.25) {
  //   document.querySelector('.landing-page-centerpiece').style.transform = "translate3d(0%, " + (window_top)*0.4 + "px, 0)";
  //   document.querySelector('.centerpiece-container').style.transform = "translate3d(-0%, " + (window_top)*0.3 + "px, 0) rotate(30deg)  scale3d(1, 1, 1)";
  //   document.querySelector('.centerpiece-border').style.transform = "translate3d(-0%, " + (window_top)*0.3 + "px, 0) rotate(30deg) scale3d(1, 1, 1)";

  // }
  
  if(backgroundScrollVal < 0.25) {
    document.querySelector('.landing-title').style.transform = "translate3d(0, " + -(window_top)*.4 + "px, 0)";
    document.querySelector('.landing-name-holder').style.transform = "translate3d(0, " + -(window_top)*0.2 + "px, 0)";
  }

  //CHANGE PROJECT BOXES TO BE STATIC UNTIL HOVERED THEN MOVE WITH CURSOR

  if(backgroundScrollVal > 0.1 && backgroundScrollVal < 0.7) {
    document.querySelector('.img-to-move0').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight())*2.1)*0.1 + "px, 0)";
    document.querySelector('.box0').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight())*2.1)*0.1 + "px, 0)";
    document.querySelector('.img-to-move1').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*2.6))*0.1 + "px, 0)";
    document.querySelector('.box1').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*2.6))*0.1 + "px, 0)";
    document.querySelector('.img-to-move2').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*3.2))*0.1 + "px, 0)";
    document.querySelector('.box2').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*3.2))*0.1 + "px, 0)";
  }

  // if(backgroundScrollVal > 0.8) {
  //   document.querySelector('.lets-talk-container').style.transform = "translate3d(0, " + (contactScrollVal)*.3 + "px, 0)";
  // }

  // if(backgroundScrollVal > 0.4) {
  //   document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top)*0.7 + "px, 0)";
  //   document.querySelector('.about-me-label').style.transform = "translate3d(0, " + (window_top)*0.7 + "px, 0)";
  // }

  // if(full_window_top / bodyHeight > 0.40) {
  //   document.querySelector('.proj1-title').style.opacity = 1
  //   document.querySelector('.proj1-description').style.opacity = 1
  // }

  // if(full_window_top / bodyHeight > 0.47) {
  //   document.querySelector('.proj2-title').style.opacity = 1
  //   document.querySelector('.proj2-description').style.opacity = 1
  // }

  // if(full_window_top / bodyHeight > 0.54) {
  //   document.querySelector('.proj3-title').style.opacity = 1
  //   document.querySelector('.proj3-description').style.opacity = 1
  // }

  // if(full_window_top / bodyHeight > 0.65) {
    // document.querySelector('.about-me-label').style.opacity = (1.8 - aboutOpacityVal2)
    // document.querySelector('.about-me-label').style.opacity = aboutOpacityVal2

  // }

  if(backgroundScrollVal > 0.75) {

    document.querySelector('.contact-section').classList.add('at-bottom')
  }
  else {
    document.querySelector('.contact-section').classList.remove('at-bottom')
  }

  if(backgroundScrollVal > 0.7) {
    document.querySelector('.background-gradient').style.opacity = 1;
  }
  else {
    document.querySelector('.background-gradient').style.opacity = 0;
  }
}