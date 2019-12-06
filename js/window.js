$(document).ready(function () {
    var i = $('#btn-val').val();

    $("#btn-nav").click(function () {
        // console.log(i);

        if (i == 0) {
            $(".btnnav").animate({

                'left': '-160px',

                // 'transition': '0.5s'
            }, 500);
            i++;
            $('#classAnim').val(1);

        } else if (i == 1) {

            $(".btnnav").animate({

                'left': '-150px',

                // 'transition': '0.5s'
            }, );

            i--;
            $('#classAnim').val(0);
        }



    });




});