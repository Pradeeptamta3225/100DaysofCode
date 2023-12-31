// function updateClock() {

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2,0);
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const second = now.getSeconds().toString().padStart(2,0); 

//     const timeScreen = `${hours}:${minutes}:${second}`;

//     document.getElementById("time").innerText = timeScreen;
// }

// setTimeout(updateClock,1000);


// updateClock();

let time = document.getElementById("timeDisplay");
// let days = document.getElementById("dayDate");

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


