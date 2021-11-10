var Elmonths = document.getElementById("months");
var Eldays = document.getElementById("days");
var Elhours = document.getElementById("hours");
var Elminuts = document.getElementById("minuts");
var Elseconds = document.getElementById("seconds");


var currentDate = new Date();
var newYear = (currentDate.getFullYear() + 1).toString();
var newYearsDate = new Date("1 Jan " + newYear);


function countDown() {
    var currentDate = new Date();
    var se = Math.floor((newYearsDate - currentDate) / 1000);
    var mi = Math.floor(se / 60);
    var ho = Math.floor(mi / 60);
    var da = Math.floor(ho / 24);
    var mo = Math.floor(da / 30);

    var second = formatTime((se % 60));
    var minute = formatTime(mi % 60);
    var hour = formatTime(ho % 24);
    var day = formatTime(da % 30);
    var month = formatTime(mo);

    Elmonths.innerHTML = month;
    Eldays.innerHTML = day;
    Elhours.innerHTML = hour;
    Elminuts.innerHTML = minute;
    Elseconds.innerHTML = second;
}

function formatTime(num) {
    num = num.toString();
    if (num.length < 2) {
        num = "0" + num;
    }
    return num;
}
countDown();
setInterval(countDown, 1000);
