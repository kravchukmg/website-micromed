$(document).ready(function() {

    const body = $('body')
    const popupCallback = $('#popup_callback')
    const cart = $('#cart')
    const menu = $('#menu')
    const search = $('#search')
    const tile = $('.tile')
    const counter = $('.counter')
    const documentWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    
    // MENU
    if (menu.length) {

        $(document).click(function(e) {
            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu')) {
                body.toggleClass('overflow')
                menu.toggleClass('menu--open')
            }
        })
    }

    // HEADER
    // Set the width of the 'subnav' blocks
    if ($('.subnav').length) {
        const headerMenuBtn = $('.header__menu')[0].clientWidth
        const headerLogo = $('.header__logo')[0].clientWidth
        const subnavWidth = documentWidth - headerMenuBtn - headerLogo
        $('.subnav').css('width', subnavWidth)
    }

    // POPUP CALLBACK
    if (popupCallback.length) {

        $(document).click(function(e) {
            if ($(e.target).closest('.callback__btn').length || $(e.target).hasClass('popup_callback')) {
                body.toggleClass('overflow')
                popupCallback.toggleClass('popup_callback--active')
            }
        })
    }

    // SEARCH
    if (search.length) {

        $(document).click(function(e) {
            if ($(e.target).closest('.search__btn').length || $(e.target).hasClass('search')) {
                body.toggleClass('overflow')
                search.toggleClass('search--open')
            }
        })
    }

    // CART
    if (cart.length) {

        $(document).click(function(e) {
            if ($(e.target).closest('.cart__btn').length || $(e.target).hasClass('cart')) {
                body.toggleClass('overflow')
                cart.toggleClass('cart--open')
            }
            if ($(e.target).closest('.remove_item').length) {
                $(e.target).closest('.cart__order_item').slideToggle(500)
                setTimeout(function() {
                    $(e.target).closest('.cart__order_item').remove()
                }, 1000);
            }
        })
    }

    //  Handler adding the product to the cart (TILE - CART)
    if (tile.length) {
        tile.find('.tile__cart_link').click(function(e) {
            e.preventDefault()
        })
        $(document).on('click', '.tile__cart_link', function(e) {
            const cartItem = $('<li class="cart__order_item"></li>')
            const copyTile = $(this).closest('.tile').clone()
            const removeBtn = $('<div class="remove_item"></div>')
            cartItem.append(copyTile)
            cartItem.append(removeBtn)
            cart.find('.cart__order_list').append(cartItem)
        })
    }

    // COUNTER
    if (counter.length) {

        $(document).on('click', function(e) {

            if ($(e.target).closest('.counter')) {
                const input = $(e.target).closest('.counter').find('input')[0]
    
                if ($(e.target).closest('.counter_subtract').length && input.value > 1) {
                    input.value = --input.value
                }
                if ($(e.target).closest('.counter_add').length) {
                    input.value = ++input.value
                }
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

    // Preview tabs and panes (description)
    if ($("#product__description").length) {

        const tabs = $('.product__tab_item')
        const items = $('.product__description_item')

        $("#product__description").click(function(e) {

            if ($(e.target).closest('.product__description_tab').length) {
                items.removeClass('product__description_item--active');
                $(e.target).closest('.product__description_item').addClass('product__description_item--active')
            }
            if ($(e.target).closest('.product__tab_item').length) {
                tabs.removeClass('product__tab_item--active');
                $(e.target).closest('.product__tab_item').addClass('product__tab_item--active')

                for (let i = 0; i < 4; i++) {
                    if ($(e.target).closest('.product__tab_item')[0] == tabs[i]) {
                        items.find('.product__description_pane').css('display', 'none')
                        items[i].querySelector('.product__description_pane').style.display = 'block'
                    }
                }
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

    // Product buy (show/hide the description of the "buy" block)
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

    // CATALOG page
    // Dropdown elements for filter block
    if ($('.filter').length) {
        $('.filter__dropdown').on('click', function(e) {
            if ($(e.target).hasClass('filter__dropdown_title')) {
                $(this).toggleClass('filter__dropdown--open')
                $(this).find('.filter__dropdown_description').slideToggle()
            }
        })
    }

    // Product display mode switch (grid or lines)
    if ($('#toggle').length) {
        const toggle = $('#toggle')
        const catalog = $('.product')

        toggle.on('click', function(e) {
            if ($(e.target).closest('.settings__grid_icon').length) {
                $(this).find('.settings__grid_icon').removeClass('settings__grid_icon--active')
            }
            if (!$(e.target).hasClass('settings__grid_icon--active') && $(e.target).closest('.settings__grid_icon').is('#toggle_grid')) {
                $(e.target).closest('.settings__grid_icon').addClass('settings__grid_icon--active')
                catalog.removeClass('product--line')
            }
            if (!$(e.target).hasClass('settings__grid_icon--active') && $(e.target).closest('.settings__grid_icon').is('#toggle_line')) {
                $(e.target).closest('.settings__grid_icon').addClass('settings__grid_icon--active')
                catalog.addClass('product--line')
            }
        })
    }
})