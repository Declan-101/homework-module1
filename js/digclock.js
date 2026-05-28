//create a time data function
function currentTime() {

    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (min < 10) {
        min = "0" + min;
    }

    var utchr = d.getUTCHours();

    if (utchr > 12) {
        utchr -= 12;
    }

    var timeDiff = hr - utchr;
    var timeZone;

    switch(Math.abs(timeDiff)) {
        case 4:
            timeZone = "ET";
            break;
        case 5:
            timeZone = "CT";
            break;
        case 6:
            timeZone = "MT";
            break;
        case 7:
            timeZone = "PT";
            break;
    }

    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    var clock = document.getElementById("clock");

    if(clock){
        clock.innerText = time;
    }
}

setInterval(currentTime, 1000);

currentTime();