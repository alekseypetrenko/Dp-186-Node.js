function countdown(time) {
    let sign = "+";
    time < 0 ? sign = "-" : sign = "+";

    time = Math.abs(time)
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time % (60*60*1000)) / 60000);
    let hours = Math.floor((time / (1000 * 60 * 60)));

    hours = (hours < 10) ? hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return `${sign}${hours}:${minutes}:${seconds}`

}


console.log(countdown(-154800000));
console.log(countdown(0));
console.log(countdown(61000));
console.log(countdown(360000000));
