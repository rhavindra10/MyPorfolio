$(document).ready(function () {
    var i = $('#btn-val').val();

    $("#btn-nav").click(function () {
        // console.log(i);

        if (i == 0) {
            // mengaktifkan display yang none

            $(".group1-style-1").css({

                'display': 'block'

            });
            $(".group2-style-1").css({

                'display': 'block'

            });

            $(".group3-style-1").css({

                'display': 'block'

            });

            $(".groupskill").css({
                'display': 'block'


            });
            $(".group4-style-1").css({

                'display': 'block'

            });


            // akhir
            $(".section-left").css({

                'width': '0%',
                'opacity': '0',
                'transition': '0.5s'

            });
            $(".section-left").fadeOut(500);
            $(".section-right").css({

                'width': '0%',
                'opacity': '0',
                'transition': '0.5s'

            });

            $(".section-right").fadeOut(500);

            $(".textbox").animate({

                'opacity': '0',
                'top': '-10%',
                'font-size': 'toggle',
                'display': 'hidden'
            }, 500);

            $(".btnnav").animate({
                'width': '150px',
                'height': '150px',
                'opacity': '0'
                // 'position': 'fixed',
                // 'transform': 'translateX(-50%)',
                // 'left': '-70%',


                // 'transition': '0.5s'
            }, 500);


            $(".btngroup").animate({
                'width': '150px',
                'height': '0px',
                'top': '50%',
                'position': 'fixed',


                // 'transition': '0.5s'
            }, 100);


            $(".btnnav-text").fadeOut(100);

            $(".span").css({

                // 'display': 'block',


            });


            // $(".btngroup").addClass("change")
            i++;
            $('#classAnim').val(1);

        } else if (i == 1) {

            $(".btnnav").animate({

                'left': '-55%',

                // 'transition': '0.5s'
            }, 500);
            // $(".btngroup").removeClass("change");
            i++;
            $('#classAnim').val(0);
        } else if (i == 2) {

            $(".btnnav").animate({

                'left': '-70%',

                // 'transition': '0.5s'
            }, 500);
            // $(".btngroup").removeClass("change");
            i--;
            $('#classAnim').val(0);
        }




    });




});