(function ($) {
"use strict";  
    
/*------------------------------------
	Sticky Menu 
--------------------------------------*/
    var windows = $(window);
    var stick = $(".header-sticky");
    windows.on('scroll',function() {    
        var scroll = windows.scrollTop();
        if (scroll < 10) {
            stick.removeClass("sticky");
        }else{
            stick.addClass("sticky");
        }
    });  
    
/*------------------------------------
	Toggle Menu 
--------------------------------------*/  
    var menuOpenBtn = $('.show-submenu');
    var menuCloseBtn = $('.close-btn');
    var sidebarMenu = $('.menu-bar-open');
    menuOpenBtn.on('click', function(){
        sidebarMenu.css('right', '0px');
    });
    menuCloseBtn.on('click', function(){
        sidebarMenu.css('right', '-200%');
    });
    
/*------------------------------------
	jQuery MeanMenu 
--------------------------------------*/
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: '.mobile-menu'
	});
    
    /* last  2 li child add class */
    $('ul.menu > li').slice(-2).addClass('last-elements');
     
/*------------------------------------
	Magnificent Popup
--------------------------------------*/
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
/*------------------------------------
	Owl Carousel
--------------------------------------*/
    $('.slider-owl').owlCarousel({
        loop:true,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        responsive:{
            0:{
                items:1,
                autoplay: true
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".testimonial-owl").owlCarousel({
        loop:true,
        smartSpeed: 2500,
        items:1,
        dots: true,
		nav:false,
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
    });

    $('.related-owl').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }); 
	  
/*--------------------------
 Elevatezoom 
---------------------------- */	
    $("#zoom1").elevateZoom({
        gallery:'gallery_01',
        responsive : true, 
        galleryActiveClass: "active", 
        imageCrossfade: true,
        easing : true,
        cursor: "default",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });
    
/*------------------------------------
	Nicescroll
--------------------------------------*/
    $('body').scrollspy({ 
            target: '.navbar-collapse',
            offset: 95
        });
    $(".blog-right").niceScroll({
        cursorcolor: "#E2DD00",
        cursorborder: "0px solid #fff",
        autohidemode: false,
        railalign: "left",
        background: "#E7E7E7",
    });
    
/*------------------------------------
	Scrollup
--------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
      
/*--------------------------
    Counter Up
---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });
    
/*----------------------------
    Wow js active
------------------------------ */
    new WOW().init();
    
    
    
    /*--- showlogin toggle function ----*/
    
    $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
    }); 
    
    /*--- showlogin toggle function ----*/
    $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
    });
    
    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });
    
    
    
/*----------------------------
    Input Plus Minus Button
------------------------------ */ 
    $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="fa fa-caret-down"></i></div><div class="inc qtybutton"><i class="fa fa-caret-up"></i></div>');
	    $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
        }
        }
		$button.parent().find("input").val(newVal);
    });
           



})(jQuery);	