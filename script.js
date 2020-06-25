// $(document).ready(function() {
//   console.log("made it this far!")

//   for(i = 0; i < 100; i++) {
//     let box = document.createElement("div");
//     box.classList.add("box", "b" + i)
//     document.querySelector('.bg-boxes').appendChild(box)
//   }

//   let allBoxes = document.querySelectorAll('.box');
//   allBoxes.forEach(eachBox => {
//     let randX = Math.floor(Math.random() * 401) - 200;
//     let randY = Math.floor(Math.random() * 1000) + 1;
//     let randZ = Math.floor(Math.random() * 500) + 1;

//     eachBox.style.transform = "translate3d(" + randX + "%, " + randY + "%, " + randZ + "px)";
//   })
// })


let ani = document.querySelector('.animation-container');
let aniRects = ani.getBoundingClientRect();
let aniX = aniRects.left + aniRects.width / 2;
let aniY = aniRects.top + aniRects.height / 2;

addEventListener("mousemove", (e) => {
  ani.style.transform = "rotateY(" + (e.clientX - aniX)*0.01 + "deg) rotateX(" + -(e.clientY - aniY)*0.01 + "deg)";
  // console.log(e.clientX - aniX, e.clientY - aniY)
})

$(function() {
  animationTiming();
});

function animationTiming() {
  setTimeout(() => animateDots("expand"), 2000);
  setTimeout(() => animateDots("collapse"), 6000);
  setTimeout(() => animateDots("pattern1"), 8000);
  setTimeout(() => animateDots("collapse"), 14000);
  setTimeout(() => animateDots("expand"), 16000);
  setTimeout(() => animateDots("collapse"), 20000);
  setTimeout(() => animateDots("pattern2"), 22000);
  setTimeout(() => animateDots("collapse"), 28000);
  setTimeout(() => animateDots("expand"), 30000);
  setTimeout(() => animateDots("collapse"), 34000);
  setTimeout(() => animateDots("pattern3"), 36000);
  setTimeout(() => animateDots("collapse"), 42000);
  setTimeout(() => animateDots("expand"), 44000);
  setTimeout(() => animationTiming(), 48000);
}

let documentHeight = document.querySelector('html').offsetHeight * 0.4;
let documentWidth = document.querySelector('html').offsetWidth * 0.4;

dotMovement = {
  transitionScene: [
    "translate3d(-450%, -450%, 0px)",
    "translate3d(-150%, -600%, 0px)",
    "translate3d(150%, -600%, 0px)",
    "translate3d(450%, -450%, 0px)",
    "translate3d(600%, -150%, 0px)",
    "translate3d(600%, 150%, 0px)",
    "translate3d(450%, 450%, 0px)",
    "translate3d(150%, 600%, 0px)",
    "translate3d(-150%, 600%, 0px)",
    "translate3d(-450%, 450%, 0px)",
    "translate3d(-600%, -150%, 0px)",
    "translate3d(-600%, 150%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)",
    "translate3d(0%, 0%, 0px)"
  ],
  pattern1: [
    "translate3d(-400%, -400%, 0px)",
    "translate3d(400%, -400%, 0px)",
    "translate3d(400%, 400%, 0px)",
    "translate3d(-400%, 400%, 0px)",
    "translate3d(0%, -80%, 0px)",
    "translate3d(-80%, 0%, 0px)",
    "translate3d(80%, 0%, 0px)",
    "translate3d(345%, -360%, 0px)",
    "translate3d(295%, -360%, 0px)",
    "translate3d(-335%, -360%, 0px)",
    "translate3d(-335%, -360%, 0px)",
    "translate3d(-335%, -360%, 0px)",
    "translate3d(-335%, -360%, 0px)",
    "translate3d(-335%, -360%, 0px)"
  ],
  pattern2: [
    "translate3d(-400%, -400%, 0px)",
    "translate3d(400%, -400%, 0px)",
    "translate3d(400%, 400%, 0px)",
    "translate3d(-400%, 400%, 0px)",
    "translate3d(0%, -370%, 0px)",
    "translate3d(0%, -130%, 0px)",
    "translate3d(-240%, 160%, 0px)",
    "translate3d(0%, 160%, 0px)",
    "translate3d(240%, 160%, 0px)",
    "translate3d(-240%, 320%, 0px)",
    "translate3d(0%, 320%, 0px)",
    "translate3d(240%, 320%, 0px)",
    "translate3d(240%, 320%, 0px)",
    "translate3d(240%, 320%, 0px)"
  ],
  pattern3: [
    "translate3d(-400%, -400%, 0px)",
    "translate3d(400%, -400%, 0px)",
    "translate3d(400%, 400%, 0px)",
    "translate3d(-400%, 400%, 0px)",
    "translate3d(0%, -360%, 0px)",
    "translate3d(-140%, -240%, 0px)",
    "translate3d(60%, -240%, 0px)",
    "translate3d(260%, -240%, 0px)",
    "translate3d(-140%, -40%, 0px)",
    "translate3d(60%, -40%, 0px)",
    "translate3d(260%, -40%, 0px)",
    "translate3d(-140%, 200%, 0px)",
    "translate3d(60%, 200%, 0px)",
    "translate3d(260%, 200%, 0px)"
  ]
}

