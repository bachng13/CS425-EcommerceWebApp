// navigation bar slider menu code
const sideMenu = () => {
  const sideMenu = document.querySelector('.sideMenu');
  const nav = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links li');

  //toggle side menu for mobile
  sideMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinksAnimations 0.5s ease forwards ${index / 7 + 0.5}s`;

      }
    });

    //slider navLinksAnimations
    sideMenu.classList.toggle('toggle');
  });
}


var imgIndex = 0;
showSlideManual(imgIndex);

function nextImg(n) {
  showSlideManual(imgIndex += n);
}

function currentImg(n) {
  showSlideManual(imgIndex = n);
}

function showSlideManual(n) {
  var i;
  var images = document.getElementsByClassName("fadingSlides");
  var dots = document.getElementsByClassName("dots");
  if (n > images.length) {
    imgIndex = 1;
  }
  if (n < 1) {
    imgIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  images[imgIndex - 1].style.display = "block";
  dots[imgIndex - 1].className += " active";
}

var imgIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var imgages = document.getElementsByClassName("fadingSlides");
  for (i = 0; i < imgages.length; i++) {
    imgages[i].style.display = "none";
  }
  imgIndex++;
  if (imgIndex > imgages.length) {imgIndex = 1}
  imgages[imgIndex-1].style.display = "block";
  setTimeout(showSlidesAuto, 5000); // Change image every 5 seconds
} 

const app = () => {
  sideMenu();  
}

app();
