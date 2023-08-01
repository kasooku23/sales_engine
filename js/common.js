// ハンバーガーメニュー
$(function(){
    $('.js-hamburger-btn').on('click', function() {
        $('.js-hamburger').toggleClass('js-active');
        return false;
    });

    $('.js-hamburger-remove').on('click', function() {
        $('.js-hamburger').removeClass('js-active');
    });
});

// スクロール
$(function(){
    $('a[href^="#"]').click(function(){
        var adjust = $('header').innerHeight(),
            speed = 500,
            href= $(this).attr("href"),
            target = $(href == "#" || href == "" ? 'html' : href),
            position = target.offset().top - adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

// faq
$(function(){
    $('.js-faq-btn').click(function(){
        $(this).toggleClass('js-active');
        $(this).children('.p-faq__answer').slideToggle();
    });
});

// form
$(function(){
    $('.js-btn-apply').click(function(){
        $('#tab-contact').removeClass('js-active');
        $('#form-contact').removeClass('js-active');
        $('#tab-apply').addClass('js-active');
        $('#form-apply').addClass('js-active');
    });
    $('.js-btn-contact').click(function(){
        $('#tab-apply').removeClass('js-active');
        $('#form-apply').removeClass('js-active');
        $('#tab-contact').addClass('js-active');
        $('#form-contact').addClass('js-active');
    });
});

$(window).bind("load", function(){
    if(document.URL.match(/kind=contact/)) {
        $('#tab-apply').removeClass('js-active');
        $('#form-apply').removeClass('js-active');
        $('#tab-contact').addClass('js-active');
        $('#form-contact').addClass('js-active');
    }else{
        $('#tab-contact').removeClass('js-active');
        $('#form-contact').removeClass('js-active');
        $('#tab-apply').addClass('js-active');
        $('#form-apply').addClass('js-active');
    }
});

function UpdateState() {
    value = $('#check01:checked').prop('checked');
    if (value == true) {
        $('#js-textarea').addClass('js-inactive');
    }
    value = $('#check02:checked').prop('checked');
    if (value == true) {
        $('#js-textarea').removeClass('js-inactive');
    }
}

$(document).ready(function () {
    UpdateState();
})

$(document).ready(function () {
    $("*[name='お問い合わせの目的']").click(function () {
        UpdateState();
    })
})
