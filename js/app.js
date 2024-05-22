
// how to create a button that when you click on it will take you to the top of the screen

const navbar = document.querySelector(".navbar")

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx > 150) {
      navbar.classList.add("add");
    }else {
      navbar.classList.remove("add");
    }
  });



//text typing animation effect on home page

const div = document.querySelector('.textt');
const textt = 'Welcome to the Bakery';

function textTypingEffect(element, textt, i = 0){
    if (i === 0) {
        element.textContent = '';
    }

    element.textContent += textt[i];

    if (i === textt.length - 1) {
        return;
    }

    setTimeout(() =>  textTypingEffect(element, textt, i + 1), 200);
}

   

textTypingEffect(div, textt);



// js code linked to owl carousel 
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      slideBy: 2,
      margin: 10,
      autoplay: true,
      
  })
})
