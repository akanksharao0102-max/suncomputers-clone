// $(".main-menu__list").on('click', 'li', function () {
//   $(".main-menu__list li.active").removeClass("active");
//   $(this).addClass("active");
// });



$(document).ready(function() {
  var currentUrlPath = location.href;

  if (currentUrlPath == '') {
      currentUrlPath = 'https://suncomputers.biz/'; 
  }
  console.log(currentUrlPath)

  $('.main-menu__list li a').each(function() {
      if ($(this).attr('href') == currentUrlPath) {
        // $(this).siblings().removeClass('current');
        $(this).parent().addClass('current').siblings().removeClass('current');
        
      }
  });
})

// jQuery(document).ready(function (){
//   jQuery('.main-menu__list li').click(function () {
    

//     jQuery('.main-menu__list li').removeClass('active');
//     jQuery(this).addClass('active');
//   });
// });


jQuery(window).on('load',function() {
  equalheight('.product-card-tl');
});
jQuery(window).on('resize',function(){
  equalheight('.product-card-tl');
});
// Equal Height Function
equalheight = function(container){
    var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), jQueryel, topPosition = 0;
    jQuery(container).each(function() {
        $el = jQuery(this);
        jQuery($el).height('auto')
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.outerHeight();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}


$(document).ready(function(){
  $('.banner-slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    dragable: true,
    autoplayspeed: 1000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});



jQuery(window).on('load',function() {
    equalheight('.service-card-two__text');
  });
  jQuery(window).on('resize',function(){
    equalheight('.service-card-two__text');
  });
  // Equal Height Function
  equalheight = function(container){
      var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), jQueryel, topPosition = 0;
      jQuery(container).each(function() {
          $el = jQuery(this);
          jQuery($el).height('auto')
          topPostion = $el.position().top;
          if (currentRowStart != topPostion) {
              for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                  rowDivs[currentDiv].height(currentTallest);
              }
              rowDivs.length = 0; // empty the array
              currentRowStart = topPostion;
              currentTallest = $el.outerHeight();
              rowDivs.push($el);
          } else {
              rowDivs.push($el);
              currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
          }
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
      });
  }



  jQuery(window).on('load',function() {
    equalheight('.blog-card__fore__title');
  });
  jQuery(window).on('resize',function(){
    equalheight('.blog-card__fore__title');
  });
  // Equal Height Function
  equalheight = function(container){
      var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), jQueryel, topPosition = 0;
      jQuery(container).each(function() {
          $el = jQuery(this);
          jQuery($el).height('auto')
          topPostion = $el.position().top;
          if (currentRowStart != topPostion) {
              for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                  rowDivs[currentDiv].height(currentTallest);
              }
              rowDivs.length = 0; 
              currentRowStart = topPostion;
              currentTallest = $el.outerHeight();
              rowDivs.push($el);
          } else {
              rowDivs.push($el);
              currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
          }
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
      });
  }



  jQuery(document).ready(function(){
    jQuery('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      fade: true,
    });

    let initial = jQuery('.testimonial-slider .slick-slide[data-slick-index="0"]').attr('data-img');
    jQuery('#current-avatar').attr('src', initial);

    jQuery('.testimonial-slider').on('afterChange', function(event, slick, currentSlide){
      var newImg = jQuery('.testimonial-slider .slick-slide[data-slick-index="' + currentSlide + '"]').attr('data-img');
      jQuery('#current-avatar').attr('src', newImg);
    });
  });




  jQuery(window).on('load',function() {
    equalheight('.service-three__title');
    equalheight('.service-three__list');
  });
  jQuery(window).on('resize',function(){
    equalheight('.service-three__title');
    equalheight('.service-three__list');

  });
  // Equal Height Function
  equalheight = function(container){
      var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), jQueryel, topPosition = 0;
      jQuery(container).each(function() {
          $el = jQuery(this);
          jQuery($el).height('auto')
          topPostion = $el.position().top;
          if (currentRowStart != topPostion) {
              for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                  rowDivs[currentDiv].height(currentTallest);
              }
              rowDivs.length = 0; // empty the array
              currentRowStart = topPostion;
              currentTallest = $el.outerHeight();
              rowDivs.push($el);
          } else {
              rowDivs.push($el);
              currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
          }
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
      });
  }