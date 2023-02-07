
setInterval(() => {
    const timeIs = new Date();
    
    document.getElementsByClassName("second")[0].style.transform = "rotate(" + timeIs.getSeconds() * 6 + "deg)";

    document.getElementsByClassName("minute")[0].style.transform = "rotate(" + timeIs.getMinutes() * 6 + "deg)";

    document.getElementsByClassName("hour")[0].style.transform = `rotate(${timeIs.getHours() * 30 + 30 / 60 * timeIs.getMinutes()}deg)`;
}, 500);