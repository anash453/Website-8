let menuList = document.getElementById("menuList")
    menuList.style.maxHeight = "0px";

    function toggleMenu(){
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "300px";
        }
        else{
            menuList.style.maxHeight = "0px";
        }
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
const headerBoxes = document.querySelectorAll('.header-box');

headerBoxes.forEach((box) => {
  box.addEventListener('mouseenter', () => {
    box.style.backgroundPosition = 'center bottom'; 
  });
  box.addEventListener('mouseleave', () => {
    box.style.backgroundPosition = 'center top';
  });
});

            