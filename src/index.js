import "./styles.scss";
console.log("hello world!");

const preventScrollSnapClass = document.querySelector('.prevent-scroll-snap');
const debugInner = document.querySelector('.debug-inner');
const debugInnerOngoing = document.querySelector('.debug-ongoing');

const html = document.querySelector('html');

// you could check to see if it's a touch device and make sure not to do scroll changes in that case, but touch devices should not register any wheel events
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
    //   typically a mouse wheel that's gonna be a problem will have a wheelDelta of mroe than 120 per notch
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
// watch for wheel events - remember trackpads also register wheel events
if (trackPadDetected == 0) {
 document.addEventListener("wheel", detectTrackPad, false);
}

document.addEventListener("wheel", function(e){
    debugInnerOngoing.innerHTML = 'wheelDelta is ' + e.wheelDelta + '<br>' +
        'wheelDeltaY is ' + e.wheelDeltaY + '<br>' +
        'deltaMode is ' + e.deltaMode + '<br>';
})