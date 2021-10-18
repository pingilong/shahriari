// Time

function setTime() {
    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
};
const time = setInterval(setTime,100);

// day of week

function setDay() {
    switch (new Date().getDay()) {
        case 0:
            day = "sun";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 6:
            day = "sat";
    }
    document.getElementById(day).classList.add('active');
};
const dayInterval = setInterval(setDay,100);