$(function () {
    $('.circle-graph1').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: 'rgb(95, 255, 255)',
        trackColor: 'rgb(14,53,92)',
        size: 150,
        animate: 4000,
        rotate: 0
    });
});

$(function () {
    $('.circle-graph2').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#BB09AC',
        trackColor: 'rgb(14,53,92)',
        size: 150,
        animate: 4000,
        rotate: 0
    });
});

$(function () {
    $('.circle-graph3').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: 'rgb(255, 0, 0)',
        trackColor: 'rgb(14,53,92)',
        size: 150,
        animate: 4000,
        rotate: 0
    });
});

$(function () {
    $('.circle-graph4').easyPieChart({
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'butt',
        barColor: 'rgb(114, 0, 180)',
        trackColor: 'rgb(14,53,92)',
        size: 150,
        animate: 4000,
        rotate: 0
    });
});


$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// $(function () {
//     $('.chart').easyPieChart({
//         //your options goes here
//     });
// });



// tanggalan
(function () {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toDateString();
}());
// fungsi clock jam
(function () {

    var clockElement = document.getElementById("clock");

    function updateClock(clock) {
        clock.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(function () {
        updateClock(clockElement);
    }, 1000);

}());