import "./styles.scss";
console.log("hello world!");

const preventScrollSnapClass = document.querySelector('.prevent-scroll-snap');

const html = document.querySelector('html');
// let touchCount = 0;

// if (touchCount == 0) {
//   window.addEventListener("touchstart", function(event){
//       event.preventDefault;
//       console.log("touchstart is " + touchCount)
//     touchCount ++;
//     html.classList.add('touch')
// }, false)  
// }

var isTrackpad = false;

let trackPadDetected = 0;
// detect trackpad
function detectTrackPad(e) {
    var isTrackpad = false;
    if (trackPadDetected == 0) {
      
  if (e.wheelDeltaY) {
    if (e.wheelDeltaY < 120) {
      isTrackpad = true;
    }
  }
//   else if (e.deltaMode === 0) {
//     isTrackpad = true;
//   }
  console.log('wheelDeltaY:' + e.wheelDeltaY);
  console.log('wheelDelta:' + e.wheelDelta);
  console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");
  trackPadDetected ++;  

  if (isTrackpad === false) {
      html.classList.add('prevent-scroll-snap')
  }
    }
  
}

if (trackPadDetected == 0) {
 document.addEventListener("wheel", detectTrackPad, false);
}

document.addEventListener("wheel", function(e){
    console.log(e.wheelDelta);
})

// if (!preventScrollSnapClass && touchCount == 0 && isTrackpad === false) {
//     html.addEventListener('wheel',function(event){
//     html.classList.add('prevent-scroll-snap')
// }, false);
// }
