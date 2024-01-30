
function clock(){
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = new Date();
    
    document.getElementById("dayDate").innerHTML = (daysOfWeek[today.getDay()] + " " +
    today.getDate() + " " + monthsName[today.getMonth()] + " " + today.getFullYear());
}let inter = setInterval(clock,400);


setInterval(() => {
    
    let d = new Date();
    timeDisplay.innerHTML = d.toLocaleTimeString();
},1000);


