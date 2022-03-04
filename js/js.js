

let btn = document.getElementsByClassName("go-up")[0];

btn.addEventListener("click", () => {
  window.scrollTo(0, 0)
});


document.getElementsByClassName("menu-btn")[0].addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('show')
});


document.getElementsByClassName("li")[0].addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('show')
});


document.getElementById("li").addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('show')
});


document.querySelectorAll("li").forEach(element =>{
  element.addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('show');
  })
});


ScrollReveal().reveal('.home',{delay:500});
ScrollReveal().reveal('.about',{delay:500});
ScrollReveal().reveal('.service',{delay:500});
ScrollReveal().reveal('.portfolio',{delay:500});
ScrollReveal().reveal('contactme',{delay:500});
ScrollReveal().reveal('footer',{delay:500});
