(function($) {
    var allfunction = {
        // header dropdawn message function here
        search_popup: function() {
            $(".Search-icon").on("click", function(e) {
                e.stopPropagation()
                $('.search-popup-box ,.header-area').addClass('active');
                $("body").addClass("overlay");
                $(".navbar-wrapper").removeClass("active");
                $(".toggle-bar , .sign-option").removeClass("active");
            });
            $(".close-popup").on("click", function(e) {
                e.stopPropagation()
                $(".search-popup-box ,.header-area").removeClass("active");
                $("body").removeClass("overlay");
            });

        },
        signin_popup: function() {
            $(".sign-in-click").on("click", function(e) {
                e.stopPropagation()
                $(".signin, .signin-bg, .header-area").addClass("active");
                $("body").addClass("overlay");
                $(".sign-option").removeClass("active");
            });
            $(".close-popup").on("click", function(e) {
                e.stopPropagation()
                $(".signin, .signin-bg, .header-area").removeClass("active");
                $("body").removeClass("overlay");
            });
        },
        signup_popup: function() {
            $(".sign-up-click").on("click", function(e) {
                e.stopPropagation()
                $(".signup, .signup-bg, .header-area").addClass("active");
                $("body").addClass("overlay");
                $(".sign-option").removeClass("active");
            });
            $(".close-popup").on("click", function(e) {
                e.stopPropagation()
                $(".signup, .signup-bg, .header-area").removeClass("active");
                $("body").removeClass("overlay");
            });
            $(".goto-login").on("click", function(e) {
                e.stopPropagation()
                $(".signup, .signup-bg").removeClass("active");
                $(".signin, .signin-bg").addClass("active");
            });
        },
        // MainMenu functions
        main_header: () => {
            $('.navbar-area ul li').each(function() {
                if ($(this).children('ul,div').length) {
                    $(this).children('a').append('<i class= "icofont-thin-down icon-hidden-md"></i><div class="drop-icon"><span class="icofont-rounded-right"></span></div>');
                }
            });

            $('.toggle-bar').on("click", function() {
                $(this).toggleClass('active');
                $('.navbar-wrapper').toggleClass('active');
                $('body').toggleClass('overlay');
                $('.sign-option').removeClass('active')
            });
            $('.sign-bar').on("click", function(e) {
                e.stopPropagation();
                $('body').removeClass('overlay');
            })
                // mobile responsive menu js 
                $('.sign-bar').on("click", function(e) {
                    e.stopPropagation();
                    $('.navbar-wrapper').removeClass('active');
                })
                $('.navbar-area ul li').on("click",function(e) {
                    e.stopPropagation();
                    if ($(".navbar-wrapper").hasClass("active")){
                        $(this).toggleClass('active').children('a').toggleClass('active').next().slideToggle();
                        $(this).siblings('li').removeClass('active').children('a').removeClass('active').next().slideUp();
                    }
                });
                $('.drop-icons').on("click",function(e) {
                    e.stopPropagation();
                    if ($(".navbar-wrapper").hasClass("active")){
                        $(this).next().slideToggle();
                        $(this).toggleClass('active');
                        $(this).parent('div').toggleClass('active');
                        $(this).parent('div').siblings().children('.drop-icons').removeClass('active');
                        $(this).parent('div').siblings().children('ul').slideUp();
                        $(this).parent('div').siblings().removeClass('active');
                    }
                })
                    // mega menu list append icon js here
                $('.mega-menu-list').each(function() {
                    if ($(this).children('ul').length) {
                        $(this).children('.drop-icons').append('<div class="drop-icon"></span><span class="icofont-rounded-right">');
                    }
                });
            // sign-in sign-up dropdown here
            $('.sign-bar').on("click", function(e) {
                e.stopPropagation();
                $('.sign-option').toggleClass('active')
                $('.navbar-wrapper, .toggle-bar').removeClass('active');
            })
            // dropdown slide-toggle js

        },
        // weekly_tabs js activation
        weekly_tabs: () => {
            var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
                triggerTabList.forEach(function (triggerEl) {
                var tabTrigger = new bootstrap.Tab(triggerEl)

                triggerEl.addEventListener('click', function (event) {
                    event.preventDefault()
                    tabTrigger.show()
                })
            })
        },
        // animate_js: () =>{
            
        // },
        nice_select: () =>{
            if ($('select').length) {
                $('select').niceSelect();
            }
        },
        data_table: () =>{
            $('#table_id').DataTable({
                responsive: true,
                "searching": false,
                "paging": false,
                "info": false,
                "lengthChange":false,
                "autoWidth":false,
            });
        },
        light_slider: ()=>{
            if ($('#lightSlider').length) {
                $('#lightSlider').lightSlider({
                    gallery: true,
                    item: 1,
                    loop:true,
                    slideMargin:0,
                    thumbItem: 3
                });
            }
        },
        mouse_move: ()=>{
            $( ".ct-lg-card , .proc-single-card, .proc-video-card, .author-two-single-card" ).mouseenter(function(){
                    $(this).removeClass("active").siblings().addClass('active');
                    $(".without-img").removeClass('active');
            });
            $( ".ct-lg-card , .proc-single-card, .proc-video-card , .author-two-single-card" ).mouseleave(function(){
                    $(".ct-lg-card , .proc-single-card , .proc-video-card, .author-two-single-card").removeClass("active");
                    $(".without-img").removeClass('active');
            });
        },
        isotop: ()=>{
            if ($('.grid').length) {
                // init Isotope
                var $grid = $('.grid').isotope({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                        // use element for option
                        columnWidth: '.grid-sizer'
                    }
                });
                $grid.imagesLoaded().progress(function() {
                    $grid.isotope('layout')
                });
                // filter items on button click
                $('.filter-button-group').on( 'click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });
                    $(this).addClass("active").siblings().removeClass("active");
                });
            }
            if ($('.grid2').length) {
                var $grid2 = $('.grid2').isotope({
                    itemSelector: '.grid-item2',
                    percentPosition: true,
                    masonry: {
                        // use element for option
                        columnWidth: '.grid-sizer2',
                        gutter: 30
                      }
                });
                $grid2.imagesLoaded().progress(function() {
                    $grid2.isotope('layout')
                });
                // filter items on button click
                $('.filter-button-group').on( 'click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $grid2.isotope({ filter: filterValue });
                    $(this).addClass("active").siblings().removeClass("active");
                });
            }
            if ($('.grid3').length) { 
                var $grid3 = $('.grid3').isotope({
                    itemSelector: '.grid-item3',
                    percentPosition: true,
                    masonry: {
                        // use element for option
                        columnWidth: '.grid-sizer3',
                        gutter: 30,
                    }
                });
                $grid3.imagesLoaded().progress(function() {
                    $grid3.isotope('layout')
                });
                // filter items on button click
                $('.filter-button-group').on( 'click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $grid3.isotope({ filter: filterValue });
                    $(this).addClass("active").siblings().removeClass("active");
                });
            }

            // Gym Volt
            if ($('.gym-fturPost-wrapper').length) {
                var $grid3 = $('.gym-fturPost-wrapper').isotope({
                    itemSelector: '.gym-fturPost-item',
                    layoutMode: 'fitRows',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.gym-fturPost-GridSizer'
                    }
                })
            }


        },
        video_popup: ()=>{
            $('.popup-youtube, .popup-youtube2, .popup-youtube3, .vimo1, .vimo2, .vimo3, .vimo4, .vimo5, .vimo6, .vimo7, .vimo8, .vimo9, .vimo10, .vimo11, .vimo12, .vimo13').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },
        rpt_carousel: ()=>{
            if ($('.rpt-carousel').length) { 
                var owlSelector1 = $(".rpt-carousel");
                // Go to the next item
                $(".next-one").on("click",function() {
                    owlSelector1.trigger("next.owl.carousel");
                });
                // Go to the previous item
                $(".prev-one").on("click",function() {
                    owlSelector1.trigger("prev.owl.carousel", [300]);
                });
            }
        },
        // dark light js code here
        dark_light: () => {
            /** Dark Light Version*/
            var html = document.querySelector('html'),
                darkLight = document.querySelectorAll('.dark-light')
            darkLight.forEach(color => {
                color.addEventListener('click', function() {
                    if (html.getAttribute('data-theme') === 'light') {
                        html.setAttribute('data-theme', 'dark')
                        localStorage.setItem('selected-theme', 'dark');0
                    } else {
                        html.setAttribute('data-theme', 'light')
                        localStorage.setItem('selected-theme', 'light');
                    }
                })
            })    
        },
        // img to svg code here
        imgToSvg: function() {
            function jetix_svg() {
                jQuery('img').each(function() {
                    var jQueryimg = jQuery(this);
                    var imgClass = jQueryimg.attr('class');
                    var imgURL = jQueryimg.attr('src');
                    jQuery.get(imgURL, function(data) {
                        // Get the SVG tag, ignore the rest
                        var jQuerysvg = jQuery(data).find('svg');

                        // Add replaced image's classes to the new SVG
                        if (typeof imgClass !== 'undefined') {
                            jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
                        }
                        jQuerysvg = jQuerysvg.removeAttr('xmlns:a');
                        // Replace image with new SVG
                        jQueryimg.replaceWith(jQuerysvg);

                    }, 'xml');

                });
            }
            $(document).each(function() {
                jetix_svg();
            })
        },

         

        // StopPropagations elements
        stopPropagationElements: () => {
            $('.mega-blog-menu').on("click",function(e) {
                e.stopPropagation()
            })
        },
        // Document click to hide elements
        elementHide: () => {
            $(document).on("click",function() {
                $('.sign-option').removeClass('active')
            })
        },
        Xzoom:() => {
            //apply
            $("#image1").zoomIt(); 
            $("#image2").zoomIt(); 
            $("#image3").zoomIt(); 
            $("#image4").zoomIt();  
 
        },
        init: function() {
            // allfunction.elementHide()
            allfunction.imgToSvg()
            allfunction.dark_light()
            allfunction.main_header()
            allfunction.search_popup()
            allfunction.signin_popup()
            allfunction.signup_popup()
            allfunction.weekly_tabs()
            allfunction.stopPropagationElements()
            allfunction.elementHide()
            allfunction.nice_select()
            allfunction.light_slider()
            allfunction.rpt_carousel()
            // allfunction.animate_js()
            allfunction.video_popup()
            allfunction.mouse_move()
            allfunction.isotop()
            allfunction.Xzoom()
            allfunction.data_table()


            // Update
        },
    }

    $(document).ready(function() {
        allfunction.init();
    });

})(jQuery);
$(window).load(function() {
    $('.preloader-wrapper').addClass('hide');
    $('body').addClass('remover');
    anime({
        targets: '#place-heading path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 100 },
        direction: 'alternate',
        loop: true
    });
});


