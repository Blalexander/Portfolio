$(function() {
  $(window).scroll(sticktothetop);
  // $(window).scroll(step);
  sticktothetop();
});







// var container = document.querySelector('.lp-bg')

// var vertexHeight = 15000,
//   planeDefinition = 100,
//   planeSize = 1245000,
//   totalObjects = 1,
//   background = "#ffffff",
//   meshColor = "#008080"; 

// var camera = new THREE.PerspectiveCamera(55, window.innerWidth / (window.innerHeight * 1.55), 1, 400000)
// camera.position.z = 10000;
// camera.position.y = 10000;

// var scene = new THREE.Scene();
// scene.fog = new THREE.Fog(background, 1, 300000);

// var planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
// var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
//   color: meshColor,
//   wireframe: true
// }));
// // plane.rotation.x -= Math.PI * .5;
// plane.rotation.x -= 4 * .5;



// scene.add(plane);

// var renderer = new THREE.WebGLRenderer({alpha: false});
// renderer.setSize(window.innerWidth, (window.innerHeight * 1.55));
// renderer.setClearColor(background, 1);

// container.appendChild(renderer.domElement);


// updatePlane();

// function updatePlane() {
//   for (var i = 0; i < planeGeo.vertices.length; i++) {
//     planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
//     planeGeo.vertices[i]._myZ = planeGeo.vertices[i].z
//   }
// };

// render();

// var count = 0
// function render() {
//   requestAnimationFrame(render);
//   // camera.position.z -= 150;
//   var x = camera.position.x;
//   var y = camera.position.y;
//   var z = camera.position.z;
//   // camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
//   // camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 1;

//   // camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
//   // camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 1;

//   // camera.position.y = y * Math.cos(0.001) + z * Math.sin(0.001) - ;


//   camera.lookAt(new THREE.Vector3(0, 8000, 0))

//   for (var i = 0; i < planeGeo.vertices.length; i++) {
//     var z = +planeGeo.vertices[i].z;
//     planeGeo.vertices[i].z = Math.sin(( i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ* 0.6))
//     plane.geometry.verticesNeedUpdate = true;

//     count += 0.01
//   }

//   renderer.render(scene, camera);
// }

// window.addEventListener('resize', onWindowResize, false);

// function onWindowResize() {
//   //changes the size of the canavs and updates it
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }







const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

let container;
let camera, scene, renderer;

let particles, count = 0;

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

  container = document.querySelector('.lp-bg');

  camera = new THREE.PerspectiveCamera( 75, (window.innerWidth * 1) / (window.innerHeight * 3), 1, 10000 );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );

  const numParticles = AMOUNTX * AMOUNTY;

  const positions = new Float32Array( numParticles * 3 );
  const scales = new Float32Array( numParticles );

  let i = 0, j = 0;

  for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

      positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
      positions[ i + 1 ] = 0; // y
      positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

      scales[ j ] = 1;

      i += 3;
      j ++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
  geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

  const material = new THREE.ShaderMaterial( {

    uniforms: {
      // color: { value: new THREE.Color( 0xffffff ) },
      color: { value: new THREE.Color( 0x062d3e ) },
      // color: { value: new THREE.Color( 0x008080 ) },
    },
    vertexShader: document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent
  } );

  particles = new THREE.Points( geometry, material );
  scene.add( particles );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, (window.innerHeight * 1.65) );
  container.appendChild( renderer.domElement );

  container.style.touchAction = 'none';
  container.addEventListener( 'pointermove', onPointerMove );

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / (window.innerHeight * 3);
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, (window.innerHeight * 1.65) );
}


function onPointerMove( event ) {

  if ( event.isPrimary === false ) return;

  mouseX = event.clientX - windowHalfX;
  // mouseY = event.clientY - windowHalfY;

}

function animate() {

  requestAnimationFrame( animate );

  render();
}