let squareMovement = {
  pattern1: [
    "translate3d(0%, 0%, -50px) scale3d(1, 1, 1)",
    "translate3d(0%, -10%, 50px) scale3d(0.5, 0.07, 1)",
    "translate3d(-10%, 0%, 50px) scale3d(0.15, 0.05, 1)",
    "translate3d(10%, 0%, 50px) scale3d(0.15, 0.05, 1)",
    "translate3d(43%, -45%, 50px) scale3d(0.05, 0.03, 1)",
    "translate3d(37%, -45%, 50px) scale3d(0.05, 0.03, 1)",
    "translate3d(-42%, -45%, 50px) scale3d(0.05, 0.03, 1)"
  ],
  pattern2: [
    "translate3d(0%, 0%, -50px) scale3d(1, 1, 1)",
    "translate3d(0%, -46%, 50px) scale3d(1, 0.07, 1)",
    "translate3d(0%, -17%, 25px) scale3d(1, 0.5, 1)",
    "translate3d(-30%, 20%, 50px) scale3d(0.25, 0.15, 1)",
    "translate3d(0%, 20%, 50px) scale3d(0.25, 0.15, 1)",
    "translate3d(30%, 20%, 50px) scale3d(0.25, 0.15, 1)",
    "translate3d(-30%, 40%, 50px) scale3d(0.25, 0.15, 1)",
    "translate3d(0%, 40%, 50px) scale3d(0.25, 0.15, 1)",
    "translate3d(30%, 40%, 50px) scale3d(0.25, 0.15, 1)"
  ],
  pattern3: [
    "translate3d(0%, 0%, -50px) scale3d(1, 1, 1)",
    "translate3d(0%, -45%, 25px) scale3d(1, 0.1, 1)",
    "translate3d(0%, -45%, 50px) scale3d(.3, 0.05, 1)",
    "translate3d(-42.5%, 5%, 25px) scale3d(0.15, 0.9, 1)",
    "translate3d(-18%, -30%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(7%, -30%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(32%, -30%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(-18%, -5%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(7%, -5%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(32%, -5%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(-18%, 25%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(7%, 25%, 50px) scale3d(0.2, 0.12, 1)",
    "translate3d(32%, 25%, 50px) scale3d(0.2, 0.12, 1)"
  ]
}

function moveSquares(pattern, square, whichSquare) {
  square.style.transform = squareMovement[pattern][whichSquare]
  setTimeout(() => {
    square.style.opacity = "1"
  }, 500)
}

function animateDots(animation) {
  let dots = document.querySelectorAll('.dot');
  let squares = document.querySelectorAll('.square');

  switch(animation) {
    case "expand":
      document.querySelector('.dot-container').style.animation = "ambient-rotation 10s linear infinite";
      dots.forEach((eachDot, dotIndex) => {
        if(dotIndex <= 11) {
          setTimeout(() => eachDot.style.transform = dotMovement.transitionScene[dotIndex], 500)
          eachDot.style.transform = dotMovement.transitionScene[dotIndex]
        }
        else {
          eachDot.style.opacity = 0;
        }
      });
      break;
    case "collapse":
      dots.forEach((eachDot, dotIndex) => {
        setTimeout(() => eachDot.style.transform = "translate3d(0%, 0%, 0px)", 500)
      })
      squares.forEach((eachSquare, squareIndex) => {
        setTimeout(() => {
          eachSquare.style.transform = "translate3d(0%, 0%, 0px) scale3d(0, 0, 1)";
          eachSquare.style.opacity = 0;
        }, 500)
      })
      break;
    case "pattern1":
      document.querySelector('.dot-container').style.animation = "unset";
      dots.forEach((eachDot, dotIndex) => {
        setTimeout(() => eachDot.style.transform = dotMovement.pattern1[dotIndex], 500)
      });
      squares.forEach((eachSquare, squareIndex) => {
        moveSquares("pattern1", eachSquare, squareIndex)
      })
      break;
    case "pattern2":
      document.querySelector('.dot-container').style.animation = "unset";
      dots.forEach((eachDot, dotIndex) => {
        setTimeout(() => eachDot.style.transform = dotMovement.pattern2[dotIndex], 500)
      });
      squares.forEach((eachSquare, squareIndex) => {
        moveSquares("pattern2", eachSquare, squareIndex)
      })
      break;
    case "pattern3":
      document.querySelector('.dot-container').style.animation = "unset";
      dots.forEach((eachDot, dotIndex) => {
        eachDot.style.opacity = 1;
        setTimeout(() => eachDot.style.transform = dotMovement.pattern3[dotIndex], 500)
      });
      squares.forEach((eachSquare, squareIndex) => {
        moveSquares("pattern3", eachSquare, squareIndex)
      })
      break;
    default:
      document.querySelector('.dot-container').style.animation = "ambient-rotation 10s linear infinite";
      dots.forEach((eachDot, dotIndex) => {
        setTimeout(() => eachDot.style.transform = dotMovement.transitionScene[dotIndex], 500)
      });
  }
}