'use strict';

(function () {
  var noticeSlider = $('.notice__slider');
    noticeSlider.slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }]   
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {     
      var number = nextSlide;      
      var section = document.querySelector('[data-slick-index=\"' + nextSlide + '\"]');      
      
      var activeButton = document.getElementById('slick-slide-control0' + nextSlide);    
      var dots = activeButton.parentElement.parentElement;  
      dots.setAttribute('data-color', 'green');
      
      if (section.classList.contains('notice__slide--green')) {        
        activeButton.classList.add('dot--green');    
        dots.setAttribute('data-color', 'green');
       
      } else if(section.classList.contains('notice__slide--blue')) {   
        activeButton.classList.add('dot--blue'); 
        dots.setAttribute('data-color', 'blue');       
               
      } else {        
        activeButton.classList.add('dot--pink'); 
        dots.setAttribute('data-color', 'pink');      
      }          
    
    });   

})();
