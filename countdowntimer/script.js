function countDown() {
    const userDate = document.getElementById("user-date").value;
    const newUserDate = new Date(userDate);
    const currentDate = new Date();
    console.log(currentDate)

    const totalSeconds = (newUserDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    setInterval(countDown, 1000)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