function render() {

  // camera.position.x += ( mouseX - camera.position.x ) * .001;
  camera.position.x = 500;
  // camera.position.y += ( - mouseY - camera.position.y ) * .05;
  camera.position.y += ( 500 - camera.position.y ) * .05;
  // camera.position.y += ( (500 - $(window).scrollTop()*0.3) - camera.position.y ) * .1;
  camera.lookAt( scene.position );

  const positions = particles.geometry.attributes.position.array;
  const scales = particles.geometry.attributes.scale.array;

  let i = 0, j = 0;

  for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

      positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
              ( Math.sin( ( iy + count ) * 0.5 ) * 50 );

      scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 +
              ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;

      i += 3;
      j ++;

    }

  }

  particles.geometry.attributes.position.needsUpdate = true;
  particles.geometry.attributes.scale.needsUpdate = true;

  renderer.render( scene, camera );

  count += 0.05;

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

// gsap.from(".pl", 1, {
//   yPercent: -100,
//   delay: 1,
//   // delay: 5,
//   ease: "power3",
//   opacity: 0,
//   // repeat: -1,
//   // repeatDelay: 2,
//   stagger: {
//     amount: 0.1,
//     from: "random"
//   }
// })

// gsap.from(".sl", 1, {
//   yPercent: -100,
//   delay: 1,
//   // delay: 5,
//   ease: "power4",
//   skewY: 20,
//   opacity: 0,
//   // repeat: -1,
//   // repeatDelay: 2,
//   stagger: {
//     amount: 0.1,
//     from: "random"
//   }
// })

// gsap.from(".lt", 2, {
//   yPercent: 1000,
//   delay: 2,
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

// gsap.from(".ph-text", 2, {
//   scrollTrigger: {
//     trigger: ".projects-header1",
//     toggleActions: "restart none none none"
//   },
//   xPercent: 25,
//   scaleX: 1,
//   scaleY: 1.8,
//   // yPercent: 100,
//   // delay: 3,
//   // ease: "power4",
//   opacity: 0,
//   // repeat: -1,
//   // repeatDelay: 2,

// })

// gsap.from(".am-sentence", 1, {
//   scrollTrigger: {
//     trigger: ".about-me-trigger",
//     toggleActions: "play none none none"
//   },
//   yPercent: 300,
//   // delay: 2,
//   // delay: 6,
//   ease: "power4",
//   opacity: 0,
//   skewY: 3,
//   // repeat: -1,
//   // repeatDelay: 2,
//   stagger: {
//     amount: 0.5,
//     from: "start"
//   }
// })

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

gsap.from(".phl", 1.5, {
  scrollTrigger: {
    trigger: ".ph-text",
    toggleActions: "play none none none",
    start: "bottom bottom",
  },
  // yPercent: -30,
  xPercent: 500,
  // scaleY: 1.8,
  // scaleX: 1,
  ease: "power3",
  // opacity: 0,
  stagger: {
    amount: 0.1,
    from: "edges"
  }
})

gsap.from(".ph-text", 1.5, {
  scrollTrigger: {
    trigger: ".ph-text",
    toggleActions: "play none none none",
    start: "bottom bottom",
  },
  // yPercent: -100,
  // xPercent: 100,
  opacity: 0,
  scaleY: 1.8,
  scaleX: 1,
  ease: "power3",
})


