"use strict";
//preloader
if (document.querySelector('#loader-wrapper')) {
  setTimeout(function () {
    document.querySelector('body').classList.add('loaded');
  }, 1100);
}

(function () {
  // Global variables
  var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),

    $document = $(document),
    $window = $(window),
    $html = $("html"),
    $body = $("body"),

    isDesktop = $html.hasClass("desktop"),
    isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    windowReady = false,
    isNoviBuilder = false,

    plugins = {
      rdNavbar: $(".rd-navbar"),
      wow: $(".wow"),
      multitoggle: document.querySelectorAll( '[data-multitoggle]' ),
      swiper: document.querySelectorAll( '.swiper-container' ),
      vide: $(".vide_bg"),
      buttonWinona: $('.button-winona'),
      customCarousel: document.querySelectorAll( '.circle-carousel' ),
      isotope: $(".isotope"),
      policy: $(".js-policy"),
      lightGallery: $("[data-lightgallery='group']"),
      lightGalleryItem: $("[data-lightgallery='item']"),
      lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
      slick: $(".slick-slider"),
      inputMask: $(".form__phone"),
      formSlider: $(".form-slider"),
      customWaypoints: $('[data-custom-scroll-to]'),
      bootstrapCollapse: $(".card-custom"),
    };

  $window.on('load', function () {


    // Multitoggles
    if(plugins.multitoggle.length) {
      multitoggles();
    }

  });

  $(function () {
    isNoviBuilder = window.xMode;

    // tanks
    var thanks = document.querySelector('.thanks');
    if (thanks) {
      $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        //console.log($(document).height());
        //console.log($(document).height() - $(window).height());
        //console.log(scroll);
        //$(window).scrollTop() + $('body').height() >= ($(document).height() - 100
        if (scroll == $(document).height() - $(window).height()) {
          $('.thanks').addClass('thanks--visible').stop();
          setTimeout(function () {
            $('.thanks').removeClass('thanks--visible').stop();
          }, 5000);
        } else {
          $('.thanks').removeClass('thanks--visible').stop();
        }
      });
    }

    /**
     * year copyright
     */
    var now = new Date();
    var getYear = now.getFullYear();
    var elCopyrightYear = document.getElementById('year-footer');
    if (elCopyrightYear) {
      elCopyrightYear.innerHTML = getYear;
    }


    /**
     * Custom Waypoints
     */
    if (plugins.customWaypoints.length) {
      var i;
      for (i = 0; i < plugins.customWaypoints.length; i++) {
        var $this = $(plugins.customWaypoints[i]);

        $this.on('click', function (e) {
          e.preventDefault();
          $("body, html").stop().animate({
            scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
          }, 1000, function () {
            $(window).trigger("resize");
          });
        });
      }
    }

    /*input mask*/
    if (plugins.inputMask.length) {
      for (var i = 0; i < plugins.inputMask.length; i++) {
        var inputMaskItem = $(plugins.inputMask[i]);
        inputMaskItem.inputmask("+7 (999) 999-99-99")
      }
    }

    /*validate form-contact*/
    $('.form-contact').validate({
      submitHandler: function(form){
        //var form = document.forms.formContact,
        var formData = new FormData($('.form-contact')[0]),
          xhr = new XMLHttpRequest();

        xhr.open("POST", "/send-main.php");

        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if(xhr.status == 200) {

              var contactLoader = document.querySelector('.contact-form__loader-wrapper');
              contactLoader.style.visibility = 'visible';
              contactLoader.style.opacity = '1';
              $('.form-contact')[0].reset();
              $('.upload-text-reset').text('Прикрепить файл');
              setTimeout(function () {
                contactLoader.style.visibility = 'hidden';
                contactLoader.style.opacity = '0';
              }, 3000);
              //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Заявка успешно отправлена!<div>');
            } else {
              //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Что то пошло не так!<div>');
            }
          }
        };
        xhr.send(formData);
      },
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        }

      },
      messages: {
        name: {
          required: "Введите Ваше имя"
        },
        email: {
          required: "Введите адрес электронной почты",
          email: "Не корректный адрес"
        },
        phone: {
          required: "Введите Ваш телефон"
        }
      }
    });

    /*validate form-popup*/
    $('.form-popup').validate({
      submitHandler: function(form){
        //var form = document.forms.formContact,
        var formData = new FormData(form),
          xhr = new XMLHttpRequest();

        xhr.open("POST", "/send-popup.php");

        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if(xhr.status == 200) {

              var contactLoader = document.querySelector('.modal__loader-wrapper');
              contactLoader.style.visibility = 'visible';
              contactLoader.style.opacity = '1';
              form.reset();
              $('.upload-text-reset-popup').text('Прикрепить файл');
              setTimeout(function () {
                contactLoader.style.visibility = 'hidden';
                contactLoader.style.opacity = '0';
              }, 3000);
              //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Заявка успешно отправлена!<div>');
            } else {
              //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Что то пошло не так!<div>');
            }
          }
        };
        xhr.send(formData);
      },
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        }

      },
      messages: {
        name: {
          required: "Введите Ваше имя"
        },
        email: {
          required: "Введите адрес электронной почты",
          email: "Не корректный адрес"
        },
        phone: {
          required: "Введите Ваш телефон"
        }
      }
    });

    /*validate form-nav*/
    $('.form-nav').validate({
      submitHandler: function(form){
        //var form = document.forms.formContact,
        var formData = new FormData($('.form-nav')[0]),
          xhr = new XMLHttpRequest();
        xhr.open("POST", "/send-nav.php");
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if(xhr.status == 200) {
              var contactLoader = document.querySelector('.form-nav__loader-wrapper');
              contactLoader.style.visibility = 'visible';
              contactLoader.style.opacity = '1';
              $('.form-nav')[0].reset();
              setTimeout(function () {
                contactLoader.style.visibility = 'hidden';
                contactLoader.style.opacity = '0';
              }, 3000);
            } else {
              //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Что то пошло не так!<div>');
            }
          }
        };
        xhr.send(formData);
      },
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        }

      },
      messages: {
        name: {
          required: "Введите Ваше имя"
        },
        email: {
          required: "Введите Ваш email",
          email: "Не корректный адрес"
        },
        phone: {
          required: "Введите Ваш телефон"
        }
      }
    });

    /*validate form-slider*/
    if (plugins.formSlider.length) {
      for (var i = 0; i < plugins.formSlider.length; i++) {
        var sliderForm = $(plugins.formSlider[i]);
        sliderForm.validate({
          submitHandler: function(form){
            var formData = new FormData(form),
                xhr = new XMLHttpRequest();
            xhr.open("POST", "/send-slider.php");
            xhr.onreadystatechange = function() {
              if (xhr.readyState == 4) {
                if(xhr.status == 200) {
                  form.reset();
                  /*form.next().css({
                    'visibility' : 'visible',
                    'opacity': '1'
                  });

                setTimeout(function () {
                  form.next().css({
                    'visibility' : 'hidden',
                    'opacity': '0'
                  });
                }, 3000);
                  var contactLoader = document.querySelector('.form-nav__loader-wrapper');
                  contactLoader.style.visibility = 'visible';
                  contactLoader.style.opacity = '1';

                  setTimeout(function () {
                    contactLoader.style.visibility = 'hidden';
                    contactLoader.style.opacity = '0';
                  }, 3000);*/
                } else {
                  //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Что то пошло не так!<div>');
                }
              }
            };
            xhr.send(formData);
          },
          rules: {
            name: {
              required: true,
            },
            email: {
              required: true,
              email: true
            },
            phone: {
              required: true
            }

          },
          messages: {
            name: {
              required: "Введите Ваше имя"
            },
            email: {
              required: "Введите Ваш email",
              email: "Не корректный адрес"
            },
            phone: {
              required: "Введите Ваш телефон"
            }
          }
        });
      }
    }

    /*validate form--subscribe*/
    $('.form--subscribe').validate({
      /*submitHandler: function(form){
        //var form = document.forms.formContact,
        var formData = new FormData($('.form-nav')[0]),
          xhr = new XMLHttpRequest();
        xhr.open("POST", "/send-nav.php");
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if(xhr.status == 200) {
              var contactLoader = document.querySelector('.form-nav__loader-wrapper');
              contactLoader.style.visibility = 'visible';
              contactLoader.style.opacity = '1';
              $('.form-nav')[0].reset();
              setTimeout(function () {
                contactLoader.style.visibility = 'hidden';
                contactLoader.style.opacity = '0';
              }, 3000);
            } else {
              //$(".modal-popup__answer").html('<div class="modal-popup__form-tanks">Что то пошло не так!<div>');
            }
          }
        };
        xhr.send(formData);
      },*/
      rules: {

        email: {
          required: true,
          email: true
        },

      },
      messages: {
        email: {
          required: "Введите Ваш email",
          email: "Не корректный адрес"
        },

      }
    });
    /**/
    if (plugins.bootstrapCollapse.length) {
      for (var i = 0; i < plugins.bootstrapCollapse.length; i++) {
        var $bootstrapCollapseItem = $(plugins.bootstrapCollapse[i]);
        (function($bootstrapCollapseItem) {
          if (!$bootstrapCollapseItem.find("a.collapsed").length) {
            $bootstrapCollapseItem.addClass("active");
          }
          $bootstrapCollapseItem.on("show.bs.collapse", function() {
            $bootstrapCollapseItem.addClass("active");
          });
          $bootstrapCollapseItem.on("hide.bs.collapse", function() {
            $bootstrapCollapseItem.removeClass("active");
          });
        })($bootstrapCollapseItem);
      }
    }

    /**
     * slick-slider**/
    if (plugins.slick.length) {
      for (var i = 0; i < plugins.slick.length; i++) {
        var $slickItem = $(plugins.slick[i]);
        $slickItem
          .slick({
            slidesToScroll:
              parseInt($slickItem.attr("data-slide-to-scroll"), 10) || 1,
            asNavFor: $slickItem.attr("data-for") || false,
            dots: $slickItem.attr("data-dots") === "true",
            infinite: isNoviBuilder
              ? false
              : $slickItem.attr("data-loop") === "true",
            focusOnSelect: true,
            fade: $slickItem.attr("data-fade") === "true",
            arrows: $slickItem.attr("data-arrows") === "true",
            swipe: $slickItem.attr("data-swipe") === "true",
            autoplay: $slickItem.attr("data-autoplay") === "true",
            autoplaySpeed: $slickItem.attr("data-autoplaySpeed") ? $slickItem.attr("data-autoplaySpeed") : "15000",
            vertical: $slickItem.attr("data-vertical") === "true",
            centerMode: $slickItem.attr("data-center-mode") === "true",
            centerPadding: $slickItem.attr("data-center-padding")
              ? $slickItem.attr("data-center-padding")
              : "0.50",
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 0,
                settings: {
                  slidesToShow: parseInt($slickItem.attr("data-items"), 10) || 1
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-sm-items"), 10) || 1
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-md-items"), 10) || 1
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-lg-items"), 10) || 1
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow:
                    parseInt($slickItem.attr("data-xl-items"), 10) || 1
                }
              }
            ]
          })
          .on("afterChange", function(event, slick, currentSlide, nextSlide) {
            var $this = $(this),
              childCarousel = $this.attr("data-child");
            if (childCarousel) {
              $(childCarousel + " .slick-slide").removeClass("slick-current");
              $(childCarousel + " .slick-slide")
                .eq(currentSlide)
                .addClass("slick-current");
            }
          });
      }
    };

    /**
     * owl - js-reviews main
     */
    $('.js-reviews').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items:1,
      //margin:30,
      //stagePadding:30,
      smartSpeed:450,
      //nav:true,
      //dots:false,
      autoplay: true,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      loop:true,
      navElement: 'div class="owl-slider-arrow"',
      navText:[],
      responsive:{
        480:{
          nav:true,
          dots:false,
        }
      }

    });

    /**
     * parallax scroll function
     */
    if($('[data-parallax-scroll]').length && !isNoviBuilder && !isMobile){
      ParallaxScroll.init();
    }

    /**
     * @desc Initialize the gallery with set of images
     * @param {object} itemsToInit - jQuery object
     * @param {string} addClass - additional gallery class
     */
    function initLightGallery(itemsToInit, addClass) {
      if (!isNoviBuilder) {
        $(itemsToInit).lightGallery({
          thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
          selector: "[data-lightgallery='item']",
          autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
          pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
          addClass: addClass,
          mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
          loop: $(itemsToInit).attr("data-lg-loop") !== "false",
          download: false
        });
      }
    }

    /**
     * @desc Initialize the gallery with dynamic addition of images
     * @param {object} itemsToInit - jQuery object
     * @param {string} addClass - additional gallery class
     */
    function initDynamicLightGallery(itemsToInit, addClass) {
      if (!isNoviBuilder) {
        $(itemsToInit).on("click", function () {
          $(itemsToInit).lightGallery({
            thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
            download: false,
            selector: "[data-lightgallery='item']",
            autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
            pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
            addClass: addClass,
            mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
            loop: $(itemsToInit).attr("data-lg-loop") !== "false",
            dynamic: true,
            dynamicEl: JSON.parse($(itemsToInit).attr("data-lg-dynamic-elements")) || []
          });
        });
      }
    }

    /**
     * @desc Initialize the gallery with one image
     * @param {object} itemToInit - jQuery object
     * @param {string} addClass - additional gallery class
     */
    function initLightGalleryItem(itemToInit, addClass) {
      if (!isNoviBuilder) {
        $(itemToInit).lightGallery({
          selector: "this",
          addClass: addClass,
          counter: false,
          youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
          },
          vimeoPlayerParams: {
            byline: 0,
            portrait: 0
          }
        });
      }
    }

    // lightGallery
    if (plugins.lightGallery.length) {
      for (var i = 0; i < plugins.lightGallery.length; i++) {
        initLightGallery(plugins.lightGallery[i]);
      }
    }

    // lightGallery item
    if (plugins.lightGalleryItem.length) {
      // Filter carousel items
      var notCarouselItems = [];

      for (var z = 0; z < plugins.lightGalleryItem.length; z++) {
        if (!$(plugins.lightGalleryItem[z]).parents('.owl-carousel').length && !$(plugins.lightGalleryItem[z]).parents('.swiper-slider').length && !$(plugins.lightGalleryItem[z]).parents('.slick-slider').length) {
          notCarouselItems.push(plugins.lightGalleryItem[z]);
        }
      }

      plugins.lightGalleryItem = notCarouselItems;

      for (var i = 0; i < plugins.lightGalleryItem.length; i++) {
        initLightGalleryItem(plugins.lightGalleryItem[i]);
      }
    }

    // Dynamic lightGallery
    if (plugins.lightDynamicGalleryItem.length) {
      for (var i = 0; i < plugins.lightDynamicGalleryItem.length; i++) {
        initDynamicLightGallery(plugins.lightDynamicGalleryItem[i]);
      }
    }

    /**
     * Isotope
     * @description Enables Isotope plugin
     */
    if (plugins.isotope.length) {
      var isogroup = [];
      for ( var i = 0; i < plugins.isotope.length; i++ ) {
        var isotopeItem = plugins.isotope[i],
          filterItems = $(isotopeItem).closest('.isotope-wrap').find('[data-isotope-filter]'),
          iso = new Isotope(isotopeItem,
            {
              itemSelector: '.isotope-item',
              layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
              filter: '*',
            }
          );

        isogroup.push(iso);

        filterItems.on("click", function (e) {
          e.preventDefault();
          var filter = $(this),
            iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]'),
            filtersContainer = filter.closest(".isotope-filters");

          filtersContainer
            .find('.active')
            .removeClass("active");
          filter.addClass("active");

          iso.isotope({
            itemSelector: '.isotope-item',
            layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
            filter: this.getAttribute("data-isotope-filter") == '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
          });

          $window.trigger('resize');

          // If d3Charts contains in isotop, resize it on click.
          if (filtersContainer.hasClass('isotope-has-d3-graphs') && c3ChartsArray != undefined) {
            setTimeout(function () {
              for (var j = 0; j < c3ChartsArray.length; j++) {
                c3ChartsArray[j].resize();
              }
            }, 500);
          }

        }).eq(0).trigger("click");
      }

      setTimeout(function () {
        for ( var i = 0; i < isogroup.length; i++ ) {
          isogroup[i].element.classList.add( "isotope--loaded" );
          isogroup[i].layout();
        }
      }, 1200);
    }

    // RD Navbar
    if (plugins.rdNavbar.length) {
      var aliaces, i, j, len, value, values, responsiveNavbar;

      aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
      values = [0, 576, 768, 992, 1200, 1600];
      responsiveNavbar = {};

      for (var z = 0; z < plugins.rdNavbar.length; z++) {
        var $rdNavbar = $(plugins.rdNavbar[z]);

        for (i = j = 0, len = values.length; j < len; i = ++j) {
          value = values[i];
          if (!responsiveNavbar[values[i]]) {
            responsiveNavbar[values[i]] = {};
          }
          if ($rdNavbar.attr('data' + aliaces[i] + 'layout')) {
            responsiveNavbar[values[i]].layout = $rdNavbar.attr('data' + aliaces[i] + 'layout');
          }
          if ($rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
            responsiveNavbar[values[i]]['deviceLayout'] = $rdNavbar.attr('data' + aliaces[i] + 'device-layout');
          }
          if ($rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
            responsiveNavbar[values[i]]['focusOnHover'] = $rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
          }
          if ($rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
            responsiveNavbar[values[i]]['autoHeight'] = $rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
          }

          if (isNoviBuilder) {
            responsiveNavbar[values[i]]['stickUp'] = false;
          } else if ($rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
            var isDemoNavbar = $rdNavbar.parents('.layout-navbar-demo').length;
            responsiveNavbar[values[i]]['stickUp'] = $rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true' && !isDemoNavbar;
          }

          if ($rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
            responsiveNavbar[values[i]]['stickUpOffset'] = $rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
          }
        }

        $rdNavbar.RDNavbar({
          anchorNav: !isNoviBuilder,
          stickUpClone: ($rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? $rdNavbar.attr("data-stick-up-clone") === 'true' : false,
          responsive: responsiveNavbar,
          callbacks: {
            onStuck: function () {
              var navbarSearch = this.$element.find('.rd-search input');

              if (navbarSearch) {
                navbarSearch.val('').trigger('propertychange');
              }
            },
            onDropdownOver: function () {
              return !isNoviBuilder;
            },
            onUnstuck: function () {
              if (this.$clone === null)
                return;

              var navbarSearch = this.$clone.find('.rd-search input');

              if (navbarSearch) {
                navbarSearch.val('').trigger('propertychange');
                navbarSearch.trigger('blur');
              }

            }
          }
        });


        if ($rdNavbar.attr("data-body-class")) {
          document.body.className += ' ' + $rdNavbar.attr("data-body-class");
        }

      }
    }

    // check policy



    $('.js-policy-1').on('click', function(){
      checkPolicy(this, '.form__btn-1');
    });
    $('.js-policy-2').on('click', function(){
      checkPolicy(this, '.form__btn-2');
    });
    $('.js-policy-3').on('click', function(){
      checkPolicy(this, '.form__btn-3');
    });
    $('.js-policy-4').on('click', function(){
      checkPolicy(this, '.form__btn-4');
    });
    $('.js-policy-5').on('click', function(){
      checkPolicy(this, '.form__btn-5');
    });
    $('.js-policy-6').on('click', function(){
      checkPolicy(this, '.form__btn-6');
    });
    $('.js-policy-7').on('click', function(){
      checkPolicy(this, '.form__btn-7');
    });




    function checkPolicy(checkbox, btn) {
      if ($(checkbox).is(':checked')) {
        $(btn).prop('disabled', false);

      } else {
        $(btn).prop('disabled', true);

      }
    }

    // Winona buttons
    if (plugins.buttonWinona.length && !isNoviBuilder && !isIE) {
      initWinonaButtons(plugins.buttonWinona);
    }

    function initWinonaButtons(buttons) {
      for (var i = 0; i < buttons.length; i++) {
        var $button = $(buttons[i]),
          innerContent = $button.html();

        $button.html('');
        $button.append(
          '<div class="content-original">' + innerContent + '</div>'
          + '<div class="content-dubbed">' + innerContent + '</div>');
      }
    }

    // UI To Top
    if (isDesktop && !isNoviBuilder) {
      $().UItoTop({
        easingType: 'easeOutQuad',
        containerClass: 'ui-to-top mdi mdi-chevron-up'
      });
    }


    /**
     * isScrolledIntoView
     * @description  check the element whas been scrolled into the view
     */
    function isScrolledIntoView(elem) {
      if (!isNoviBuilder) {
        return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
      }
      else {
        return true;
      }
    }

    /**
     * @desc Insert element after reference element
     * @param {Node} elem - inserted element
     * @param {object} refElem - reference element
     */
    function insertAfter ( elem, refElem ) {
      return refElem.parentNode.insertBefore( elem, refElem.nextSibling );
    }

    /**
     * @desc Init custom background circle effect
     * @param {object} swiper - swiper instance
     */
    function initCircleBg( swiper ) {
      /**
       * @desc Recalculate svg circle parameters
       * @param {object} swiper - swiper instance
       * @return {object} - circle parameters
       */
      function calcCircle( swiper ) {
        var activeSlide = swiper.$wrapperEl[0].children[swiper.activeIndex];
        return {
          centerX: activeSlide.getAttribute( 'data-circle-cx' ) ? swiper.width*activeSlide.getAttribute( 'data-circle-cx' ) : swiper.width/2,
          centerY: activeSlide.getAttribute( 'data-circle-cy' ) ? swiper.height*activeSlide.getAttribute( 'data-circle-cy' ) : swiper.height/2,
          radius: activeSlide.getAttribute( 'data-circle-r' ) ? swiper.width*activeSlide.getAttribute( 'data-circle-r' ) : swiper.height*.4
        };
      }

      // Svg parameters
      swiper.params.svg = {
        fill: swiper.$el[0].getAttribute( 'data-circle-fill' ) || '#f1f1f1',
        easingIn: 'easeOutQuad',
        easingOut: 'easeOutQuad'
      };

      swiper.svg = {};
      swiper.svg.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      swiper.svg.el.setAttribute('class', 'swiper-svg');
      swiper.svg.el.setAttribute('width', '100%');
      swiper.svg.el.setAttribute('height', '100%');
      swiper.svg.el.setAttribute('viewbox', '0 0 '+swiper.width+' '+swiper.height);
      swiper.svg.circle = calcCircle( swiper );
      swiper.svg.el.innerHTML = '<circle fill="'+swiper.params.svg.fill+'"  cx="'+swiper.svg.circle.centerX+'" cy="'+swiper.svg.circle.centerY+'" r="'+swiper.svg.circle.radius+'"/>';
      swiper.$el[0].insertBefore( swiper.svg.el, swiper.$wrapperEl[0] );
      // insertAfter( swiper.svg.el, swiper.$wrapperEl[0] );
      swiper.svg.circleEl = swiper.svg.el.querySelector('circle');

      swiper.on( 'resize', function () {
        swiper.svg.circle = calcCircle( swiper );
        swiper.svg.circleEl.setAttribute( 'cx', swiper.svg.circle.centerX );
        swiper.svg.circleEl.setAttribute( 'cy', swiper.svg.circle.centerY );
        swiper.svg.circleEl.setAttribute( 'r', swiper.svg.circle.radius );
      });

      swiper.on( 'slideChangeTransitionStart', function () {
        var swiper = this;
        swiper.svg.circle = calcCircle( swiper );

        var shapeIn = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.svg.circleEl,
              duration: swiper.params.speed / 4,
              easing: swiper.params.svg.easingIn,
              cx: swiper.width/2,
              cy: swiper.height/2,
              r: swiper.width,
              complete: resolve
            })
          });
        };

        var shapeOut = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.svg.circleEl,
              duration: swiper.params.speed/4,
              delay: swiper.params.speed/2,
              easing: swiper.params.svg.easingOut,
              cx: swiper.svg.circle.centerX,
              cy: swiper.svg.circle.centerY,
              r: swiper.svg.circle.radius,
              complete: resolve
            });
          });
        };

        shapeIn().then( shapeOut );
      });
    }

    /**
     * @desc Init custom serial rectangle frame effect
     * @param {object} swiper - swiper instance
     */
    function initFrameRectSerial( swiper ) {
      /**
       * @desc Path recalculation depending on the state
       * @param {object} swiper - swiper instance
       * @param {string} [state] - path state
       * @return {string} - path description for <path> element
       */
      var calculatePath = function ( swiper, state ) {
        switch( state ) {
          case 'step1':
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M '+swiper.frame.size+','+swiper.frame.size+' '+swiper.width+',0 '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z';
            break;
          case 'step2':
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M '+swiper.frame.size+','+swiper.frame.size+' '+(swiper.width-swiper.frame.size)+','+swiper.frame.size+' '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z';
            break;
          case 'step3':
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M '+swiper.frame.size+','+swiper.frame.size+' '+(swiper.width-swiper.frame.size)+','+swiper.frame.size+' '+(swiper.width-swiper.frame.size)+','+(swiper.height-swiper.frame.size)+' 0,'+swiper.height+' Z';
            break;
          case 'step4':
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M '+swiper.frame.size+','+swiper.frame.size+' '+(swiper.width-swiper.frame.size)+','+swiper.frame.size+' '+(swiper.width-swiper.frame.size)+','+(swiper.height-swiper.frame.size)+' '+swiper.frame.size+','+(swiper.height-swiper.frame.size)+' Z';
            break;
          default:
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M 0,0 '+swiper.width+',0 '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z';
            break;
        }
      };

      // Frame parameters
      swiper.params.frame = {
        fill: swiper.$el[0].getAttribute( 'data-frame-fill' ) || '#f1f1f1',
        easingIn: 'easeOutQuad',
        easingOut: 'easeOutQuad'
      };

      swiper.frame = {};
      swiper.frame.size = swiper.width / 12;
      swiper.frame.paths = {
        initial: calculatePath( swiper ),
        step1: calculatePath( swiper, 'step1' ),
        step2: calculatePath( swiper, 'step2' ),
        step3: calculatePath( swiper, 'step3' ),
        step4: calculatePath( swiper, 'step4' )
      };
      swiper.frame.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      swiper.frame.el.setAttribute('class', 'swiper-frame');
      swiper.frame.el.setAttribute('width', '100%');
      swiper.frame.el.setAttribute('height', '100%');
      swiper.frame.el.setAttribute('fill-rule', 'evenodd');
      swiper.frame.el.setAttribute('viewbox', '0 0 '+swiper.width+' '+swiper.height);
      swiper.frame.el.innerHTML = '<path fill="'+swiper.params.frame.fill+'" d="'+swiper.frame.paths.initial+'"/>';
      swiper.$el[0].insertBefore( swiper.frame.el, swiper.$wrapperEl[0] );
      swiper.frame.shape = swiper.frame.el.querySelector('path');

      swiper.on( 'resize', function() {
        this.frame.size = this.width / 12;
        this.frame.paths.initial = calculatePath( this );
        this.frame.paths.step1 = calculatePath( this, 'step1' );
        this.frame.paths.step2 = calculatePath( this, 'step2' );
        this.frame.paths.step3 = calculatePath( this, 'step3' );
        this.frame.paths.step4 = calculatePath( this, 'step4' );
        this.frame.el.setAttribute('viewbox', '0 0 '+this.width+' '+this.height);
        this.frame.shape.setAttribute( 'd', this.animating ? this.frame.paths.final : this.frame.paths.initial );
      });

      swiper.on( 'slideChangeTransitionStart', function () {
        var swiper = this;

        var shapeIn = function () {
          return new Promise( function( resolve, reject ) {
            var duration = swiper.params.speed * .14;

            var shapeTimeline = anime.timeline({
              duration: duration,
              easing: swiper.params.frame.easingIn
            });

            shapeTimeline
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.step1
              })
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.step2,
                offset: '-='+(duration*.5)
              })
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.step3,
                offset: '-='+(duration*.5)
              })
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.step4,
                offset: '-='+(duration*.5),
                complete: resolve
              });
          });
        };

        var shapeOut = function () {
          return new Promise( function( resolve, reject ) {
            var duration = swiper.params.speed * .14;

            var shapeTimeline = anime.timeline({
              duration: duration,
              easing: swiper.params.frame.easingIn
            });

            shapeTimeline
              .add({
                targets: swiper.frame.shape,
                delay: swiper.params.speed * .25,
                d: swiper.frame.paths.step3
              })
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.step2,
                offset: '-='+(duration*.5)
              })
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.step1,
                offset: '-='+(duration*.5)
              })
              .add({
                targets: swiper.frame.shape,
                d: swiper.frame.paths.initial,
                offset: '-='+(duration*.5),
                complete: resolve
              });
          });
        };

        shapeIn().then( shapeOut );
      });
    }

    /**
     * @desc Init custom trapeze frame effect
     * @param {object} swiper - swiper instance
     */
    function initFrameTrapeze( swiper ) {
      /**
       * @desc Path recalculation depending on the state
       * @param {object} swiper - swiper instance
       * @param {string} [state] - path state
       * @return {string} - path description for <path> element
       */
      var calculatePath = function ( swiper, state ) {
        switch( state ) {
          case 'next':
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M '+swiper.frame.size+','+swiper.frame.size+' '+(swiper.width - swiper.frame.size)+','+(swiper.frame.size / 2)+' '+(swiper.width - swiper.frame.size)+','+(swiper.height - swiper.frame.size / 2)+' '+swiper.frame.size+','+(swiper.height - swiper.frame.size)+' Z';
            break;
          case 'prev':
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M '+swiper.frame.size+','+(swiper.frame.size / 2)+' '+(swiper.width - swiper.frame.size)+','+swiper.frame.size+' '+(swiper.width - swiper.frame.size)+','+(swiper.height - swiper.frame.size)+' '+swiper.frame.size+','+(swiper.height - swiper.frame.size / 2)+' Z';
            break;
          default:
            return 'M 0,0 0,'+swiper.height+' '+swiper.width+','+swiper.height+' '+swiper.width+',0 0,0 Z M 0,0 '+swiper.width+',0 '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z';
            break;
        }
      };

      var shapeNext = function ( swiper ) {
        return new Promise( function ( resolve, reject ) {
          anime({
            targets: swiper.frame.shape,
            duration: swiper.params.speed / 4,
            easing: swiper.params.frame.easingIn,
            d: swiper.frame.paths.next,
            complete: resolve
          })
        });
      };

      var shapePrev = function ( swiper ) {
        return new Promise( function ( resolve, reject ) {
          anime({
            targets: swiper.frame.shape,
            duration: swiper.params.speed / 4,
            easing: swiper.params.frame.easingIn,
            d: swiper.frame.paths.prev,
            complete: resolve
          })
        });
      };

      var shapeOut = function ( swiper ) {
        return function() {
          return new Promise( function ( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed / 4,
              delay: swiper.params.speed / 2,
              easing: swiper.params.frame.easingOut,
              d: swiper.frame.paths.initial,
              complete: resolve
            });
          });
        }
      };

      // Frame parameters
      swiper.params.frame = {
        fill: swiper.$el[0].getAttribute( 'data-frame-fill' ) || '#f1f1f1',
        easingIn: 'easeOutQuint',
        easingOut: 'easeOutQuad'
      };

      swiper.frame = {};
      swiper.frame.size = swiper.width / 12;
      swiper.frame.paths = {
        initial: calculatePath( swiper ),
        next: calculatePath( swiper, 'next' ),
        prev: calculatePath( swiper, 'prev' )
      };
      swiper.frame.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      swiper.frame.el.setAttribute('class', 'swiper-frame');
      swiper.frame.el.setAttribute('width', '100%');
      swiper.frame.el.setAttribute('height', '100%');
      swiper.frame.el.setAttribute('fill-rule', 'evenodd');
      swiper.frame.el.setAttribute('viewbox', '0 0 '+swiper.width+' '+swiper.height);
      swiper.frame.el.innerHTML = '<path fill="'+swiper.params.frame.fill+'" d="'+swiper.frame.paths.initial+'"/>';
      swiper.$el[0].insertBefore( swiper.frame.el, swiper.$wrapperEl[0] );
      swiper.frame.shape = swiper.frame.el.querySelector('path');

      swiper.on( 'resize', function() {
        this.frame.size = this.width / 12;
        this.frame.paths.initial = calculatePath( this );
        this.frame.paths.next = calculatePath( this, 'next' );
        this.frame.paths.prev = calculatePath( this, 'prev' );
        this.frame.el.setAttribute('viewbox', '0 0 '+this.width+' '+this.height);
        this.frame.shape.setAttribute( 'd', this.animating ? this.frame.paths.final : this.frame.paths.initial );
      });

      swiper.on( 'slideNextTransitionStart', function () {
        var swiper = this;
        shapeNext( swiper ).then( shapeOut( swiper ) );
      });

      swiper.on( 'slidePrevTransitionStart', function () {
        var swiper = this;
        shapePrev( swiper ).then( shapeOut( swiper ) );
      });
    }

    /**
     * @desc Init custom slash frame effect
     * @param {object} swiper - swiper instance
     */
    function initFrameSlash( swiper ) {
      /**
       * @desc Path recalculation depending on the state
       * @param {object} swiper - swiper instance
       * @param {string} [state] - path state
       * @return {string} - path description for <path> element
       */
      var calculatePath = function ( swiper, state ) {
        var w = swiper.width, h = swiper.height;
        switch( state ) {
          case 'slash':
            var p1 = {x: w / 4 - 50, y: h / 4 + 50},
              p2 = {x: w / 4 + 50, y: h / 4 - 50},
              p3 = {x: w - p2.x, y: h - p2.y},
              p4 = {x: w - p1.x, y: h - p1.y};
            return [
              'M 0,0',
              '0,'+h,
              w+','+h,
              w+',0',
              '0,0 Z',
              'M '+p1.x+','+p1.y,
              p2.x+','+p2.y,
              p4.x+','+p4.y,
              p3.x+','+p3.y+' Z'
            ].join( ' ' );
            break;
          default:
            return [
              'M 0,0',
              '0,'+h,
              w+','+h,
              w+',0',
              '0,0 Z',
              'M 0,0',
              w+',0',
              w+','+h,
              '0,'+h,
              '0,0 Z'
            ].join( ' ' );
            break;
        }
      };

      // Frame parameters
      swiper.params.frame = {
        fill: swiper.$el[0].getAttribute( 'data-frame-fill' ) || '#f1f1f1',
        easingIn: 'easeOutQuint',
        easingOut: 'easeOutQuad'
      };

      separateCaptions( swiper );
      swiper.frame = {};
      swiper.frame.paths = {
        initial: calculatePath( swiper ),
        final: calculatePath( swiper, 'slash' )
      };
      swiper.frame.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      swiper.frame.el.setAttribute('class', 'swiper-frame');
      swiper.frame.el.setAttribute('width', '100%');
      swiper.frame.el.setAttribute('height', '100%');
      swiper.frame.el.setAttribute('fill-rule', 'evenodd');
      swiper.frame.el.setAttribute('viewbox', '0 0 '+swiper.width+' '+swiper.height);
      swiper.frame.el.innerHTML = '<path fill="'+swiper.params.frame.fill+'" d="'+swiper.frame.paths.initial+'"/>';
      swiper.$el[0].insertBefore( swiper.frame.el, swiper.$wrapperEl[0] );
      swiper.frame.shape = swiper.frame.el.querySelector('path');

      swiper.on( 'resize', function() {
        this.frame.paths.initial = calculatePath( this );
        this.frame.paths.final = calculatePath( this, 'slash' );
        this.frame.el.setAttribute('viewbox', '0 0 '+this.width+' '+this.height);
        this.frame.shape.setAttribute( 'd', this.animating ? this.frame.paths.final : this.frame.paths.initial );
      });

      swiper.on( 'slideChangeTransitionStart', function () {
        var swiper = this;

        var shapeIn = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed / 4,
              easing: swiper.params.frame.easingIn,
              d: swiper.frame.paths.final,
              complete: resolve
            })
          });
        };

        var shapeOut = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed/4,
              delay: swiper.params.speed/2,
              easing: swiper.params.frame.easingOut,
              d: swiper.frame.paths.initial,
              complete: resolve
            });
          });
        };

        shapeIn().then( shapeOut );
      });
    }

    /**
     * @desc Init custom random frame effect
     * @param {object} swiper - swiper instance
     */
    function initFrameRandom( swiper ) {
      /**
       * @desc Returns random frame size considering the size of the slider
       * @param {object} swiper - swiper instance
       * @return {number} - frame size
       */
      var randomSize = function ( swiper ) {
        return swiper.frame.minSize + swiper.frame.maxSize * Math.random();
      };

      /**
       * @desc Path recalculation depending on the state
       * @param {object} swiper - swiper instance
       * @param {string} [state] - path state
       * @return {string} - path description for <path> element
       */
      var calcPath = function ( swiper, state ) {
        switch( state ) {
          case 'random':
            return 'M 0,0 '+swiper.width+',0 '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z M '+randomSize( swiper )+','+randomSize( swiper )+' '+(swiper.width-randomSize( swiper ))+','+randomSize( swiper )+' '+(swiper.width-randomSize( swiper ))+','+(swiper.height-randomSize( swiper ))+' '+randomSize( swiper )+','+(swiper.height-randomSize( swiper ))+' Z';
            break;
          default:
            return 'M 0,0 '+swiper.width+',0 '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z M 0,0 '+swiper.width+',0 '+swiper.width+','+swiper.height+' 0,'+swiper.height+' Z';
            break;
        }
      };

      // Frame parameters
      swiper.params.frame = {
        fill: swiper.$el[0].getAttribute( 'data-frame-fill' ) || '#f1f1f1',
        easingIn: 'easeOutQuint',
        easingOut: 'easeOutQuad'
      };

      swiper.frame = {};
      swiper.frame.maxSize = swiper.width/15;
      swiper.frame.minSize = swiper.width/30;
      swiper.frame.paths = {
        initial: calcPath( swiper ),
        final: calcPath( swiper, 'random' )
      };
      swiper.frame.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      swiper.frame.el.setAttribute('class', 'swiper-frame');
      swiper.frame.el.setAttribute('width', '100%');
      swiper.frame.el.setAttribute('height', '100%');
      swiper.frame.el.setAttribute('fill-rule', 'evenodd');
      swiper.frame.el.setAttribute('viewbox', '0 0 '+swiper.width+' '+swiper.height);
      swiper.frame.el.innerHTML = '<path fill="'+swiper.params.frame.fill+'" d="'+swiper.frame.paths.initial+'"/>';
      swiper.$el[0].insertBefore( swiper.frame.el, swiper.$wrapperEl[0] );
      swiper.frame.shape = swiper.frame.el.querySelector('path');

      swiper.on( 'resize', function() {
        this.frame.maxSize = swiper.width/10;
        this.frame.minSize = swiper.width/30;
        this.frame.paths.initial = calcPath( this );
        this.frame.paths.final = calcPath( this, 'random' );
        this.frame.el.setAttribute('viewbox', '0 0 '+this.width+' '+this.height);
        this.frame.shape.setAttribute( 'd', this.animating ? this.frame.paths.final : this.frame.paths.initial );
      });

      swiper.on( 'slideChangeTransitionStart', function () {
        var swiper = this;

        var shapeIn = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed / 4,
              easing: swiper.params.frame.easingIn,
              d: calcPath( swiper, 'random' ),
              complete: resolve
            })
          });
        };

        var shapeOut = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed/4,
              delay: swiper.params.speed/2,
              easing: swiper.params.frame.easingOut,
              d: swiper.frame.paths.initial,
              complete: resolve
            });
          });
        };

        shapeIn().then( shapeOut );
      });
    }

    /**
     * @desc Init custom cropping circle effect
     * @param {object} swiper - swiper instance
     */
    function initCroppingCircle( swiper ) {
      /**
       * @desc Generates random center coordinates considering the size of the slider and the circle.
       * @param {object} swiper - swiper instance
       * @returns {{x: number, y: *}} - random center coordinates
       */
      var randomCenter = function ( swiper ) {
        return {
          x: (swiper.width-swiper.frame.radiusReduced*2) * Math.random(),
          y: (swiper.height-swiper.frame.radiusReduced*2) * Math.random() + swiper.frame.radiusReduced
        };
      };

      /**
       * @desc Path recalculation depending on the state.
       * @param {object} swiper - swiper instance
       * @param {string} [state] - path state
       * @return {string} - path description for <path> element
       */
      var calculatePath = function ( swiper, state ) {
        var w = swiper.width, h = swiper.height, r, c = randomCenter( swiper );
        switch( state ) {
          case 'reduced':
            r = swiper.frame.radiusReduced;
            return [
              'M 0, 0',
              'H '+w,
              'V '+h,
              'H 0 Z',

              'M '+c.x+', '+c.y,
              'a '+r+','+r+' 0 0,0 '+(r*2)+',0',
              'a '+r+','+r+' 0 0,0 '+(-r*2)+',0 Z'
            ].join( ' ' );
            break;
          default:
            r = swiper.frame.radiusFull;
            return [
              'M 0, 0',
              'H '+w,
              'V '+h,
              'H 0 Z',

              'M '+(w/2-r)+', '+(h/2),
              'a '+r+','+r+' 0 0,0 '+(r*2)+',0',
              'a '+r+','+r+' 0 0,0 '+(-r*2)+',0 Z'
            ].join( ' ' );
            break;
        }
      };

      /**
       * @desc Generate dimensions for <image> element to fill slide.
       * @param {object} swiper - swiper instance
       * @return {{ width: number, height: number }}
       */
      var genImgFillSize = function ( swiper ) {
        var ratio = Math.max( swiper.width / swiper.frame.image.initialBox.width, swiper.height / swiper.frame.image.initialBox.height );
        return {
          width: swiper.frame.image.initialBox.width * ratio,
          height: swiper.frame.image.initialBox.height * ratio
        };
      };

      /**
       * @desc Returns initial dimensions of <image> element. It is recommended to specify dimensions in the file name.
       * @param {object} swiper - swiper instance
       * @return {object} - initial dimensions
       */
      var getInitialBox = function( swiper ) {
        var initialBox = swiper.params.frame.frameBg.match( /\d+x\d+/g );
        if ( initialBox[0] ) {
          initialBox = initialBox[0].split( 'x' );
          return { width: initialBox[0], height: initialBox[1] };
        } else {
          return swiper.frame.image.el.getBBox();
        }
      };

      // Frame parameters
      swiper.params.frame = {
        frameBg: swiper.$el[0].getAttribute( 'data-frame-bg' ),
        easingIn: 'easeOutQuint',
        easingOut: 'easeInQuad'
      };

      separateCaptions( swiper );
      swiper.frame = {};
      swiper.frame.radiusReduced = swiper.width * .15;
      swiper.frame.radiusFull = Math.sqrt( Math.pow(swiper.width, 2) + Math.pow(swiper.height, 2) );
      swiper.frame.paths = {
        initial: calculatePath( swiper ),
        final: calculatePath( swiper, 'reduced' )
      };
      swiper.frame.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      swiper.frame.el.setAttribute('class', 'swiper-frame');
      swiper.frame.el.setAttribute('width', '100%');
      swiper.frame.el.setAttribute('height', '100%');
      swiper.frame.el.setAttribute('fill-rule', 'evenodd');
      swiper.frame.el.setAttribute('viewbox', '0 0 '+swiper.width+' '+swiper.height);
      swiper.frame.el.innerHTML = '<defs><clipPath id="shape__clip"><path d="'+swiper.frame.paths.initial+'"/></clipPath></defs><image xlink:href="'+swiper.params.frame.frameBg+'" clip-path="url(#shape__clip)" x="0" y="0"/>';
      swiper.$el[0].insertBefore( swiper.frame.el, swiper.$wrapperEl[0] );
      swiper.frame.shape = swiper.frame.el.querySelector('path');

      swiper.frame.image = {};
      swiper.frame.image.el = swiper.frame.el.querySelector('image');
      swiper.frame.image.initialBox = getInitialBox( swiper );
      swiper.frame.image.box = genImgFillSize( swiper );
      swiper.frame.image.el.setAttribute( 'width', swiper.frame.image.box.width );
      swiper.frame.image.el.setAttribute( 'height', swiper.frame.image.box.height );

      swiper.on( 'resize', function() {
        this.frame.radiusReduced = swiper.width / 8;
        this.frame.radiusFull = Math.sqrt( Math.pow(this.width, 2) + Math.pow(this.height, 2) );

        this.frame.image.box = genImgFillSize( this );
        this.frame.image.el.setAttribute( 'width', this.frame.image.box.width );
        this.frame.image.el.setAttribute( 'height', this.frame.image.box.height );

        this.frame.paths.initial = calculatePath( this );
        this.frame.paths.final = calculatePath( this, 'reduced' );
        this.frame.el.setAttribute('viewbox', '0 0 '+this.width+' '+this.height);
        this.frame.shape.setAttribute( 'd', this.animating ? this.frame.paths.final : this.frame.paths.initial );
      });

      swiper.on( 'slideChangeTransitionStart', function () {
        var swiper = this;

        var shapeIn = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed / 3,
              easing: swiper.params.frame.easingIn,
              d: calculatePath( swiper, 'reduced' ),
              complete: resolve
            })
          });
        };

        var shapeOut = function () {
          return new Promise( function( resolve, reject ) {
            anime({
              targets: swiper.frame.shape,
              duration: swiper.params.speed/3,
              delay: swiper.params.speed/3,
              easing: swiper.params.frame.easingOut,
              d: swiper.frame.paths.initial,
              complete: resolve
            });
          });
        };

        shapeIn().then( shapeOut );
      });
    }

    /**
     * @desc Separate caption elements (.swiper-slide-caption) into other wrapper (.swiper-wrapper). Should only be used with a slide effect.
     * @param {object} swiper - swiper instance
     */
    function separateCaptions( swiper ) {
      // Add captions contatiner after .swiper-wrapper
      swiper.captWrapperEl = document.createElement( 'div' );
      swiper.captWrapperEl.className = 'swiper-wrapper separated';
      insertAfter( swiper.captWrapperEl, swiper.$wrapperEl[0] );

      // Move all caption to new container
      var captions = swiper.$wrapperEl[0].querySelectorAll( '.swiper-slide-caption' );
      for ( var i = 0; i < captions.length; i++ ) {
        var caption = captions[i].cloneNode( true ),
          captionSlide = document.createElement( 'div' );

        captionSlide.className = 'swiper-slide';
        swiper.captWrapperEl.appendChild( captionSlide );
        captionSlide.appendChild( caption );
        captions[i].remove();
      }

      // Switch slides
      swiper.captWrapperEl.children[ swiper.activeIndex ].classList.add( 'active' );

      swiper.on( 'slideChangeTransitionStart', function() {
        swiper.captWrapperEl.children[ swiper.activeIndex ].classList.add( 'active' );
      });

      swiper.on( 'slideChangeTransitionEnd', function() {
        swiper.captWrapperEl.children[ swiper.realPrevious ].classList.remove( 'active' );
      });
    }

    /**
     * toggleSwiperInnerVideos
     * @description  toggle swiper videos on active slides
     */
    function toggleSwiperInnerVideos( swiper ) {
      var prevSlide = $(swiper.slides[swiper.previousIndex]),
        nextSlide = $(swiper.slides[swiper.activeIndex]),
        videos,
        videoItems = prevSlide.find("video");

      for(var i = 0; i < videoItems.length; i++) {
        videoItems[i].pause();
      }

      videos = nextSlide.find("video");
      if (!isNoviBuilder && videos.length) {
        videos.get(0).play();
        videos.css({'visibility':'visible', 'opacity':'1'});
      }
    }

    /**
     * @desc Sets the actual previous index based on the position of the slide in the markup. Should be the most recent action.
     * @param {object} swiper - swiper instance
     */
    function setRealPrevious( swiper ) {
      var element = swiper.$wrapperEl[0].children[ swiper.activeIndex ];
      swiper.realPrevious = Array.prototype.indexOf.call( element.parentNode.children, element );
    }

    /**
     * @desc Plays required animation preset
     * @param {object} el - animating DOM node
     * @param {object} params - extra options
     * @param {string} params.animation - anime preset name
     * @param {string} [params.direction] - animation direction
     * @param {string|array} [params.easing] - animation easing
     * @param {number} [params.duration] - animation duration
     * @param {number} [params.delay] - animation delay
     */
    function bindAnimePreset( el, params ) {
      params = params || {};

      var preset = {
        'swiperContentRide': function () {
          el.animeReset = function () {
            this.style.transform = 'none';
            this.style.opacity = 0;
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateY: direction ? 0 : [ 100, 0 ],
              translateX: direction
                ? direction === 'next'
                  ? [ 300, 0 ]
                  : [ -300, 0 ]
                : 0,
              opacity: [ 0, 1 ]
            });
          };
          el.animeOut = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay*.3,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateX: direction
                ? direction === 'next'
                  ? [ 0, -300 ]
                  : [ 0, 300 ]
                : 0,
              opacity: [ 1, 0 ]
            });
          };
        },
        'swiperContentStack': function () {
          el.animeReset = function () {
            this.style.transform = 'none';
            this.style.opacity = 0;
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay || 0,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateY: [ 300, 0 ],
              rotate: [ direction === 'prev' ? 25 : -25, 0 ],
              opacity: [ 0, 1 ]
            });
          };
          el.animeOut = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay*.6 || 0,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateY: [ 0, -300 ],
              rotate: [ 0, direction === 'prev' ? -15 : 15 ],
              opacity: [ 1, 0 ]
            });
          };
        },
        'swiperContentDiagonal': function () {
          el.animeReset = function () {
            this.style.transform = 'none';
            this.style.opacity = 0;
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay || 0,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateY: [ 300, 0 ],
              translateX: [ direction === 'next' ? 300 : -300, 0 ],
              opacity: [ 0, 1 ]
            });
          };
          el.animeOut = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay*.6 || 0,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              opacity: [ 1, 0 ]
            });
          };
        },
        'swiperContentFade': function () {
          params.easing = params.easing || 'easeOutQuint';
          el.animeReset = function () {
            this.style.transform = 'none';
            this.style.opacity = 0;
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateY: direction === 'next'
                ? [ 100, 0 ]
                : [ -100, 0 ],
              opacity: [ 0, 1 ]
            });
          };
          el.animeOut = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay*.6 || 0,
              easing: params.easing || 'easeOutQuint',
              direction: params.direction,
              translateY: direction === 'next'
                ? [ 0, -100 ]
                : [ 0, 100 ],
              opacity: [ 1, 0 ]
            });
          };
        },
        'swiperSlideRide': function () {
          el.animeReset = function () {
            this.style.transform = 'translateX(0) scale(1.2)';
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay || 0,
              easing: params.easing || 'easeInOutQuad',
              direction: params.direction,
              translateX: direction
                ? direction === 'next'
                  ? [ 200, 0 ]
                  : [ -200, 0 ]
                : 0,
              scale: { value: 1.2, duration: 0, delay: 0 }
            });
          };
        },
        'swiperSlideRotate': function () {
          el.animeReset = function () {
            this.style.transform = 'rotate(0) scale(1.2)';
          };
          el.animeStart = function ( direction ) {
            el.style.transformOrigin = direction === 'next' ? '0% 50%' : '100% 50%';
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay || 0,
              easing: params.easing || 'easeOutElastic',
              direction: params.direction,
              elasticity: 350,
              rotate: direction
                ? direction === 'next'
                  ? [ 5, 0 ]
                  : [ -5, 0 ]
                : 0,
              scale: direction ? [ 1.3, 1.1 ] : 1
            });
          };
        },
        'swiperSlideZoomOut': function () {
          el.animeReset = function () {
            this.style.transform = 'none';
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay || 0,
              easing: params.easing || 'easeInOutQuad',
              direction: params.direction,
              translateY: direction ? [ 300, 0 ] : 0,
              translateX: direction
                ? direction === 'next'
                  ? [ 300, 0 ]
                  : [ -300, 0 ]
                : 0,
              scale: direction ? [ 1.7, 1 ] : 1,
            });
          };
        },
        'swiperSlideZoomIn': function () {
          el.animeReset = function () {
            this.style.transform = 'none';
          };
          el.animeStart = function ( direction ) {
            anime({
              targets: el,
              duration: params.duration || 600,
              delay: params.delay || 0,
              easing: params.easing || 'easeInQuad',
              direction: params.direction,
              scale: direction ? [ .7, 1.7 ] : { value: 1.7, duration: 0 },
            });
          };
        }
      };

      if ( !preset[ params.animation ] ) console.warn( 'Unknown anime on:', el,'This will cause further errors.' );
      else preset[ params.animation ]();
    }

    /**
     * @desc Anime.js animations for swiper events
     * @param {object} swiper - swiper instance
     */
    function initSwiperAnime( swiper ) {
      // Anime parameters
      swiper.params.anime = {
        animationEvent: 'TransitionStart' // TransitionStart|TransitionEnd
      };

      // Variable "wrappers" required for separated captions
      var wrappers = swiper.$el[0].querySelectorAll( '.swiper-wrapper' );

      for ( var w = 0; w < wrappers.length; w++ ) {
        var wrapper = wrappers[w];

        // Initialize Anime
        var nodeList = wrapper.querySelectorAll( '[data-swiper-anime]' );
        for ( var i = 0; i < nodeList.length; i++ ) {
          var el = nodeList[i];
          bindAnimePreset( el, JSON.parse( el.getAttribute( 'data-swiper-anime' ) ) );
        }

        // First play active slide
        nodeList = wrapper.children[ swiper.activeIndex ].querySelectorAll( '[data-swiper-anime]' );
        for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeStart ) nodeList[i].animeStart();

        swiper.on( 'slideNext'+swiper.params.anime.animationEvent, function( wrapper ) {
          return function () {
            var nodeList = wrapper.children[ swiper.activeIndex ].querySelectorAll( '[data-swiper-anime]' );
            for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeStart ) nodeList[i].animeStart( 'next' );
          };
        }( wrapper ));

        swiper.on( 'slidePrev'+swiper.params.anime.animationEvent, function( wrapper ) {
          return function () {
            var nodeList = wrapper.children[ swiper.activeIndex ].querySelectorAll( '[data-swiper-anime]' );
            for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeStart ) nodeList[i].animeStart( 'prev' );
          };
        }( wrapper ));

        swiper.on( 'slideNextTransitionStart', function( wrapper ) {
          return function () {
            var nodeList;
            if ( typeof( swiper.realPrevious ) === 'number' && swiper.previousIndex !== swiper.realPrevious ) {
              nodeList = wrapper.children[ swiper.realPrevious ].querySelectorAll( '[data-swiper-anime]' );
              for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeOut ) nodeList[i].animeOut( 'next' );
            }
            nodeList = wrapper.children[ swiper.previousIndex ].querySelectorAll( '[data-swiper-anime]' );
            for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeOut ) nodeList[i].animeOut( 'next' );
          };
        }( wrapper ));

        swiper.on( 'slidePrevTransitionStart', function( wrapper ) {
          return function () {
            var nodeList;
            if ( typeof( swiper.realPrevious ) === 'number' && swiper.previousIndex !== swiper.realPrevious ) {
              nodeList = wrapper.children[ swiper.realPrevious ].querySelectorAll( '[data-swiper-anime]' );
              for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeOut ) nodeList[i].animeOut( 'prev' );
            }
            nodeList = wrapper.children[ swiper.previousIndex ].querySelectorAll( '[data-swiper-anime]' );
            for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeOut ) nodeList[i].animeOut( 'prev' );
          };
        }( wrapper ));

        if ( swiper.params.anime.animationEvent === 'TransitionEnd' ) {
          swiper.on( 'slideChangeTransitionStart', function( wrapper ) {
            return function () {
              var nodeList = wrapper.children[ swiper.activeIndex ].querySelectorAll( '[data-swiper-anime]' );
              for ( var i = 0; i < nodeList.length; i++ ) if ( nodeList[i].animeReset ) nodeList[i].animeReset();
            };
          }( wrapper ));
        }
      }
    }

    /**
     * @desc Animate captions on active slides
     * @param {object} swiper - swiper instance
     */
    function initCaptionAnimate( swiper ) {
      var
        animate = function ( caption ) {
          return function() {
            var duration;
            if ( duration = caption.getAttribute( 'data-caption-duration' ) ) caption.style.animationDuration = duration +'ms';
            caption.classList.remove( 'not-animated' );
            caption.classList.add( caption.getAttribute( 'data-caption-animate' ) );
            caption.classList.add( 'animated' );
          };
        },
        initializeAnimation = function ( captions ) {
          for ( var i = 0; i < captions.length; i++ ) {
            var caption = captions[i];
            caption.classList.remove( 'animated' );
            caption.classList.remove( caption.getAttribute( 'data-caption-animate' ) );
            caption.classList.add( 'not-animated' );
          }
        },
        finalizeAnimation = function ( captions ) {
          for ( var i = 0; i < captions.length; i++ ) {
            var caption = captions[i];
            if ( caption.getAttribute( 'data-caption-delay' ) ) {
              setTimeout( animate( caption ), Number( caption.getAttribute( 'data-caption-delay' ) ) );
            } else {
              animate( caption )();
            }
          }
        };

      // Caption parameters
      swiper.params.caption = {
        animationEvent: 'slideChangeTransitionEnd'
      };

      initializeAnimation( swiper.$wrapperEl[0].querySelectorAll( '[data-caption-animate]' ) );
      finalizeAnimation( swiper.$wrapperEl[0].children[ swiper.activeIndex ].querySelectorAll( '[data-caption-animate]' ) );

      if ( swiper.params.caption.animationEvent === 'slideChangeTransitionEnd' ) {
        swiper.on( swiper.params.caption.animationEvent, function() {
          initializeAnimation( swiper.$wrapperEl[0].children[ swiper.previousIndex ].querySelectorAll( '[data-caption-animate]' ) );
          finalizeAnimation( swiper.$wrapperEl[0].children[ swiper.activeIndex ].querySelectorAll( '[data-caption-animate]' ) );
        });
      } else {
        swiper.on( 'slideChangeTransitionEnd', function() {
          initializeAnimation( swiper.$wrapperEl[0].children[ swiper.previousIndex ].querySelectorAll( '[data-caption-animate]' ) );
        });

        swiper.on( swiper.params.caption.animationEvent, function() {
          finalizeAnimation( swiper.$wrapperEl[0].children[ swiper.activeIndex ].querySelectorAll( '[data-caption-animate]' ) );
        });
      }
    }

    /**
     * Swiper
     * @description  Enable Swiper Slider
     */
    if ( plugins.swiper ) {
      for ( var i = 0; i < plugins.swiper.length; i++ ) {
        var
          sliderMarkup = plugins.swiper[i],
          swiper,
          swiperSlide = $(sliderMarkup).find(".swiper-slide"),
          options = {
            loop: sliderMarkup.getAttribute( 'data-loop' ) === 'true' || false,
            effect: isIE ? 'slide' : sliderMarkup.getAttribute( 'data-effect' ) || 'fade',
            direction: sliderMarkup.getAttribute( 'data-direction' ) || 'horizontal',
            speed: sliderMarkup.getAttribute( 'data-speed' ) ? Number( sliderMarkup.getAttribute( 'data-speed' ) ) : 1200,
            allowTouchMove: true,
            preventIntercationOnTransition: true,
            runCallbacksOnInit: false,
            separateCaptions: sliderMarkup.getAttribute( 'data-separate-captions' ) === 'true' || false
          };

        for (var j = 0; j < swiperSlide.length; j++) {
          var $this = $(swiperSlide[j]),
            url;

          if (url = $this.attr("data-slide-bg")) {
            $this.css({
              "background-image": "url(" + url + ")",
              "background-size": "cover"
            })
          }
        }

        if ( sliderMarkup.getAttribute( 'data-autoplay' ) ) {
          options.autoplay = {
            delay: Number( sliderMarkup.getAttribute( 'data-autoplay' ) ) || 6000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
            reverseDirection: false,
          };
        }

        if ( sliderMarkup.getAttribute( 'data-keyboard' ) === 'true' ) {
          options.keyboard = {
            enabled: sliderMarkup.getAttribute( 'data-keyboard' ) === 'true',
            onlyInViewport: true
          };
        }

        if ( sliderMarkup.getAttribute( 'data-mousewheel' ) === 'true' ) {
          options.mousewheel = {
            releaseOnEdges: true,
            sensitivity: .1
          };
        }

        if ( sliderMarkup.querySelector( '.swiper-button-next, .swiper-button-prev' ) ) {
          options.navigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          };
        }

        if ( sliderMarkup.querySelector( '.swiper-pagination' ) ) {
          options.pagination = {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          };
        }

        if ( sliderMarkup.querySelector( '.swiper-scrollbar' ) ) {
          options.scrollbar = {
            el: '.swiper-scrollbar',
            hide: true,
            draggable: true
          };
        }

        options.on = {
          init: function () {
            setRealPrevious( this );
            switch( options.effect ) {
              case 'circle-bg':
                initCircleBg( this );
                break;
              case 'frame-rect-serial':
                initFrameRectSerial( this );
                break;
              case 'frame-trapeze':
                initFrameTrapeze( this );
                break;
              case 'frame-slash':
                initFrameSlash( this );
                break;
              case 'frame-random':
                initFrameRandom( this );
                break;
              case 'cropping-circle':
                initCroppingCircle( this );
                break;
            }
            initSwiperAnime( this );
            initCaptionAnimate( this );
            toggleSwiperInnerVideos( this );

            // Real Previous Index must be set recent
            this.on( 'slideChangeTransitionEnd', function () {
              setRealPrevious( this );
            });
          },
          transitionStart: function () {
            toggleSwiperInnerVideos(this);
          },
        };

        swiper = new Swiper ( plugins.swiper[i], options );
      }
    };

    // Circle carousel
    if( plugins.customCarousel.length ) {
      for ( var i = 0; i < plugins.customCarousel.length; i++ ) {
        var carousel = initCarousel({
          node: plugins.customCarousel[i],
          speed: plugins.customCarousel[i].getAttribute( 'data-speed' ),
          autoplay: plugins.customCarousel[i].getAttribute( 'data-autoplay' )
        });
      }
    }

    /**
     * WOW
     * @description Enables Wow animation plugin
     */
    if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
      new WOW().init();
    }

  });



  /*******inputfile******/

  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
    var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
      var fileName = '';
      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
  });

  /*******end inputfile******/


  /*------------------------
	Cookie
	--------------------------*/
  $(window).load(function() {
    var user = getCookie("esdi");
    if (user == "") {
      $('#cookie_div').css("display", "inherit");
    }
    $('#cookie').on('click', function(e) {
      e.preventDefault();
      checkCookie();
    });
  });

  function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    // document.cookie = cname + "=" + cvalue + "," + expires + ", path=/";
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
    $('#cookie_div').css("display", "none");
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      var cookie_ = c.trim().split('=') || [];
      if (cookie_ != [] && cname == cookie_[0]) {
        return cookie_[1];
      }
    }
    return "";
  }

  function checkCookie() {
    var user = getCookie("esdi");
    if (user == "") {
      $('#cookie_div').css("display", "none");
      setCookie("esdi", "Sitesdevelopment");
    } else {
      $('#cookie_div').css("display", "inherit");
    }
  }


  function formInput() {
    $(".clk-input input, .clk-input textarea").on("keyup", function() {
      var e = $(this);
      e.closest("label");
      e.val().length > 0 ? e.addClass("val-true") : e.removeClass("val-true");
    });
  }

  formInput();

}());