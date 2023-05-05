const imageFadeTime = 3000; 
const scrollOffset = document.getElementById('container').offsetTop;

const image = document.getElementById('main-img');
const video = document.getElementById('main-video');

image.style.display = 'block';
video.style.display="none"

const viewportHeight = window.innerHeight;

function switchToVideo() {
      image.style.opacity = 0;
      setTimeout(function() {
        image.style.display = "none";
        video.style.display = "flex";
        video.style.clipPath= "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        video.style.transition = "clip-path 3s ease-in-out"
        video.play()
      }, 3000);
    }
    
window.addEventListener("scroll", () => {
  const videoRect = video.getBoundingClientRect();

  // if the top of the video is within the viewport
  if (videoRect.top < viewportHeight) {
    switchToVideo()
  } else {
        image.style.opacity = 1;
        image.style.display = 'flex';
        video.style.display="none"
        video.currentTime = 0;
        video.pause()
  }
});


