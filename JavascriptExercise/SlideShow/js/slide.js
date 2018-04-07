var slideIndex = 0;
showSlides();
initThumbnails();
function initThumbnails() {
    var slides = document.getElementsByClassName("mySlides");
    var thumbs = document.getElementsByClassName("thumb");
    var slide_len = slides.length;
    for(i=0;i<slide_len;i++){
        var txt = "";
        txt+='<img src="' + slides[i].childNodes[3].getAttribute('src') + '">';
        thumbs[i].innerHTML = txt;
    }

}
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var thumbs = document.getElementsByClassName('thumb');
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       thumbs[i].style.border = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbs[slideIndex-1].style.border = "5px solid blue";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}
var plusSlideIndex = function(n){
    slideIndex += n;
}