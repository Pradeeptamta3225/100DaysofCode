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



setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000);


