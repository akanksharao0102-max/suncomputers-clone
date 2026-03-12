   $(document).ready(function () {
      $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
      });

      $('.prev').on('click', function () {
        $('.testimonial-slider').slick('slickPrev');
      });

      $('.next').on('click', function () {
        $('.testimonial-slider').slick('slickNext');
      });
    });

  $(document).ready(function () {
    $('.slick-client-logo-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        infinite: true,
        responsive: [
          {
            breakpoint:1240,
            settings: {
              slidesToShow: 5,
            }
          },  
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
            }
          },
          
        ]
       
    });

    $('.slick-client-logo-2').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        infinite: true,
        rtl: true,
        variableWidth: true,
        // responsive: [
        //   {
        //     breakpoint: 1140,
        //     settings: {
        //       slidesToShow: 6,
        //     }
        //   },
        //   {
        //     breakpoint: 991,
        //     settings: {
        //       slidesToShow: 5,
        //     }
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 4,
        //     }
        //   },
        //   {
        //     breakpoint: 470,
        //     settings: {
        //       slidesToShow: 3,
        //     }
        //   },
        //   {
        //     breakpoint: 375,
        //     settings: {
        //       slidesToShow: 2,
        //     }
        //   }
        // ]
    });
});

jQuery(document).ready(function ($) {
  function initSlick() {
      if ($(window).width() <= 767) {
          if (!$('.use-case-inner').hasClass('slick-initialized')) {
              $('.use-case-inner').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
              });
          }
      } else {
          if ($('.use-case-inner').hasClass('slick-initialized')) {
              $('.use-case-inner').slick('unslick');
          }
      }
  }

  initSlick(); // Run on page load
  $(window).on('resize', function () {
      initSlick(); // Run on resize
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".hostom-btn.one"); // the Learn more button
  const servicesRow = document.querySelector(".home-services-inner"); // the grid row
  if (!btn || !servicesRow) return;

  // remember original parent & position
  const originalParent = btn.parentNode;
  const originalNext = btn.nextSibling;
  let moved = false;

  function moveBtn() {
    if (window.innerWidth <= 991 && !moved) {
      // move button after the services row
      servicesRow.insertAdjacentElement("afterend", btn);
      moved = true;
    } else if (window.innerWidth > 991 && moved) {
      // move button back to original place
      originalParent.insertBefore(btn, originalNext);
      moved = false;
    }
  }

  // run on load + resize
  moveBtn();
  window.addEventListener("resize", moveBtn);
});


// Blog Active Class
jQuery(document).ready(function($) {

    // Remove default active class added by theme
    $('.service-sidebar__nav li, .service-sidebar__nav a').removeClass('current current-link');

    // Get the current slug from URL
    var currentSlug = window.location.pathname.split('/').filter(Boolean).pop();

    // Fallback for local URLs using ?service=slug
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('service')) {
        currentSlug = urlParams.get('service');
    }

    // Loop through menu links
    $('.service-sidebar__nav a').each(function() {

        // Extract slug from each link
        var linkSlug = $(this).attr('href')
            .split('/')
            .filter(Boolean)
            .pop();

        if (linkSlug === currentSlug) {
            $(this).closest('li').addClass('current');
            $(this).addClass('current-link');
        }
    });

});




// Header child menu
$('.main-menu__list .menu-item-has-children > a ').after('<div class="childTrigger"></div>');

$(document).on("click", ".childTrigger", function (e) {
  e.preventDefault();

  const $parent = $(this).closest(".menu-item-has-children");
  const $submenu = $parent.children(".sub-menu");

  // Close other open submenus
  $(".menu-item-has-children").not($parent).removeClass("child-open").children(".sub-menu").slideUp(300);

  // Toggle this submenu
  $parent.toggleClass("child-open");
  $submenu.stop(true, true).slideToggle(300);
});