AOS.init({
    duration: 1000,
    once: true,
}); 


anime({
    targets: '#banner path',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeOutSine', duration: 700}
    ],
    delay: anime.stagger(200, {grid: [30, 50], from: 'center'}),
    direction: 'alternate',
    loop: true
});
anime({
    targets: '#ftr-dots path',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeOutSine', duration: 700}
    ],
    delay: anime.stagger(200, {grid: [30, 30], from: 'center'}),
    direction: 'alternate',
    loop: true
});
anime({
    targets: '#newsvolt path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 100 },
    direction: 'alternate',
    loop: true
});
anime({
    targets: '#array-one path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
});
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.getElementsByClassName('input-number-wrapper')

    function incInputNumber(input, step) {
        var val = +input.value
        if (isNaN(val)) val = 0
        val += step
        input.value = val > 0 ? val : 0
    }
    Array.prototype.forEach.call(inputs, function(el) {
        var input = el.getElementsByTagName('input')[0]

        el.getElementsByClassName('increase')[0].addEventListener('click', function() { incInputNumber(input, 1) })
        el.getElementsByClassName('decrease')[0].addEventListener('click', function() { incInputNumber(input, -1) })
    })
});
// no ui slider js
var tooltipSlider = document.getElementById('slider-container');
jQuery(document).ready(function () {
    if ($('#slider-container').length) {
        noUiSlider.create(tooltipSlider, {
            start: [0, 1000],
            tooltips: [true, true],
            connect: true,
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                prefix: '$',
                decimals: 0
            }),
        });
    }
});