const navButs = document.querySelectorAll('.navi')
for(const navButton of navButs) {
  navButton.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target.classList)
    if(event.target.classList[1].includes("navbar-name")) {
      $(window).scrollTop(1)
    }
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
  document.querySelector('main').style.transform = "translate3d(0, " + -(window_top)*1.26 + "px, 0)";

  // if(backgroundScrollVal > 0.04) {
  //   document.querySelector('.landing-title').style.filter = "blur(0px)";
  //   document.querySelector('.landing-name-holder').style.filter = "blur(3px)";
  // }
  // else if(backgroundScrollVal < 0.04) {
  //   document.querySelector('.landing-title').style.filter = "blur(3px)";
  //   document.querySelector('.landing-name-holder').style.filter = "blur(0px)";
  // }


  if(backgroundScrollVal > 0.1) {
    document.querySelector('.ph-inner').style.transform = "translate3d(0, " + (window_top)*0.15 + "px, 0)";

  }

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
    // document.querySelector('.landing-introduction').style.transform = "translate3d(0, " + (window_top)*0.5 + "px, 0)";

  // }

  if(backgroundScrollVal > 0.18) {
    document.querySelector('.projects-header').classList.add('move-down')
  }
  else if (backgroundScrollVal === 0) {
    document.querySelector('.projects-header').classList.remove('move-down')


  }

  if(backgroundScrollVal < 0.25) {
    // document.querySelector('.landing-name-holder').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
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

  if(backgroundScrollVal > 0.58) {
    document.querySelector('.ams1').style.opacity = 1;
    document.querySelector('.ams1').style.transform = "scale3d(1, 1, 1)";
  }
  else {
    document.querySelector('.ams1').style.opacity = 0;
    document.querySelector('.ams1').style.transform = "scale3d(1, 0.7, 1)";
  }

  if(backgroundScrollVal > 0.59) {
    document.querySelector('.ams2').style.opacity = 1;
    document.querySelector('.ams2').style.transform = "translate3d(0, 0%, 0) scale3d(1, 1, 1)";
  }
  else {
    document.querySelector('.ams2').style.opacity = 0;
    document.querySelector('.ams2').style.transform = "translate3d(0, -50%, 0) scale3d(1, 0.7, 1)";
  }

  if(backgroundScrollVal > 0.63) {
    document.querySelector('.ams3').style.opacity = 1;
    document.querySelector('.ams3').style.transform = "translate3d(0, 0%, 0) scale3d(1, 1, 1)";
  }
  else {
    document.querySelector('.ams3').style.opacity = 0;
    document.querySelector('.ams3').style.transform = "translate3d(0, -50%, 0) scale3d(1, 0.7, 1)";
  }

  if(backgroundScrollVal > 0.65) {
    document.querySelector('.ams4').style.opacity = 1;
    document.querySelector('.ams4').style.transform = "translate3d(0, 0%, 0) scale3d(1, 1, 1)";
  }
  else {
    document.querySelector('.ams4').style.opacity = 0;
    document.querySelector('.ams4').style.transform = "translate3d(0, -50%, 0) scale3d(1, 0.7, 1)";
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
    document.querySelector('.proj1-tech').style.opacity = 1
    document.querySelector('.proj1-thumbnail').style.opacity = 1

  }

  if(full_window_top / bodyHeight > 0.47) {
    document.querySelector('.proj2-title').style.opacity = 1
    document.querySelector('.proj2-description').style.opacity = 1
    document.querySelector('.proj2-tech').style.opacity = 1
    document.querySelector('.proj2-thumbnail').style.opacity = 1
  }

  if(full_window_top / bodyHeight > 0.54) {
    document.querySelector('.proj3-title').style.opacity = 1
    document.querySelector('.proj3-description').style.opacity = 1
    document.querySelector('.proj3-tech').style.opacity = 1
    document.querySelector('.proj3-thumbnail').style.opacity = 1
  }

  if(full_window_top / bodyHeight > 0.65) {
    document.querySelector('.about-me-label').style.opacity = (1.8 - aboutOpacityVal2)
    // document.querySelector('.about-me-body').style.opacity = aboutOpacityVal2

  }

  if(backgroundScrollVal > 0.6) {
    // document.querySelector('.contact-card-inner').classList.add('at-bottom')
    document.querySelector('.contact-section').classList.add('at-bottom')
    document.querySelector('.contact-card-bg').style.backgroundColor = "#000e13";
  }
  else {
    // document.querySelector('.contact-card-inner').classList.remove('at-bottom')
    document.querySelector('.contact-section').classList.remove('at-bottom')
    document.querySelector('.contact-card-bg').style.backgroundColor = "transparent";
  }


}