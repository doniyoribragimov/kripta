$(function(){
    $('.header__lang').on('click', function(){
        $('.header__arrow').toggleClass('active')
        $('.header__dropdown').toggleClass('active');

        
    })

    $('.footer__lang').on('click', function(){
        $('.footer__arrow').toggleClass('active')
        $('.footer__dropdown').toggleClass('active');
    })

    $('.info-news__slider').slick({
        prevArrow: `<div class="info-news__arrow">
        <img src="images/arrow-left.png" alt="">
    </div>`,
        nextArrow: `<div class="info-news__arrow">
            <img src="images/arrow-right.png" alt="">
        </div>`,

    })

    $('.header-btn').on('click', function(){
        $('.sidebar').addClass('active')
        $('.sidebar__inner').addClass('active')
    })

    $('.close').on('click', function(){
        $('.sidebar').removeClass('active')
        $('.sidebar__inner').removeClass('active')
    })
    AOS.init({once: true});

    // traffic

    $('#classic').on('click', function(){
        $('.suggest__item').removeClass('active')
        $(this).addClass('active')
        $('.suggest__section').removeClass('premium')
        $('.suggest__section').removeClass('delux')
        $('.suggest__section').addClass('classic')
    })
    $('#premium').on('click', function(){
        $('.suggest__item').removeClass('active')
        $(this).addClass('active')
        $('.suggest__section').removeClass('delux')
        $('.suggest__section').removeClass('classic')
        $('.suggest__section').addClass('premium')
    })
    $('#delux').on('click', function(){
        $('.suggest__item').removeClass('active')
        $(this).addClass('active')
        $('.suggest__section').removeClass('classic')
        $('.suggest__section').removeClass('premium')
        $('.suggest__section').addClass('delux')
    })

    $('.calculator__box').on('click', function(e){
        let valute = $(this).attr('data-course')
        e.preventDefault()
        $('.calculator__box').removeClass('active')
        $(this).addClass('active')
        $('.valute').text(valute.toLocaleUpperCase())

    })
});


