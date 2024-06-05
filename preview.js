// const video = document.querySelector("video");

// function startPreview() {
  // video.muted = true;
//   video.currentTime = 1;
//   video.playbackRate = 1;
//   video.play();
// }

// function stopPreview() {
//   video.currentTime = 0;
//   video.playbackRate = 1;
//   video.pause();
// }

// let previewTimeout = null;

// video.addEventListener("mouseenter", () => {
//   startPreview();
//   previewTimeout = setTimeout(stopPreview, 4000);
// });

// video.addEventListener("mouseleave", () => {
//   clearTimeout(previewTimeout);
//   previewTimeout = null;
//   stopPreview();
// });

document.querySelectorAll('.videoPreview').forEach(function(vid) {
  vid.onmouseover = function() {
    this.muted = true;
    this.play();
  }
  vid.onmouseout = function() {
    this.load(); // stop and show poster
  }
})