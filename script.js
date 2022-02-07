$(function() {
  $(window).scroll(sticktothetop);
  // $(window).scroll(step);
  sticktothetop();
});


makeLandingBg();

function makeLandingBg() {
  const w = 1920;
  const h = 1080;
  const fullWidth = w * 3;
  const fullHeight = h * 2;
  const scene = new THREE.Scene();  
  // scene.background = new THREE.Color( 0xffffff, 1 );
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.01, 10000 ); 
  // camera.setViewOffset( fullWidth, fullHeight, w * 0.7, h * 0.3, w, h )


  const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true}); 
  let centerP = document.querySelector('.centerpiece-container')
  renderer.setSize( window.innerWidth, window.innerHeight ); 
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;


    camera.updateProjectionMatrix();
  })
  document.querySelector('.centerpiece-container').appendChild( renderer.domElement );

  let background = "#000e13"
  scene.fog = new THREE.Fog(background, 1, 1.05);
  renderer.setClearColor(background, 1);


  const geometry1 = new THREE.IcosahedronBufferGeometry( 0.6, 5 );
  // const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
  const material1 = new THREE.MeshLambertMaterial( { color: 0x00babb, wireframe: true, depthTest: true, depthWrite: true } );
  const octa1 = new THREE.Mesh( geometry1, material1 );


  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.2 );
  directionalLight.position.set(20, -20, 25)
  directionalLight.castShadow = true;

  const directionalLight1 = new THREE.DirectionalLight( 0x000e13, 0.3 );
  directionalLight1.position.set(-20, 20, -25)


  // scene.add( octa1, octa2, octa3, octa4, octa5, octa6, octa7, directionalLight );
  // scene.add( octa1, directionalLight, directionalLight1 );
  scene.add( octa1, directionalLight );


  camera.position.z = 1;
  // camera.position.y = .1;

  const render = function () {
      requestAnimationFrame( render );

      // octa1.rotation.y += 0.0005;


      octa1.rotation.z += 0.0005;


      octa1.rotation.x += 0.0005;


      renderer.render(scene, camera);
  };

  render();
}



createLandingBG()

