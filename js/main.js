$(document).ready(function () {
    var l=$('.diamond').width();
    var lMini=$('#diamonds-wrap .mini').width();
    $('.diamond').css({height:l});
    $('#diamonds-wrap .mini').css({height:lMini});
    
    $(window).on('scroll', function () {
        var scrollo = $(window).scrollTop();
            console.log(scrollo)
    });
})