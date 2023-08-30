const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function updateTime() {
    const dateToday = new Date();
    const hr = dateToday.getHours();
    const min = dateToday.getMinutes();
    const sec = dateToday.getSeconds();

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
}

const clock = setInterval(updateTime, 1000);