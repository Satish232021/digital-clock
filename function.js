const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');

updateClock();

function updateClock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if ( h > 12 ){
        h = h - 12;
        ampm = 'PM';
    }

    /* ternary operator used here for simpler and easy way ...yup.. */
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampmElement.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)


}