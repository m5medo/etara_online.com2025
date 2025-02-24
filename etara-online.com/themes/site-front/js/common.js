/**************************************************************************
* Common js

**************************************************************************/
jQuery(document).ready(function() {
    "use strict";
    /* Navigation */
    jQuery("#nav > li").hover(function() {
        var el = jQuery(this).find(".level0-wrapper");
        el.hide();
        el.css("left", "0");
        el.stop(true, true).delay(150).fadeIn(300, "easeOutCubic");
    }, function() {
        jQuery(this).find(".level0-wrapper").stop(true, true).delay(300).fadeOut(300, "easeInCubic");
    });
    var scrolled = false;
    jQuery("#nav li.level0.drop-menu").mouseover(function() {
        if (jQuery(window).width() >= 740) {
            jQuery(this).children('ul.level1').fadeIn(100);
        }
        return false;
    }).mouseleave(function() {
        if (jQuery(window).width() >= 740) {
            jQuery(this).children('ul.level1').fadeOut(100);
        }
        return false;
    });
    jQuery("#nav li.level0.drop-menu li").mouseover(function() {
        if (jQuery(window).width() >= 740) {
            jQuery(this).children('ul').css({
                top: 0,
                left: "165px"
            });
            var offset = jQuery(this).offset();
            if (offset && (jQuery(window).width() < offset.left + 325)) {
                jQuery(this).children('ul').removeClass("right-sub");
                jQuery(this).children('ul').addClass("left-sub");
                jQuery(this).children('ul').css({
                    top: 0,
                    left: "-167px"
                });
            } else {
                jQuery(this).children('ul').removeClass("left-sub");
                jQuery(this).children('ul').addClass("right-sub");
            }
            jQuery(this).children('ul').fadeIn(100);
        }
    }).mouseleave(function() {
        if (jQuery(window).width() >= 740) {
            jQuery(this).children('ul').fadeOut(100);
        }
    });


    /* Bestsell slider */
    jQuery("#bestsell-slider .slider-items").owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 4 items betweem 900px and 601px
        itemsTablet: [640, 2], //3 items between 600 and 0;
        itemsMobile: [375, 2],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    jQuery(".category-slider-1").owlCarousel({
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1024, 5], //4 items between 1024px and 901px
        itemsDesktopSmall: [900, 4], // 4 items betweem 900px and 601px
        itemsTablet: [640, 2], //3 items between 600 and 0;
        itemsMobile: [375, 2],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    jQuery(".category-slider-2").owlCarousel({
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1024, 5], //4 items between 1024px and 901px
        itemsDesktopSmall: [900, 4], // 4 items betweem 900px and 601px
        itemsTablet: [640, 2], //3 items between 600 and 0;
        itemsMobile: [375, 2],
        navigation: true,
        navigationText: ["<a class=\"flex-prev cats\"></a>", "<a class=\"flex-next cats\"></a>"],
        slideSpeed: 500,
        pagination: false
    });

    /* Featured slider */
    jQuery(".featured-slider .slider-items").owlCarousel({
        // autoPlay: true,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1024px and 901px
        itemsDesktopSmall: [900, 4], // 4 items betweem 900px and 601px
        itemsTablet: [640, 2], //3 items between 600 and 0;
        itemsMobile: [375, 2],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });

    /* Brand logo slider */
    jQuery("#brand-logo-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 4], // 3 items betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 0;
        itemsMobile: [320, 2],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Category desc slider */
    jQuery("#category-desc-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Related products slider */
    jQuery("#related-products-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 3], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [768, 3], //2 items between 600 and 0;
        itemsMobile: [375, 2],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Upsell products slider */
    jQuery("#upsell-products-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 3], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0;
        itemsMobile: [375, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Mobile menu */
    jQuery("#mobile-menu").mobileMenu({
        MenuWidth: 300,
        SlideSpeed: 300,
        WindowsMaxWidth: 767,
        PagePush: true,
        FromLeft: false,
        Overlay: true,
        CollapseMenu: true,
        ClassName: "mobile-menu"
    });
    /* side nav categories */
    if (jQuery('.subDropdown')[0]) {
        jQuery('.subDropdown').on("click", function() {
            jQuery(this).toggleClass('plus');
            jQuery(this).toggleClass('minus');
            jQuery(this).parent().find('ul').slideToggle();
        });
    }
    jQuery.extend(jQuery.easing, {
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
    });
    (function(jQuery) {
        jQuery.fn.extend({
            accordion: function() {
                return this.each(function() {
                    function activate(el, effect) {
                        jQuery(el).siblings(panelSelector)[(effect || activationEffect)](((effect == "show") ? activationEffectSpeed : false), function() {
                            jQuery(el).parents().show();
                        });
                    }
                });
            }
        });
    })(jQuery);
    jQuery(function(jQuery) {
        jQuery('.accordion').accordion();
        jQuery('.accordion').each(function(index) {
            var activeItems = jQuery(this).find('li.active');
            activeItems.each(function(i) {
                jQuery(this).children('ul').css('display', 'block');
                if (i == activeItems.length - 1) {
                    jQuery(this).addClass("current");
                }
            });
        });
    });
    /* Top Cart js */
    function slideEffectAjax() {
        jQuery('.top-cart-contain').mouseenter(function() {
            jQuery(this).find(".top-cart-content").stop(true, true).fadeIn();
        });
        jQuery('.top-cart-contain').mouseleave(function() {
            jQuery(this).find(".top-cart-content").stop(true, true).fadeOut();
        });
    }
    jQuery(document).ready(function() {
        slideEffectAjax();
    });
    /*  sticky header  */
    jQuery(window).scroll(function() {
        // alert(jQuery(this).scrollTop());
        jQuery(this).scrollTop() > 200 ? jQuery("nav").addClass("sticky-header") : jQuery("nav").removeClass("sticky-header")
        jQuery(this).scrollTop() > 200 ? jQuery(".top-cart-contain").addClass("sticky-topcart") : jQuery(".top-cart-contain").removeClass("sticky-topcart")
        // jQuery(this).scrollTop() > 1 ? jQuery(".top-link-wishlist").addClass("sticky-wishlist") : jQuery(".top-link-wishlist").removeClass("sticky-wishlist")
    });
});
/*  UItoTop */
jQuery.fn.UItoTop = function(options) {
    var defaults = {
        text: '',
        min: 200,
        inDelay: 600,
        outDelay: 400,
        containerID: 'toTop',
        containerHoverID: 'toTopHover',
        scrollSpeed: 1800,
        easingType: 'ease'
    };
    var settings = jQuery.extend(defaults, options);
    var containerIDhash = '#' + settings.containerID;
    var containerHoverIDHash = '#' + settings.containerHoverID;
    jQuery('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
    jQuery(containerIDhash).hide().on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, settings.scrollSpeed, settings.easingType);
        jQuery('#' + settings.containerHoverID, this).stop().animate({
            'opacity': 0
        }, settings.inDelay, settings.easingType);
        return false;
    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
        jQuery(containerHoverIDHash, this).stop().animate({
            'opacity': 1
        }, 600, 'ease');
    }, function() {
        jQuery(containerHoverIDHash, this).stop().animate({
            'opacity': 0
        }, 700, 'ease');
    });
    jQuery(window).scroll(function() {
        var sd = jQuery(window).scrollTop();
        if (typeof document.body.style.maxHeight === "undefined") {
            jQuery(containerIDhash).css({
                'position': 'absolute',
                'top': jQuery(window).scrollTop() + jQuery(window).height() - 50
            });
        }
        if (sd > settings.min) jQuery(containerIDhash).fadeIn(settings.inDelay);
        else jQuery(containerIDhash).fadeOut(settings.Outdelay);
    });
};
/* mobileMenu */
var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
jQuery(window).on("load", function() {
    if (isTouchDevice) {
        jQuery('#nav a.level-top').on("click", function(e) {
            jQueryt = jQuery(this);
            jQueryparent = jQueryt.parent();
            if (jQueryparent.hasClass('parent')) {
                if (!jQueryt.hasClass('menu-ready')) {
                    jQuery('#nav a.level-top').removeClass('menu-ready');
                    jQueryt.addClass('menu-ready');
                    return false;
                } else {
                    jQueryt.removeClass('menu-ready');
                }
            }
        });
    }
    jQuery().UItoTop();
});