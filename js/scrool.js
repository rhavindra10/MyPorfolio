$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll > $('#ABOUTJS').offset().top - 250) {
        // console.log('ok');

        $(".boxgroup-boxcenter").css({

            'display': 'block',

            // 'transition': '0.5s'
        });
    }

    if (wScroll > $('#MYWORK').offset().top - 250) {
        // console.log('ok');

        $(".box1content h1").css({

            'display': 'block',


        });

        $("#carouselExampleInterval").css({

            'display': 'block',


        });


    }

    if (wScroll > $('#GROUPSKILL').offset().top - 250) {


        $(".title").addClass('title-animation');

        $('.title-sub').each(function (i) {
            setTimeout(function () {

                $(".title-sub").eq(i).addClass('title-sub-animation');
            }, 500 * i + 1);

        })
        $('.skillpersent').each(function (i) {
            setTimeout(function () {

                $(".skillpersent").eq(i).addClass('skillpersent-animation');

            }, 100 * i + 1);

        })
    }

});