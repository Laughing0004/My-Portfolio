document.addEventListener('DOMContentLoaded', () => {
// ---  ACCESS OF PARALLAX PAGE 
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


// --- SCRIPT OF PARALLAX PAGE
window.addEventListener(`scroll`, () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';
  hill1.style.top = value * 1 + 'px';
});


// ---  ACCESS OF PAGE AFTER PARALLAX PAGE
// Hamburger menu functionality
 const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
 const smallMenu = document.querySelector('.header__sm-menu');
 const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
 const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
 const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link a');

 if (hamMenuBtn) {
   hamMenuBtn.addEventListener('click', () => {
     smallMenu.classList.toggle('header__sm-menu--active');
     headerHamMenuBtn.classList.toggle('d-none');
     headerHamMenuCloseBtn.classList.toggle('d-none');
   });
 }

 headerSmallMenuLinks.forEach(link => {
   link.addEventListener('click', () => {
     smallMenu.classList.remove('header__sm-menu--active');
     headerHamMenuBtn.classList.remove('d-none');
     headerHamMenuCloseBtn.classList.add('d-none');
   });
 });

 // Redirect logo to homepage
 const headerLogoContainer = document.querySelector('.header__logo-container');

 if (headerLogoContainer) {
   headerLogoContainer.addEventListener('click', () => {
     location.href = 'index.html';
   });
 }
});

// SKILLS WHEN CLICK GOES ON LINK GIVEN
document.addEventListener('DOMContentLoaded', () => {
  const skillElements = document.querySelectorAll('.skills__skill');
  
  skillElements.forEach(skill => {
    skill.addEventListener('click', () => {
      const url = skill.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
});


/*
// EDUCATION AREA SCRIPT
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

*/
