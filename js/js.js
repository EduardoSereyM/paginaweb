console.log('hola')


let btn = document.getElementsByClassName("go-up")[0];

btn.addEventListener("click", () => {
  window.scrollTo(0, 0)
});
