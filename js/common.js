jQuery(document).ready(function ($) {

	if ($(window).width() < 992) {
		$('.burger').on('click', function () { 
			$(this).toggleClass('burger-active');
			$('.header').toggleClass('header-active-menu');
			$('.header-wrap-menu').slideToggle(200);
		 });
		 $(window).scroll(function() { 
			if ($(window).scrollTop() > 20) {
				$('.up-arr').fadeIn(100);
				$('header').addClass('header-active');
			} else {
				$('.up-arr').fadeOut(100);
				$('header').removeClass('header-active');

			}
		 });

		 $('.sert-wrap').slick({
			dots: false,
			arrows: true,
			infinite: false,
			fade: false,
			speed: 300,
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1
		});

		const slides2 = document.querySelectorAll('.sert-wrap img');


		if (slides2.length > 0 ) {
			const all2 = document.querySelector('.sert .all2'),
						curr2 = document.querySelector('.sert .cur2');

						console.log(all2)
	
			all2.textContent = slides2.length;
	
			$('.sert-wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){
				curr2.textContent = currentSlide + 1;
			});
		}

	} else {
		$(window).scroll(function() { 
			if ($(window).scrollTop() > 520) {
				$('.up-arr').fadeIn(100);
			} else {
				$('.up-arr').fadeOut(100);
			}
		 });
	}
  
	const activities = document.querySelectorAll('.activities-wrap-item b');

	if (activities.length > 0) {
		let num = 1;
		activities.forEach((elem, i) => {
			elem.textContent = num;
			num++;
		});
	}

	const slides = document.querySelectorAll('.slider .projects-wrap-item');

	if (slides.length > 0 ) {
		const all = document.querySelector('.projects .all'),
					curr = document.querySelector('.projects .cur');

		all.textContent = slides.length;

		$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      curr.textContent = currentSlide + 1;
    });
	}

	$('.slider').slick({
		dots: false,
		arrows: true,
		infinite: false,
		fade: true,
		speed: 300,
		lazyLoad: 'progressive',
		slidesToShow: 1,
		slidesToScroll: 1
		/* ,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 578,
				settings: {
					slidesToShow: 1
				}
			}
		] */
	});
  
	$('.callback').on('click', function() {
		$('.overlay').fadeIn(200);
		$('.popup-call').fadeIn(200);
	});
	$('.sert img').on('click', function() {
		$('.overlay').fadeIn(200);
		$('.popup-img').fadeIn(200);
		$('.popup-img img').attr('src', $(this).attr('src'));
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut(200);
		$('.popup').fadeOut(200);
	});
	$('.overlay').on('click', function() {
		$('.overlay').fadeOut(200);
		$('.popup').fadeOut(200);
	});
	$('.popup-img').on('click', function() {
		$('.overlay').fadeOut(200);
		$('.popup-img').fadeOut(200);
	});


	

	 const links = document.querySelectorAll('a');

	if (links) {
		links.forEach((elem) => {
			if (elem.href.indexOf('#') != -1) {
				elem.classList.add('click');
			}
		});
	}

	$(".click").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 00;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});


	

}); //document ready