function createLandingBG() {
  var container = document.querySelector('.lp-bg')
  var container2 = document.querySelector('.contact-card-bg')

  var vertexHeight = 15000,
  // var vertexHeight = 25000,
    planeDefinition = 20,
    // planeDefinition = 10,
    // planeSize = 1245000,
    planeSize = 200000,
    totalObjects = 1,
    background = "#000e13",
    background2 = "#ffffff",
    // meshColor = "#ffffff";
    meshColor = "#00babb"; 


  const w = 1920;
  const h = 1080;
  const fullWidth = w * 3;
  const fullHeight = h * 2;
  // var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
  var camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 400000)
  camera.setViewOffset( fullWidth, fullHeight, w * 0.7, h * 0.3, w, h )
  // camera.setViewOffset( fullWidth, fullHeight, w * 0.8, h * 0.3, w, h )
  camera.position.x = -10000;
  // camera.position.z = 10000;
  camera.position.z = -200000;
  // camera.position.y = 11000;
  camera.position.y = 15000;

  var scene = new THREE.Scene();
  // scene.fog = new THREE.Fog(background, 1, 100000);
  scene.fog = new THREE.Fog(background, 1, 300000);

  var scene1 = new THREE.Scene();
  scene1.fog = new THREE.Fog(background, 1, 300000);

  var scene2 = new THREE.Scene();
  scene2.fog = new THREE.Fog(background, 1, 300000);

  var planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
  var plane = new THREE.Mesh(planeGeo, new THREE.MeshStandardMaterial({
    color: meshColor,
    wireframe: true,
    emissive: meshColor,
    emissiveIntensity: 0.8,
  }));
  // plane.rotation.x -= 1.5;
  plane.rotation.x -= 4 * .5;

  var plane2 = new THREE.Mesh(planeGeo, new THREE.MeshStandardMaterial({
    color: meshColor,
    wireframe: false,
    emissive: meshColor,
    emissiveIntensity: 0.8,
  }));
  // plane2.rotation.x -= 1.5;
  plane2.rotation.x -= 4 * .5;

  const bgeometry = new THREE.BoxGeometry( 25000, 15000, 1 );
  const bmaterial = new THREE.MeshStandardMaterial( {color: 0x00ff00, emissive: 0x000e13, wireframe: false, depthTest: true, depthWrite: true} );
  const cube = new THREE.Mesh( bgeometry, bmaterial );
  cube.position.x = 0;
  cube.position.y = -10000;
  cube.position.z = -50000;
  // cube.rotation.x = 50;
  cube.rotation.x = 0;
  // cube.position.y += ( (500 - $(window).scrollTop()*0.3) - camera.position.y ) * .1;
  // cube.position.y -= $(window).scrollTop();


  scene.add(plane);
  // scene1.add(cube)
  // scene2.add(plane2, cube);
  scene2.add(plane2);


  var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setClearColor(background, 1);
  // renderer1.setClearColor( 0x000000, 0 );
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = 0;
  renderer.domElement.style.zIndex = '1';

  // var renderer1 = new THREE.WebGLRenderer({alpha: true});
  // renderer1.setSize(window.innerWidth, window.innerHeight);
  // renderer1.setClearColor( 0x000000, 0 );
  // renderer1.setPixelRatio(window.devicePixelRatio);
  // container.appendChild(renderer1.domElement);
  // renderer1.domElement.style.position = 'absolute';
  // renderer1.domElement.style.top = 0;
  
  var renderer2 = new THREE.WebGLRenderer({alpha: false, antialias: true});
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.setClearColor(background, 1);
  renderer2.setPixelRatio(window.devicePixelRatio);
  container2.appendChild(renderer2.domElement);

  updatePlane();

  function updatePlane() {
    for (var i = 0; i < planeGeo.vertices.length; i++) {
      // planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight*1.5;
      planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
      planeGeo.vertices[i]._myZ = planeGeo.vertices[i].z
    }
  };

  render();

  var count = 0;
  var bgBox = -10000;
  function render() {
    requestAnimationFrame(render);
    // camera.position.z -= 150;
    var x = camera.position.x;
    var y = camera.position.y;
    var z = camera.position.z;
    // cube.position.y = ($(window).scrollTop() - (document.body.offsetHeight * 0.7)) ;
    // if($(window).scrollTop() > 500) {
    //   camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
    //   camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
    // }
    // else {
    //   camera.position.x = 0
    // }

    // camera.position.x += ( mouseX - camera.position.x ) * 1;

    // camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
    // camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 1;

    // camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
    // camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 1;

    // camera.position.y = y * Math.cos(0.001) + z * Math.sin(0.001) - 10;
    // camera.position.y = 10350;


    camera.lookAt(new THREE.Vector3(0, 8000, 0))

    for (var i = 0; i < planeGeo.vertices.length; i++) {
      var z = +planeGeo.vertices[i].z;
      planeGeo.vertices[i].z = Math.sin(( i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ* 0.6))
      // planeGeo.vertices[i].z = Math.tan(( i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ* 1.5))
      plane.geometry.verticesNeedUpdate = true;
      plane2.geometry.verticesNeedUpdate = true;

      // count += 0.025
      count += 1.25

    }

    renderer.render(scene, camera);
    // renderer1.render(scene1, camera);
    renderer2.render(scene2, camera);
  }

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    //changes the size of the canavs and updates it
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer2.setSize(window.innerWidth, window.innerHeight);
  }
}








// const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

// let container;
// let camera, scene, renderer;

// let particles, count = 0;

// let mouseX = 0, mouseY = 0;

// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;

// init();
// animate();

// function init() {

//   container = document.querySelector('.lp-bg');

//   camera = new THREE.PerspectiveCamera( 75, (window.innerWidth * 1) / (window.innerHeight * 3), 1, 10000 );
//   camera.position.z = 1000;
//   let background = "#000e13"

//   scene = new THREE.Scene();
//   scene.fog = new THREE.Fog(background, 1, 100);

//   scene.background = new THREE.Color( 0x000000 );
//   // scene.background = new THREE.Color( 0x000e13 );


//   const numParticles = AMOUNTX * AMOUNTY;

//   const positions = new Float32Array( numParticles * 3 );
//   const scales = new Float32Array( numParticles );

//   let i = 0, j = 0;

//   for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

//     for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

