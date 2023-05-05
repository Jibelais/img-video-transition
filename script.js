const imageFadeTime = 3000; 
const scrollOffset = document.getElementById('container').offsetTop;

const image = document.getElementById('main-img');
const video = document.getElementById('main-video');

image.style.display = 'block';
video.style.display="none"

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
   
function switchToVideo() {
    image.style.opacity = 0;
    setTimeout(function() {
      image.style.display = "none";
      video.style.display = "flex";
      //video.style.transition = "width 3s ease-out"
      video.style.clipPath= "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      video.currentTime = 0;
      video.play();
    }, 3000);
  }
  window.addEventListener("scroll", function() {
    if (isInView(image)) {
      this.switchToVideo();
    } 
    if (!isInView(video)){
        image.style.opacity = 1;
        image.style.display = 'flex';
        video.style.display="none"
        video.pause()
    }
  });
