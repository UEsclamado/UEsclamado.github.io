// WINDOW SCROLL
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
     if(scrollTop >= 100) {
         $('body').addClass('fixed-header');
     } else {
         $('body').removeClass('fixed-header');
     }
 });

 // Document Ready
 $(document).ready(function() {
     // Typing animation using Typed.js
     new Typed('#type-it', {
         strings: ['Student'],
         typeSpeed: 100,   // Speed for typing effect
         backSpeed: 250,    // Speed for backspacing effect
         loop: true,       // Enable looping of strings
         showCursor: true, // Cursor visibility
         cursorChar: '|',  // Customize the cursor character
     });

     $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,  // Adjust the number of items per view as needed
            autoplay: true,
            autoplayTimeout: 2000, // Change to desired autoplay interval
            autoplayHoverPause: true
        });
    });    
    
     // ScrollIt - One Page Scroll
     $.scrollIt({
         easing: 'linear',      // Easing function for smooth scrolling
         topOffset: -70         // Offset for fixed navigation
     });

     window.addEventListener('load', function() {
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
            window.location.href = 'index.html';  
        }
    });
    
    // script2.js
document.documentElement.style.setProperty('--preloader-text', 'Your New Text');


  // Select all the certificate images
  const certImages = document.querySelectorAll('.cert-img');
  const modalCertImg = document.getElementById('modalCertImg');

  // Add event listeners to each certificate image
  certImages.forEach(cert => {
    cert.addEventListener('click', function() {
      // Set the modal image source to the clicked certificate's image source
      const certSrc = cert.getAttribute('src');
      modalCertImg.setAttribute('src', certSrc);
    });
  });

// Get the modal
var modal = document.getElementById("lightbox-modal");

// Get the image and insert it inside the modal
var lightboxImg = document.getElementById("lightbox-image");
var images = document.querySelectorAll('.clickable-img');

images.forEach(img => {
    img.onclick = function(){
        modal.style.display = "flex";
        modal.classList.add("active");  // Add active class to apply shadow
        lightboxImg.src = this.src;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("lightbox-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
    modal.classList.remove("active"); // Remove active class to clear shadow
}

// When the user clicks outside the modal image, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.classList.remove("active"); // Ensure shadow is removed on close
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const fadeInSection = document.querySelector('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.2 });

    observer.observe(fadeInSection);
  });

  window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const scrollPosition = window.scrollY;

    // Apply splash effect when user scrolls down
    if (scrollPosition > 100) {  // Adjust this value as needed
      contactSection.classList.add('splash');

      // Remove the splash class after the animation completes (2s)
      setTimeout(() => {
        contactSection.classList.remove('splash');
      }, 2000); // Match this time with the CSS animation duration
    }
  });

  // new code sa js 
  window.addEventListener('scroll', function () {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar) => {
      const skillLevel = bar.getAttribute('data-skill');
      bar.style.width = skillLevel;
    });
  });

  

 });
