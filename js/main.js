
//  store brand-slider

$(document).one( "mouseleave", function(e) {
if (e.clientY < 10) {
         $.fancybox.open("#catch");  
    } 
});
  
  $(document).ready(function(){

    $(".fancybox").fancybox();

   
 //кнопка sandwich
  $(".btn_nav").click(function() {
    $(".sandwich").toggleClass("active");
    if ($(".navigation-menu").is(":hidden")) {
      $(".navigation-menu").slideDown(200);
    } else {
      $(".navigation-menu").slideUp(200);
    }
    
  });
  new WOW().init();

  //плавный скролл
  $(".navigation-menu li a").mPageScroll2id({
    offset: 30
  });

  

  if ($(window).width() < 992) { 
       $(".navigation-menu a").click(function() {
      $(".navigation-menu").slideUp(200);
      $(".sandwich").removeClass("active");
    });
      }
    /*высота блока по экрану*/
function heightDetect() {
    $('.navigation-menu').css("height", $(window).height() -$(".header").height() + 40);
  };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });

      $(".btn_top").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 800);
    return false;
  });
    $('.brand-slider').slick({
     
        dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    //asNavFor:'',
    appendDots:$('.dots'),
    
    
    
    responsive: [
    {
      breakpoint: 1200,
      settings: {
slidesToShow: 4,
      }
      
    },
    {
      breakpoint: 768,
      settings: {
slidesToShow: 3,
      }
      
    },
    {
      breakpoint: 480,
      settings: {
slidesToShow: 2,
      }
      
    }
    ]
    
    });
  });
  
//  store our works

  $(document).ready(function(){
    $('.our-works-slick').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    //asNavFor:'',
    appendDots:$('.dots'),

    
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });

// store phone  slider

  $(document).ready(function(){
    $('.phone-slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centerMode: true,
    //asNavFor:'',
    appendDots:$('.dots'),

    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
      
    }]
    
    });
  });

// store-slider

  $(document).ready(function(){
    $('.store-slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
   
    //asNavFor:'',
    appendDots:$('.dots'),
    
    responsive: [{
      breakpoint: 768,
      settings: {}
      
    }]
    
    });
  });

// Store brands slider
  
  $(document).ready(function(){
    $('.store-brands__slider').slick({
     
        dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
   
    //asNavFor:'',
    appendDots:$('.dots'),
    
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
      
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
      
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
      
    }
    ]
    
    });
  });


// Выплывапющий блок

  
	$(".question__name").click(function(e) {
		e.preventDefault();
		$(".answer").removeClass("active");

		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);
		
		} else {
			$(this).parent().removeClass("active");
		$(this).siblings(".question__answer").slideUp(200);
		
		}

    });
    

// tabs

    $(document).ready(function($) {

      $(".input-phone").mask("+7(999) 999-99-99");


      $('.technical-menu a').click(function(e) {
        e.preventDefault();
        $('.technical-menu li').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-pane-technical').removeClass("active");
        var selectTab = $(this).attr("href");
    
        $(selectTab).addClass("active");
      });


      $('.marks-brands a').click(function(e) {
        e.preventDefault();
        $('.marks-brands__item').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-pane').removeClass("active");
        var selectTab2 = $(this).attr("href");
    
        $(selectTab2).addClass("active");
      });

 $('.btn-dropdown_technical').click(function() {
  $('.technical-menu-wrap').addClass("technical-menu-wrap_mob")
        if ($(".technical-menu__item:not('.active')").is(":hidden")) {
            $(".technical-menu__item:not('.active')").slideDown(200);
        } else {
           $(".technical-menu__item:not('.active')").slideUp(200);
        }
          $('.technical-menu-wrap_mob a').click(function() {
   $(".technical-menu__item:not('.active')").slideUp(200);
      });
      });

  $('.btn-dropdown_marks').click(function() {
  $('.marks-brands-wrapper').addClass("marks-brands-wrapper_mob")
        if ($(".marks-brands__item:not('.active')").is(":hidden")) {
            $(".marks-brands__item:not('.active')").slideDown(200);
        } else {
           $(".marks-brands__item:not('.active')").slideUp(200);
        }
          $('.marks-brands-wrapper_mob a').click(function() {
   $(".marks-brands__item:not('.active')").slideUp(200);
      });
      });




      objectFitImages()

    });

    /*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

