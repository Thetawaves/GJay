$(document).ready(function () {
    
    // Menu underline on hover effect //
    
    $('ul li').mouseenter(function () {
      $(this).find('#hover-first').stop().animate({
        width: '100%'
      },500,'linear');
      $(this).find('#hover-second').stop().delay(100).animate({
        width: '100%'
      },500,'linear');
    });
    
    $('ul li').mouseleave(function () {
      $(this).find('#hover-first').stop().delay(100).animate({
        width: 0
      },250,'linear');
      $(this).find('#hover-second').stop().animate({
        width: 0
      },250,'linear');
    });
    
    // Change Navbar colour on scroll //
    
    var fromTop;
    
    $(window).on('scroll', function () {
        fromTop = $(window).scrollTop();
        if (fromTop >= 130) {
            $('nav').addClass('scrolled');
            $('header nav ul li a').addClass('scrolledtext')
        } else {
            $('nav').removeClass('scrolled');
            $('header nav ul li a').removeClass('scrolledtext')
        }
    });
    
    // Skills Bar Animation //
    
    var i;
    var barsNr = $('#skills-container #bars .skill-bar').length;

    $(window).on('scroll', function () {
        var skillTop = $(window).scrollTop() - $('#skills-container').offset().top;
        if (skillTop > -350) {
            for (i = 0; i < barsNr; i++) {
                var barHeight = $('#skills-container #bars .skill-bar#bar' + i).attr('bar-height');
                $('#skills-container #bars .skill-bar#bar' + i).delay(i * 150).animate({height: barHeight}, 250);
            };
        };
    });
    
    // Smooth Scroll to section //
    
    $('a.scroll').on('click', function(e){     
        e.preventDefault();
        var position = $(this.hash).offset().top;
        $('html,body').animate({scrollTop: position - 100}, 500);
    });
    
    // Hamburger Menu animations //
    
    var openClose = true;
    
    $('#hamburger, #side-menu ul li').click(function () {
        if (openClose == true) {
            $('#hamburger #top').css({
                'transform': 'rotate(45deg)',
                'top': '28px'
            });
            $('#hamburger #menu, #hamburger #mid').css({
                'opacity': '0'
            });
            $('#hamburger #bot').css({
                'transform': 'rotate(-45deg)',
                'top': '29px'
            });
            $('#side-menu').css({
                'right': '0'
            });
            $('#side-menu #hamburger').css({
                'left': 'auto',
                'right': '10px'
            });
            openClose = false;
        } else {
            $('#hamburger #top').css({
                'transform': 'rotate(0)',
                'top': '15px'
            });
            $('#hamburger #menu, #hamburger #mid').css({
                'opacity': '1'
            });
            $('#hamburger #bot').css({
                'transform': 'rotate(0)',
                'top': '33px'
            });
            $('#side-menu').css({
                'right': '-100%'
            });
            $('#side-menu #hamburger').css({
                'left': '-100px',
                'right': 'auto'
            });
            openClose = true;
        };
        
    });
    
})
