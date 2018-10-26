"use strict";
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
      pageLoader: $(".page-loader"),
    };
  $window.on('load', function () {
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

    //Page loader
    if (plugins.pageLoader.length && !isNoviBuilder) {
        var loader = setTimeout(function () {
          plugins.pageLoader.addClass("loaded");
          $window.trigger("resize");
        }, 200);
    }

    // Multitoggles
    if(plugins.multitoggle.length) {
      multitoggles();
    }

  });

  $(function () {
    isNoviBuilder = window.xMode;
  });

}());


