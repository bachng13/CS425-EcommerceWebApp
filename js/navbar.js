const slider = () =>{
  const sideMenu = document.querySelector('.sideMenu');
  const nav = document.querySelector('.nav-links');
  
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('active-nav')
  });
}

navSlide();