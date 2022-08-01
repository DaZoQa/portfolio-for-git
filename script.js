var homeBtn        = document.querySelector('#home-btn');
var aboutBtn       = document.querySelector('#about-btn');
var workBtn        = document.querySelector('#work-btn');
var contactBtn     = document.querySelector('#contact-btn');
var footHomeBtn    = document.querySelector('#foot-home-btn')
var footAboutBtn   = document.querySelector('#foot-about-btn');
var footWorkBtn    = document.querySelector('#foot-work-btn');
var footContactBtn = document.querySelector('#foot-contact-btn');
var homePage       = document.querySelector('#home');
var aboutPage      = document.querySelector("#about");
var workPage       = document.querySelector("#work");
var contactPage    = document.querySelector("#contact");

homeBtn.addEventListener('click', () =>{
  scrollTo(homePage);
})
aboutBtn.addEventListener('click', () =>{
  scrollTo(aboutPage);
})
workBtn.addEventListener('click', () =>{
  scrollTo(workPage);
})
contactBtn.addEventListener('click', () =>{
  scrollTo(contactPage);
})
footHomeBtn.addEventListener('click', () =>{
  scrollTo(homePage);
})
footAboutBtn.addEventListener('click', () =>{
  scrollTo(aboutPage);
})
footWorkBtn.addEventListener('click', () =>{
  scrollTo(workPage);
})
footContactBtn.addEventListener('click', () =>{
  scrollTo(contactPage);
})

function scrollTo(element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

