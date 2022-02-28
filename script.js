$(function() {
  $(window).scroll(sticktothetop);
  // $(window).scroll(step);
  sticktothetop();
});


makeLandingBg();

function makeLandingBg() {
  const w = 1920;
  const h = 1920;
  const fullWidth = w * 3;
  const fullHeight = h * 2;
  const scene = new THREE.Scene();  
  // scene.background = new THREE.Color( 0xffffff, 1 );
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.01, 10000 ); 
  // camera.setViewOffset( fullWidth, fullHeight, w * 0.7, h * 0.3, fullWidth, fullHeight )


  const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true}); 
  let centerP = document.querySelector('.centerpiece-container')
  renderer.setSize( window.innerWidth, window.innerHeight ); 
  window.addEventListener('resize', () => {
    let resizeVal = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    // renderer.setSize(resizeVal, resizeVal);
    // camera.aspect = resizeVal / resizeVal;


    camera.updateProjectionMatrix();
  })
  document.querySelector('.centerpiece-container').appendChild( renderer.domElement );

  let background = "#000e13"
  // let background = "#ffffff"
  scene.fog = new THREE.Fog(background, 1, 3.05);
  renderer.setClearColor(background, 1);
  renderer.setClearAlpha(0.2)


  const geometry1 = new THREE.IcosahedronBufferGeometry( 1.1, 80 );
  // const geometry2 = new THREE.IcosahedronBufferGeometry( 0.55, 5 );
  // const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
  const material1 = new THREE.MeshLambertMaterial( { color: 0x00babb, wireframe: true, depthTest: true, depthWrite: true } );
  // const material2 = new THREE.MeshLambertMaterial( { color: 0x00babb, wireframe: false, depthTest: true, depthWrite: true} );
  const octa1 = new THREE.Mesh( geometry1, material1 );
  // const octa2 = new THREE.Mesh( geometry2, material2 );
  // octa1.layers.set(1)
  // octa2.layers.set(2)


  const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.4 );
  directionalLight1.position.set(-15, -40, 30)
  // directionalLight1.castShadow = true;

  const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.125 );
  directionalLight2.position.set(40, 60, -5)
  // directionalLight1.castShadow = true;

  const directionalLight3 = new THREE.DirectionalLight( 0xffffff, 0.2 );
  directionalLight3.position.set(40, 20, -45)
  // var light = new THREE.HemisphereLight(0x000e13, 0xFFFFFF, 0.25);


  // scene.add( octa1, octa2, octa3, octa4, octa5, octa6, octa7, directionalLight );
  // scene.add( octa1, directionalLight1, directionalLight2, directionalLight3 );
  // scene.add( octa1, octa2, directionalLight1, directionalLight2 );
  scene.add( octa1, directionalLight1, directionalLight2, directionalLight3 );
  // scene.add( octa1, light );


  camera.layers.enable(1)
  camera.position.z = 1;
  // camera.position.y = .1;

  const render = function () {
      requestAnimationFrame( render );

      octa1.rotation.y += 0.0005;


      // octa1.rotation.z += 0.0005;


      // octa1.rotation.x += 0.0005;


      renderer.render(scene, camera);
  };

  render();
}


createWaveBackground()

function createWaveBackground() {
  let container, stats;
  let camera, scene, renderer;
  let controls, water, sun, mesh;

  // init();
  // animate();

  // function init() {
    var container2 = document.querySelector('.contact-card-bg')

    // container = document.getElementById( 'container' );

    //

    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setClearColor( 0x4e9fe5, 0.5 )
    // renderer.setClearColor( 0x00babb, 0.5 )
    // container.appendChild( renderer.domElement );
    container2.appendChild(renderer.domElement);


    //

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x4e9fe5, 1000, 10000);
    camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 30, 30, 100 );

    //

    // sun = new THREE.Vector3();

    // Water

    const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );

    water = new Water(
      waterGeometry,
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load( '/waternormals.jpg', function ( texture ) {

          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        } ),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x4ed1e5,
        distortionScale: 1,
        fog: scene.fog !== undefined
      }
    );

    water.rotation.x = - Math.PI / 2;

    scene.add( water );

    window.addEventListener( 'resize', onWindowResize );

  // }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }

  function animate() {

    requestAnimationFrame( animate );
    render();

  }

  function render() {
    // requestAnimationFrame( animate );

    const time = performance.now() * 0.001;

    // mesh.position.y = Math.sin( time ) * 20 + 5;
    // mesh.rotation.x = time * 0.5;
    // mesh.rotation.z = time * 0.51;

    water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

    renderer.render( scene, camera );

  }

  // render();
  animate();
}











$(document).ready(function() {
  // console.log("made it this far!")
  // $(window).scrollTop(0)
})

gsap.registerPlugin(ScrollTrigger);


// gsap.from(".ltp", 1, {
//   scrollTrigger: {
//     trigger: ".ltp",
//     toggleActions: "restart none none none"
//   },
//   yPercent: 100,
//   delay: 3,
//   ease: "power3",
//   opacity: 0,
//   // repeat: -1,
//   // repeatDelay: 2,
//   stagger: {
//     amount: 0.1,
//     from: "random"
//   }
// })

