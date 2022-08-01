var aboutBtn = document.querySelector('#about-btn');
var workBtn = document.querySelector('#work-btn');
var aboutPage = document.querySelector("#about");
var workPage = document.querySelector("#work");

aboutBtn.addEventListener('click', () =>{
  scrollTo(aboutPage);
})
workBtn.addEventListener('click', () =>{
  scrollTo(workPage);
})

function scrollTo(element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

