$(document).ready(function () {
    
    $(window).on('scroll', function () {
        var scrollo = $(window).scrollTop();
        if (scrollo > 10) {
            $('#scroll').fadeOut();
            $('#diamonds-wrap p').delay(5000).fadeOut()
        } else {
            $('#scroll').fadeIn();
            $('#diamonds-wrap p').show();
        }
    });
    
    var content = ['wireframes.html', 'patterns.html', 'doodles.html', 'photoshop.html'];
    
    $('.grid li').click(function () {
        var liNr = $(this).index();
        $('#content-loader').animate({
            height: '0'
        }, 500, function () {
            $('#content-loader').load(content[liNr]);
        });
        $('#content-loader').animate({
            height: '500px'
        }, 500);
        var loaderPos = $('#content-loader').offset().top;
        $('body').animate({
            scrollTop: loaderPos - 50
        }, 1000);
    });
    
})
