 let newYears = "01 Jan 2022";


function countDown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call

countDown();
setInterval(countDown, 1000)

