$(function(){
        var HeaderTop = $('#header').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $('#header').css({position: 'fixed', top: '0px'});
                } else {
                        $('#header').css({position: 'relative', top: '0px'});
                }
        });

        $('nav li a').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop':  ($target.offset().top - 93)
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

  });