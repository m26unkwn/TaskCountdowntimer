let countDownDate=new Date("Jan 16, 2021 12:53:00").getTime();
let myfunc=setInterval(function(){
    const today=new Date().getTime();
    let timeleft= countDownDate-today;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days 
 document.getElementById("hours").innerHTML = hours 
 document.getElementById("mins").innerHTML = minutes 
 document.getElementById("secs").innerHTML = seconds 
},1000);