//       positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
//       positions[ i + 1 ] = 0; // y
//       positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z

//       scales[ j ] = 1;

//       i += 3;
//       j ++;
//     }
//   }

//   const geometry = new THREE.BufferGeometry();
//   geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
//   geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

//   const material = new THREE.ShaderMaterial( {

//     uniforms: {
//       // color: { value: new THREE.Color( 0xffffff ) },
//       // color: { value: new THREE.Color( 0x062d3e ) },
//       color: { value: new THREE.Color( 0x00babb ) },
//       // color: { value: new THREE.Color( 0x006e70 ) },

//     },
//     vertexShader: document.getElementById( 'vertexshader' ).textContent,
//     fragmentShader: document.getElementById( 'fragmentshader' ).textContent
//   } );

//   particles = new THREE.Points( geometry, material );
//   scene.add( particles );

//   renderer = new THREE.WebGLRenderer( { antialias: true } );
//   renderer.setPixelRatio( window.devicePixelRatio );
//   renderer.setSize( window.innerWidth, window.innerHeight);
//   container.appendChild( renderer.domElement );

//   container.style.touchAction = 'none';
//   container.addEventListener( 'pointermove', onPointerMove );

//   window.addEventListener( 'resize', onWindowResize );

// }

// function onWindowResize() {

//   windowHalfX = window.innerWidth / 2;
//   windowHalfY = window.innerHeight / 2;

//   camera.aspect = window.innerWidth / (window.innerHeight * 3);
//   camera.updateProjectionMatrix();

//   renderer.setSize( window.innerWidth, window.innerHeight);
// }


// function onPointerMove( event ) {

//   if ( event.isPrimary === false ) return;

//   mouseX = event.clientX - windowHalfX;
//   // mouseY = event.clientY - windowHalfY;

// }

// function animate() {

//   requestAnimationFrame( animate );

//   render();
// }

// function render() {

//   // camera.position.x += ( mouseX - camera.position.x ) * .001;
//   camera.position.x = 500;
//   // camera.position.y += ( - mouseY - camera.position.y ) * .05;
//   camera.position.y += ( 500 - camera.position.y ) * .05;
//   // camera.position.y += ( (500 - $(window).scrollTop()*0.3) - camera.position.y ) * .1;
//   camera.lookAt( scene.position );

//   const positions = particles.geometry.attributes.position.array;
//   const scales = particles.geometry.attributes.scale.array;

//   let i = 0, j = 0;

//   for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

//     for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

//       positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
//               ( Math.sin( ( iy + count ) * 0.5 ) * 50 );

//       scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 +
//               ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;

//       i += 3;
//       j ++;

//     }

//   }

//   particles.geometry.attributes.position.needsUpdate = true;
//   particles.geometry.attributes.scale.needsUpdate = true;

//   renderer.render( scene, camera );

//   count += 0.05;

// }








