<<<<<<< HEAD
$(document).ready(function(){
=======
// $(document).ready(function(){
>>>>>>> main
// 	$('.carousel__inner').slick({ 
// 		speed: 2000,                                
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/pointer_left.png"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/pointer_right.png"></button>',
// 		responsive: [{
// 			breakpoint: 992,
// 			settings: {
// 				dots: true,
// 				arrows: false
// 			}
// 		},]
// 	}
// 	);
// });
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
// 	slideBy: 'page',
// 	controls: false,
// 	nav: false,
// 	// autoplay: false,
// 	// controlsText: [
// 	// 	'<img src="icons/pointer_left.png">',
// 	// 	'<img src="icons/pointer_right.png">'
// 	// ]
// 	responsive: {
// 		640: {
// 		  edgePadding: 20,
// 		  gutter: 20,
// 		  items: 1
// 		},
// 		700: {
// 		  gutter: 30
// 		},
// 		900: {
// 		  items: 1
// 		}
// 	  }
//   });
//   document.querySelector('.prev').addEventListener('click', function () {
// 	slider.goTo('prev');
//   });
//   document.querySelector('.next').addEventListener('click', function () {
// 	slider.goTo('next');
//   });

<<<<<<< HEAD
    $('.owl-carousel').owlCarousel({
=======
$('.owl-carousel').owlCarousel({
>>>>>>> main
    loop:true,
    margin:10,
	nav:true,
    items:1,
    dots: false,
    navText: [
        '<img src="icons/pointer_left.png">',
		'<img src="icons/pointer_right.png">'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
<<<<<<< HEAD
    })
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
    //         $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');        
    //     })
    // });
    // $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
    //         $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');        
    //     })
    // })
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
                $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');        
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

});
=======
})
$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
  });
>>>>>>> main
