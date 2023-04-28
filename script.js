const imageFadeTime = 3000; 
const scrollOffset = document.getElementById('container').offsetTop;

const image = document.getElementById('main-img');
const video = document.getElementById('main-video');

image.style.display = 'block';
video.style.display="none"


setTimeout(function() {
    image.style.opacity = '0';
  }, imageFadeTime);
   

  image.addEventListener('transitionend', function() {
    image.style.display = 'none';
    video.style.display = 'block';
  });

 