// gsap.from(".lts", 1, {
//   scrollTrigger: {
//     trigger: ".lts",
//     toggleActions: "restart none none none"
//   },
//   yPercent: 100,
//   delay: 3,
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
  let moveSideways = (backgroundScrollVal * 100) / 8
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

  // document.querySelector('.grid-bg').style.transform = "translate3d(" + moveSideways + "%, " + -(window_top)*0.4 + "px, 0)";

  // document.querySelector('.centerpiece-container').style.transform = "translate3d(10%, " + -(window_top)*0.5 + "px, 0)";
  // document.querySelector('.centerpiece-container').style.transform = "translate3d(0%, " + -(window_top)*0.65 + "px, 0)";
  // document.querySelector('.centerpiece-background').style.transform = "translate3d(0%, " + -(window_top)*0.65 + "px, 0)";


  let allProjLetters = document.querySelectorAll('.phl');
  let linesDown = document.querySelectorAll('.lines-down')

  // if(backgroundScrollVal > 0.1) {
  //   document.querySelector('.projects-container').classList.add('in-focus')
  //   allProjLetters.forEach((letter) => {
  //     letter.style.transform = "translate3d(0, 0%, 0) rotateY(0deg)";
  //     letter.style.opacity = 1;
  //   })
  //   linesDown.forEach((line) => {
  //     line.style.transform = "scale3d(1, 1, 1)";
  //   })
  // }
  // else {
  //   document.querySelector('.projects-container').classList.remove('in-focus')
  //   allProjLetters.forEach((letter) => {
  //     letter.style.transform = "translate3d(0, 100%, 0) rotateY(80deg)";
  //     letter.style.opacity = 0;
  //   })
  //   linesDown.forEach((line) => {
  //     line.style.transform = "scale3d(1, 0, 1)";
  //   })
  // }

  if(backgroundScrollVal > 0.3) {
    document.querySelector('.grid-bg').style.opacity = 1
  }
  else {
    document.querySelector('.grid-bg').style.opacity = 0
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

  // if(backgroundScrollVal > 0.18) {
  //   document.querySelector('.projects-header').classList.add('move-down')
  // }
  // else if (backgroundScrollVal === 0) {
  //   document.querySelector('.projects-header').classList.remove('move-down')
  // }

  if(backgroundScrollVal < 0.25) {
    // document.querySelector('.lp-bg').style.transform = "translate3d(0, " + -(window_top)*0.1 + "px, 0)";
    // document.querySelector('.contact-card-bg').style.transform = "translate3d(0, " + -(window_top)*0.1 + "px, 0)";

  }

  if(backgroundScrollVal > 0.18 && backgroundScrollVal < 0.7) {
    // document.querySelector('.img-to-move0').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight())*2.1)*0.1 + "px, 0)";
    // document.querySelector('.img-to-move1').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*2.6))*0.1 + "px, 0)";
    // document.querySelector('.img-to-move2').style.transform = "translate3d(0, " + (window_top-($(window).innerHeight()*3.2))*0.1 + "px, 0)";
  }

  if(full_window_top / bodyHeight > 0.65) {
    // document.querySelector('.about-me-body').style.transform = "translate3d(0, " + (window_top)*0.2 + "px, 0)";

  }

  if(backgroundScrollVal > 0.4) {
    // document.querySelector('.lp-bg').style.transform = "translate3d(0, " + (430 -(window_top)*0.1) + "px, 0)";
    // setTimeout(() => {
      document.querySelector('.contact-card-bg').style.opacity = 1;
      // document.querySelector('.contact-card-bg').style.transform = "translate3d(0, " + (430 -(window_top)*0.1) + "px, 0)";
    // }, 1000)
    document.querySelector('.grid-bg').classList.add('reveal')
    // document.querySelector('.grid-bg').classList.remove('hide')
    document.querySelector('.centerpiece-container').style.opacity = 0;
  }
  else {
    // document.querySelector('.lp-bg').style.opacity = 0;
    document.querySelector('.contact-card-bg').style.opacity = 0;
    // document.querySelector('.grid-bg').classList.add('hide')
    // document.querySelector('.grid-bg').classList.remove('reveal')
    document.querySelector('.centerpiece-container').style.opacity = 1;
  }

  if(backgroundScrollVal > 0.5 && backgroundScrollVal < 0.9) {
    document.querySelector('.grid-bg').style.transform = "translate3d(" + moveSideways + "%, " + -(window_top)*0.4 + "px, 0)";
    // document.querySelector('.contact-card-bg').style.transform = "translate3d(0, " + (430 -(window_top)*0.11) + "px, 0)";
  }

  if(backgroundScrollVal > 0.9) {
    document.querySelector('.contact-section').classList.add('at-bottom')
  }
  else {
    document.querySelector('.contact-section').classList.remove('at-bottom')
  }


}




{/* <source data-srcset="//cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_180x.jpg?v=1623089544 180w 225h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_360x.jpg?v=1623089544 360w 450h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_540x.jpg?v=1623089544 540w 675h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_720x.jpg?v=1623089544 720w 900h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_900x.jpg?v=1623089544 900w 1125h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1080x.jpg?v=1623089544 1080w 1350h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1296x.jpg?v=1623089544 1296w 1620h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1512x.jpg?v=1623089544 1512w 1890h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid.jpg?v=1623089544 1600w 2000h" sizes="224px" srcset="//cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_180x.jpg?v=1623089544 180w 225h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_360x.jpg?v=1623089544 360w 450h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_540x.jpg?v=1623089544 540w 675h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_720x.jpg?v=1623089544 720w 900h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_900x.jpg?v=1623089544 900w 1125h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1080x.jpg?v=1623089544 1080w 1350h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1296x.jpg?v=1623089544 1296w 1620h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid_1512x.jpg?v=1623089544 1512w 1890h, //cdn.shopify.com/s/files/1/0074/6989/1654/collections/hunnid.jpg?v=1623089544 1600w 2000h"></source> */}