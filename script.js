window.onload = function () {

    var seconds = 00;
    var milli = 00;
    var minutes = 00;
    var timeMinutes = document.getElementById('minutes');
    var timeSeconds = document.getElementById('seconds');
    var timeMilli = document.getElementById('milli');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var interval;

    start.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    stop.onclick = function() {
        clearInterval(interval);
    }

    reset.onclick = function() {
        clearInterval(interval);
        milli = "00";
        seconds = "00";
        minutes = "00";
        timeSeconds.innerHTML = seconds;
        timeMilli.innerHTML = milli;
        timeMinutes.innerHTML = minutes;
    }

    function startTimer () {
        milli++;

        if(milli < 9) {
            timeMilli.innerHTML = "0" + milli;
        }

        if(milli > 9){
            timeMilli.innerHTML = milli;
        }

        if(milli > 99) {
            seconds++;
            timeSeconds.innerHTML = "0" + seconds;
            milli = 0;
            timeMilli.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            timeSeconds.innerHTML = seconds;
        }

        if(seconds > 59) {
            minutes++;
            timeMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            timeSeconds.innerHTML = "0" + 0;
        }

        if(minutes > 9){
            timeMinutes.innerHTML = minutes;
        }
    }
}