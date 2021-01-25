const alarmSubmit = document.getElementById('alarmsubmit');

//Alarm set event listner
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('alarm.mp3');

function ringBell() {
    audio.play();
}
//Adding error popup to alarm clock
function show() {
    let popUp = document.getElementById('popUp');
    popUp.classList.add('show');
    setTimeout(function () { popUp.classList.remove('show') }, 5000)
}

//Adding success popup to alarm clock
function success(){
    let success = document.getElementById('success');
    success.classList.add('show')
    setTimeout(function () { success.classList.remove('show') }, 5000)
}


//setalarm function
function setAlarm(e) {
    e.preventDefault();
    let alarm = document.getElementById('Alarm');
    let alarmDate = new Date(alarm.value);
    // console.log(`Setting Alarm for ${alarmDate} ..... `)
    let now = new Date();

    //Adding validation to alarm value
    if (alarm.value === "") {
        // console.log('Please add a valid time');
        show();

    } else {
        let regex = /[0-9]{4}-[0-2]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}/;
        if (regex.test(alarm.value) === true) {
            let timeToAlarm = alarmDate - now;
            console.log(timeToAlarm)
            if (timeToAlarm > 0) {
                success();
                var timeout = setTimeout(() => {
                    console.log('ringing alarm');
                    ringBell();
                }, timeToAlarm);
            }
            if (timeToAlarm > 0) {
                var setint = setInterval(() => {
                    ringBell();
                }, timeToAlarm);
            } else {
                //console.log('Please add a valid time');
                show();

            }

            // stoping alarm event listner
            let stopAlarm = document.getElementById('stopalarm');
            stopAlarm.addEventListener('click', (e) => {

                clearTimeout(timeout);
                clearInterval(setint);
            });

        } else {
            //console.log('Please add a valid time');
           show();
        }
    }
}









