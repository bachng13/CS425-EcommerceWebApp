const slider = () => {
  const sideMenu = document.querySelector('.sideMenu');
  const nav = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links li');

  //toggle side menu for mobile
  sideMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      }
      else{
        link.style.animation = `navLinksAnimations 0.5s ease forwards ${index / 7 + 0.5}s`;
        
      }
    });

    //slider navLinksAnimations
    sideMenu.classList.toggle('toggle');
  });



}

const app = () => {
  slider();

}

app();