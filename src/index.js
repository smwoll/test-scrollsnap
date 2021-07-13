import "./styles.scss";
console.log("hello world!");

const preventScrollSnapClass = document.querySelector('.prevent-scroll-snap');
const debugInner = document.querySelector('.debug-inner');
const debugInnerOngoing = document.querySelector('.debug-ongoing');

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
        debugInner.innerHTML = 'wheelDelta is ' + e.wheelDelta + '<br>' +
        'wheelDeltaY is ' + e.wheelDeltaY + '<br>' +
        'deltaMode is ' + e.deltaMode + '<br>';
      
  if (e.wheelDeltaY) {
      console.log('INITIAL:' + e.wheelDeltaY);
    if (e.wheelDeltaY > -120 && e.wheelDeltaY < 120) {
      isTrackpad = true;
    }
  }
  
  console.log('wheelDeltaY:' + e.wheelDeltaY);
  console.log('wheelDelta:' + e.wheelDelta);
  console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");
  trackPadDetected ++;  
  console.log('Detection count: ' + trackPadDetected);

  if (isTrackpad === false) {
      html.classList.add('prevent-scroll-snap')
  }
    }
  
}

if (trackPadDetected == 0) {
 document.addEventListener("wheel", detectTrackPad, false);
}

document.addEventListener("wheel", function(e){
    debugInnerOngoing.innerHTML = 'wheelDelta is ' + e.wheelDelta + '<br>' +
        'wheelDeltaY is ' + e.wheelDeltaY + '<br>' +
        'deltaMode is ' + e.deltaMode + '<br>';
})