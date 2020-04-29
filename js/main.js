$(document).ready(function() {

    const body = $('body');
    
    // MENU
    if ($('#menu').length) {

        const menu    = $('#menu');
        const menuBtn = $('.menu__btn');

        $(document).click(function(e) {

            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu')) {
                body.toggleClass('overflow')
                menuBtn.toggleClass('menu__btn--open')
                menu.toggleClass('menu--open')
            }
        })
    }

    // SEARCH
    if ($('#search').length) {

        const search = $('#search');

        $(document).click(function(e) {

            if ($(e.target).closest('.search__btn').length || $(e.target).hasClass('search')) {
                body.toggleClass('overflow')
                search.toggleClass('search--open')
            }
        })
    }

    // CARD
    if ($('#card').length) {

        const card = $('#card');

        $(document).click(function(e) {

            if ($(e.target).closest('.card__btn').length || $(e.target).hasClass('card')) {
                body.toggleClass('overflow')
                card.toggleClass('card--open')
            }
        })
    }

    
    // HOME main slider
    if ($('.home__slider_list').length) {
        $('.home__slider_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            dots: true,
            dotsClass: 'home__slider_pagination',
            // fade: true,
            // autoplay: true,
            // infinite: true,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        infinite: true
                    }
                },
            ]
        });
    }

    // HOME tile section (sale)
    if ($('.slider__tile_sale').length) {
        $('.slider__tile_sale').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }

    // HOME tile section (new)
    if ($('.slider__tile_new').length) {
        $('.slider__tile_new').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }

    // HOME tile section (top)
    if ($('.slider__tile_top').length) {
        $('.slider__tile_top').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }

    // PRODUCT PAGE
    // Preview tabs (photo)
    if ($("#product__preview").length) {

        let img, 
            container = $('.product__photo_inner')

        $("#product__preview").click(function(e) {
            if ($(e.target).closest('.product__preview_item')) {
                img = $(e.target).closest('.product__preview_item').find('.product__preview_img')
                src = img.attr('src')
                container.find('img').attr('src', src)
            }
        })
    }

    // Preview tabs (description)
    if ($("#product__description").length) {

        let items = $('.product__description_item')
        let tabs = $('.product__description_tab')
        let panes = $('.product__description_pane')

        $("#product__description").click(function(e) {

            if ($(e.target).closest('.product__description_tab').length) {
                items.removeClass('product__description_item--active');
                $(e.target).closest('.product__description_item').addClass('product__description_item--active')
            }
        })
    }

    // Similar product slider
    if ($('.new__list').length) {
        $('.new__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
            ]
        });
    }

    // Similar product slider
    if ($('.similar__body_list').length) {
        $('.similar__body_list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
            ]
        });
    }

    // Product buy (description)
    if ($('.product__buy_body_description').length) {
        let btn = $('.product__buy_body_more')
        let description = $('.product__buy_body_description')
        let paragraph = description.find('.product__buy_body_description_paragraph')
        let height = parseFloat(paragraph.css("line-height")) * 3

        description.css({"height": `${height}px`})

        btn.on('click', function(e) {
            if($(e.target).closest('.product__buy_body_more') && description.hasClass('product__buy_body_description--toggled')) {
                description.removeClass('product__buy_body_description--toggled')
                description.animate({"height": `${paragraph.innerHeight()}px`})
            } else {
                description.addClass('product__buy_body_description--toggled')
                description.animate({"height": "60px"})
            }
        })
    }
})