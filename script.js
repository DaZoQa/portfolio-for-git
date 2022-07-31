function scrollTo(element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var aboutBtn = document.querySelector('#about-btn');
var aboutPage = document.querySelector("#about");

aboutBtn.addEventListener('click', () =>{
  scrollTo(aboutPage);
})