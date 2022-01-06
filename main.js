var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides,2500);
}
function destiny(){
  alert("Choose Wisely. Your Fate Depends On It")
}
function dark(){
  var element = document.body;
  element.classList.toggle("dark-mode")
}
function loop(){
  for(i=0; i<50; i+=1){
    console.log('its working')
  }
}