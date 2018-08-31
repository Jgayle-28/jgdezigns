//////////////////////////////////
// NAV BAR
//////////////////////////////////

// EVENT LISTENERS FOR STICKY NAV AND LINK HIGHLIGHT
// window.addEventListener('scroll', stickyNav);
// window.onscroll = function() {stickyNav()};
// // window.addEventListener('scroll', linkHighLight);

// //////// STICKY NAV ////////////

// // GET NAV LOCATION
// var nav = document.getElementById('nav');

// // GET OFFSET POSITION OF NAV
// var sticky = nav.offsetTop;

// // ADD STICKY CLSS TO HEADER WHEN YOU REACH POSITION / REMOVE WHEN LEAVE
// function stickyNav () {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }


// }

// $(document).ready(function() {

//   var $window = $(window);
//   // var stickyNavContainer = $('.sticky-nav-container');
//   var nav = $('#nav');
//   var navTop = nav.offset().top;

//   $window.scroll(function() {
//     nav.toggleClass('sticky', $window.scrollTop() > navTop);
//   });
// });

//////////////////////////////////
// PAGE IN AND OUT ANIMATION
//////////////////////////////////
// document.getElementsByClassName('fade-link').addEventListener('click', BodyFadeOut);

// function BodyFadeOut () {
//   var page = document.getElementsByClassName('container');
  
//   if(page.classList.contains('content-fade-out') === true ) {
//     page.classList.remove('content-fade-out');
//   } else {
//     page.classList.add('content-fade-out');
//   }

// }

//////// LINK HIGHLIGHT ON SCROLL ////////////
// function linkHighLight() {
//   'use strict';

//   var section = document.querySelectorAll(".section");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function(e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function() {
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.active').setAttribute('class', 'jg-hero-tab scroll ');
//         document.querySelector('a[href*=' + i + ']').setAttribute('class', ' jg-hero-tab scroll active ');
//       }
//     }
//   };
// }

//////// SMOOTH SCROLL ////////////

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

//////////////////////////////////
// I MAKE TYPING ANIMATION
//////////////////////////////////

var typed = new Typed(".type", {
  strings: [    'Amazing Custom Websites',
  'Word Press Look Good',
  // 'Web Designs That Get Results',
  'Amazing user experiences',
  'Awesome Meatloaf',
  'Brands Have a Revival'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  smartBackspace: true // Default value
});

//////////////////////////////////
// SCROLL REVEAL
//////////////////////////////////
// AOS.init({
//     // duration: 1500,
//   });
