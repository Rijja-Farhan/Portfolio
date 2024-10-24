const navToggle = document.querySelector('.nav-image');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function closeNavList() {
    document.querySelector('.nav-links').classList.remove('active');
}


document.querySelector('.close-btn').addEventListener('click', function() {
    closeNavList()
});








document.querySelectorAll('.mobile-options-items').forEach(link => {
    link.addEventListener('click', function(event) {
       
        event.preventDefault();
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        targetSection.scrollIntoView({ behavior: 'smooth' });
        closeNavList();
        
    });
});


function checkScreenSize() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      navLinks.classList.remove('active');
    }
  }
  
  
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();