$(document).ready(function() {
  // console.log("made it this far!")
  // $(window).scrollTop(0)
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











// gsap.from(".nav-button", 1, {
//   ease: "sine",
//   opacity: 0,
//   // yPercent: -100,
//   // skewX: 20,
//   delay: 4,
//   // delay: 8,
//   stagger: {
//     amount: 0.2,
//     from: "start"
//   }
// })








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

// gsap.from(".phl", 1.5, {
//   scrollTrigger: {
//     trigger: ".ph-text",
//     toggleActions: "play none none none",
//     start: "bottom bottom",
//   },
//   // yPercent: -30,
//   xPercent: 500,
//   // scaleY: 1.8,
//   // scaleX: 1,
//   ease: "power3",
//   // opacity: 0,
//   stagger: {
//     amount: 0.1,
//     from: "edges"
//   }
// })

// gsap.from(".ph-text", 1.5, {
//   scrollTrigger: {
//     trigger: ".ph-text",
//     toggleActions: "play none none none",
//     start: "bottom bottom",
//   },
//   // yPercent: -100,
//   // xPercent: 100,
//   opacity: 0,
//   scaleY: 1.8,
//   scaleX: 1,
//   ease: "power3",
// })


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

// const thumbnails = document.querySelectorAll('.project-thumbnail')
const thumbnails = document.querySelectorAll('.proj-cont')
for (const thumbnail of thumbnails) {
  thumbnail.addEventListener('mouseenter', (event) => {
    event.preventDefault()
    // console.log(event.target)
    let evTarg = event.target.classList;
    evTarg.toggle('collapse')
    evTarg.toggle('expand')
  })
  thumbnail.addEventListener('mouseleave', (event) => {
    event.preventDefault()
    // console.log(event.target.parentElement.classList[0])
    let evTarg = event.target.classList;
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
  let aboutOpacityVal2 = ((full_window_top - bodyHeight*0.65) / (bodyHeight - bodyHeight*0.7)).toFixed(2)


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
  document.querySelector('.centerpiece-container').style.transform = "translate3d(10%, " + -(window_top)*1 + "px, 0)";

  // if(backgroundScrollVal > 0.04) {
  //   document.querySelector('.landing-title').style.filter = "blur(0px)";
  //   document.querySelector('.landing-name-holder').style.filter = "blur(3px)";
  // }
  // else if(backgroundScrollVal < 0.04) {
  //   document.querySelector('.landing-title').style.filter = "blur(3px)";
  //   document.querySelector('.landing-name-holder').style.filter = "blur(0px)";
  // }

  // if(backgroundScrollVal > 0.2) {
  //   document.querySelector('.fixed-navbar').style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
  // }
  // else {
  //   document.querySelector('.fixed-navbar').style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0)";
  // }

  let allProjLetters = document.querySelectorAll('.phl');
  let linesDown = document.querySelectorAll('.lines-down')

  if(backgroundScrollVal > 0.1) {
    // document.querySelector('.ph-inner').style.transform = "translate3d(0, " + (window_top)*0.15 + "px, 0)";
    // document.querySelector('.projects-container').style.transform = "translate3d(0%, 0, 0) skewX(0deg)";
    // document.querySelector('.top-projects-line').style.transform = "scale3d(1, 1, 1)";
    document.querySelector('.projects-container').classList.add('in-focus')
    allProjLetters.forEach((letter) => {
      letter.style.transform = "translate3d(0, 0%, 0) rotateY(0deg)";
      letter.style.opacity = 1;
    })
    linesDown.forEach((line) => {
      line.style.transform = "scale3d(1, 1, 1)";
    })
  }
  else {
    // document.querySelector('.projects-container').style.transform = "translate3d(-100%, 0, 0) skewX(-10deg)";
    // document.querySelector('.top-projects-line').style.transform = "scale3d(0, 1, 1)";
    document.querySelector('.projects-container').classList.remove('in-focus')
    allProjLetters.forEach((letter) => {
      letter.style.transform = "translate3d(0, 100%, 0) rotateY(80deg)";
      letter.style.opacity = 0;
    })
    linesDown.forEach((line) => {
      line.style.transform = "scale3d(1, 0, 1)";
    })
  }

  if(backgroundScrollVal > 0.23) {
    document.querySelector('.project-one-container').classList.add('reveal');
  }
  else if(backgroundScrollVal == 0) {
    document.querySelector('.project-one-container').classList.remove('reveal');
  }

  if(backgroundScrollVal > 0.35) {
    document.querySelector('.project-two-container').classList.add('reveal');
  }
  else if(backgroundScrollVal == 0) {
    document.querySelector('.project-two-container').classList.remove('reveal');
  }

  if(backgroundScrollVal > 0.47) {
    document.querySelector('.project-three-container').classList.add('reveal');
  }
  else if(backgroundScrollVal == 0) {
    document.querySelector('.project-three-container').classList.remove('reveal');
  }

  // if(backgroundScrollVal > 0.20) {
  //   allProjLetters.forEach((letter) => {
  //     letter.style.transform = "translate3d(0%, 0, 0)";
  //     letter.style.opacity = 1;
  //   })
  // }
  // else {
  //   allProjLetters.forEach((letter) => {
  //     letter.style.transform = "translate3d(1000%, 0, 0)";
  //     letter.style.opacity = 0;
  //   })
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
    // document.querySelector('.landing-introduction').style.transform = "translate3d(0, " + (window_top)*0.6 + "px, 0)";
    document.querySelector('.lp-bg').style.transform = "translate3d(0, " + -(window_top)*0.1 + "px, 0)";
    document.querySelector('.contact-card-bg').style.transform = "translate3d(0, " + -(window_top)*0.1 + "px, 0)";

  }

  if(backgroundScrollVal > 0.18 && backgroundScrollVal < 0.7) {
    document.querySelector('.img-to-move0').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight())*2.1)*0.1 + "px, 0)";
    document.querySelector('.img-to-move1').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*2.6))*0.1 + "px, 0)";
    document.querySelector('.img-to-move2').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*3.2))*0.1 + "px, 0)";
  }

  if(backgroundScrollVal > 0.8) {
    // document.querySelector('.contact-card-outer').style.transform = "translate3d(0, " + (contactScrollVal)*0.8 + "px, 0)";
    // document.querySelector('.lets-talk-container').style.transform = "translate3d(0, " + (contactScrollVal)*.3 + "px, 0)";
  }

  if(backgroundScrollVal > 0.4) {
    // document.querySelector('.about-me-label').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
    // document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top)*0.2 + "px, 0)";
    // document.querySelector('.about-me-header').style.transform = "translate3d(0, " + (window_top)*0.3 + "px, 0)";
    // document.querySelector('.about-me-label').style.transform = "translate3d(0, " + -(window_top)*0.05 + "px, 0)";
  }

  // if(backgroundScrollVal > 0.55) {
  //   document.querySelector('.ams1').style.transform = "translate3d(0%, 0%, 0)";
  //   document.querySelector('.amsp1').style.opacity = 0;
  // }
  // else {
  //   document.querySelector('.ams1').style.transform = "translate3d(20%, 110%, 0)";
  //   document.querySelector('.amsp1').style.opacity = 1;
  // }

  // if(backgroundScrollVal > 0.57) {
  //   document.querySelector('.ams2').style.opacity = 1;
  //   document.querySelector('.ams2').style.transform = "scale3d(1, 1, 1)";
  //   document.querySelector('.amsp2').style.opacity = 0;
  // }
  // else {
  //   document.querySelector('.ams2').style.opacity = 0;
  //   document.querySelector('.ams2').style.transform = "scale3d(1, 1, 0.6)";
  //   document.querySelector('.amsp2').style.opacity = 1;
  // }

  // if(backgroundScrollVal > 0.59) {
  //   document.querySelector('.ams3').style.transform = "scale3d(1, 1, 1)";
  //   document.querySelector('.amsp3').style.opacity = 0;
  // }
  // else {
  //   document.querySelector('.ams3').style.transform = "scale3d(0, 1, 1)";
  //   document.querySelector('.amsp3').style.opacity = 1;
  // }

  // if(backgroundScrollVal > 0.63) {
  //   document.querySelector('.ams4').style.transform = "scale3d(1, 1, 1)";
  //   document.querySelector('.amsp4').style.opacity = 0;
  // }
  // else {
  //   document.querySelector('.ams4').style.transform = "scale3d(1, 0, 1)";
  //   document.querySelector('.amsp4').style.opacity = 1;
  // }

  // if(backgroundScrollVal > 0.42 && backgroundScrollVal < 0.65) {
  //   document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top - (bodyHeight*0.50))*0.8 + "px, 0)";
  // }

  // if(backgroundScrollVal > 0.55) {
  //   document.querySelector('.am-body-content').style.backgroundColor = "unset";
  // }
  // else if(backgroundScrollVal < 0.55) {
  //   document.querySelector('.am-body-content').style.backgroundColor = "#000e13";
  // }

  // if(full_window_top / bodyHeight > 0.40) {
  //   document.querySelector('.proj1-title').style.opacity = 1
  //   document.querySelector('.proj1-description').style.opacity = 1
  //   document.querySelector('.proj1-tech').style.opacity = 1
  //   document.querySelector('.proj1-thumbnail').style.opacity = 1

  // }

  // if(full_window_top / bodyHeight > 0.47) {
  //   document.querySelector('.proj2-title').style.opacity = 1
  //   document.querySelector('.proj2-description').style.opacity = 1
  //   document.querySelector('.proj2-tech').style.opacity = 1
  //   document.querySelector('.proj2-thumbnail').style.opacity = 1
  // }

  // if(full_window_top / bodyHeight > 0.54) {
  //   document.querySelector('.proj3-title').style.opacity = 1
  //   document.querySelector('.proj3-description').style.opacity = 1
  //   document.querySelector('.proj3-tech').style.opacity = 1
  //   document.querySelector('.proj3-thumbnail').style.opacity = 1
  // }

  if(full_window_top / bodyHeight > 0.65) {
    // document.querySelector('.contact-card-bg').style.opacity = aboutOpacityVal2
    // document.querySelector('.am-body-content').style.opacity = aboutOpacityVal2
    // console.log(aboutOpacityVal2)
    // document.querySelector('.about-me-body').style.opacity = aboutOpacityVal2
    document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top)*0.2 + "px, 0)";

  }

  if(backgroundScrollVal > 0.5) {
    // document.querySelector('.contact-card-inner').classList.add('at-bottom')
    // document.querySelector('.contact-section').classList.add('at-bottom')
    // document.querySelector('.contact-card-bg').style.backgroundColor = "#000e13";
    // document.querySelector('.contact-card-bg').style.opacity = 1;
    // document.querySelector('.contact-card-bg').style.transform = "translate3d(0, " + -(window_top)*0.1 + "px, 0)";
    document.querySelector('.lp-bg').style.transform = "translate3d(0, " + (430 -(window_top)*0.1) + "px, 0)";
    document.querySelector('.lp-bg').style.opacity = 1;
    document.querySelector('.contact-card-bg').style.opacity = 1;
    document.querySelector('.contact-card-bg').style.transform = "translate3d(0, " + (430 -(window_top)*0.1) + "px, 0)";
    document.querySelector('.centerpiece-container').style.opacity = 0;
    // document.querySelector('.contact-card-bg').style.boxShadow = "inset 0px 0px 300px 300px rgba(0, 0, 0, 1)";
  }
  else {
    document.querySelector('.lp-bg').style.opacity = 0;
    document.querySelector('.contact-card-bg').style.opacity = 0;
    document.querySelector('.centerpiece-container').style.opacity = 1;
    // document.querySelector('.contact-card-inner').classList.remove('at-bottom')
    // document.querySelector('.contact-section').classList.remove('at-bottom')
    // document.querySelector('.contact-card-bg').style.backgroundColor = "transparent";
    // document.querySelector('.contact-card-bg').style.opacity = 0;
    // document.querySelector('.contact-card-bg').style.boxShadow = "inset 0px 0px 300px 300px rgba(0, 0, 0, 0)";
  }

  if(backgroundScrollVal > 0.9) {
    document.querySelector('.contact-section').classList.add('at-bottom')
    // document.querySelector('.contact-card-inner').style.transform = "translate3d(0, " + -(window_top)*0.3 + "px, 0)";
    // document.querySelector('.lets-talk-container').style.transform = "translate3d(0, " + -(window_top)*0.3 + "px, 0)";
  }
  else {
    document.querySelector('.contact-section').classList.remove('at-bottom')
    // document.querySelector('.contact-card-inner').style.transform = "translate3d(0, " + (window_top)*0.1 + "px, 0)";
    // document.querySelector('.lets-talk-container').style.transform = "translate3d(0, " + (window_top)*0.1 + "px, 0)";
  }


}




{/* <source data-srcset="//cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_180x.jpg?v=1623089544 180w 225h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_360x.jpg?v=1623089544 360w 450h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_540x.jpg?v=1623089544 540w 675h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_720x.jpg?v=1623089544 720w 900h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_900x.jpg?v=1623089544 900w 1125h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1080x.jpg?v=1623089544 1080w 1350h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1296x.jpg?v=1623089544 1296w 1620h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1512x.jpg?v=1623089544 1512w 1890h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid.jpg?v=1623089544 1600w 2000h" sizes="224px" srcset="//cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_180x.jpg?v=1623089544 180w 225h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_360x.jpg?v=1623089544 360w 450h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_540x.jpg?v=1623089544 540w 675h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_720x.jpg?v=1623089544 720w 900h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_900x.jpg?v=1623089544 900w 1125h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1080x.jpg?v=1623089544 1080w 1350h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1296x.jpg?v=1623089544 1296w 1620h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1512x.jpg?v=1623089544 1512w 1890h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid.jpg?v=1623089544 1600w 2000h"></source> */}