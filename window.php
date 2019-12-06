<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="fonts/font.css" />
    <link rel="stylesheet" type="text/css" href="css/windowindex.css" />
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

</head>


<style>

</style>
<div class="window">

    <section class="btngroup ">

        <input type="hidden" id="btn-val" value="0">
        <button id="btn-nav" class="btnnav ">
            <h1 class="btnnav-text ">Click</h1>
            <span class="glyphicon glyphicon-chevron-right span " style="display: none;" aria-hidden="true"></span>

        </button>



    </section>
    <section>

        <div>
            <h1 class="textbox">MY PORTFOLIO</h1>
            <div class="section-left">
                <div class="shape-left ">
                    <span id="clock" class="clock">Clock</span>
                </div>
                <div class="shapeglow-left"></div>
            </div>
            <div class="section-right">
                <div class="shape-right ">
                    <span id="demo" class="tanggal">TANGGAL</span>
                </div>
                <div class="shapeglow-right"></div>
            </div>
        </div>

    </section>

    <section style="display:none">

        <input type="hidden" id="btnchangeval" value="0">
        <a href="#" id="clickbutton1" class="smallbtn1">
            <button class="btnsmall portofolio">PORTFOLIO</button>
        </a>
        <a href="#" id="clickbutton2" class="smallbtn2">
            <button class="btnsmall cv">CURICULUM VITAE</button>
        </a>
        <a href="#" id="clickbutton3" class="smallbtn3">
            <button class="btnsmall galery">3</button>
        </a>
        <a href="#" id="clickbutton4" class="smallbtn4">
            <button class="btnsmall about">4</button>
        </a>
    </section>

</div>
<!-- Latest compiled and minified JavaScript -->

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>

<script src="js/window.js"></script>

<script>
    // tanggalan
    (function() {
        var d = new Date();
        document.getElementById("demo").innerHTML = d.toDateString();
    }());
    // fungsi clock jam
    (function() {

        var clockElement = document.getElementById("clock");

        function updateClock(clock) {
            clock.innerHTML = new Date().toLocaleTimeString();
        }

        setInterval(function() {
            updateClock(clockElement);
        }, 1000);

    }());
</script>


</html>