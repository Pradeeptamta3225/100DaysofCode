
let dateInput = document.querySelector("input");
let display = document.querySelector("p");
dateInput.max = new Date().toISOString().split("T")[0];

function calculate() {
    let birthDate = new Date(dateInput.value);
    let currentDate = new Date();
    let newDate = new Date(currentDate - birthDate);

    let year = newDate.getFullYear() - 1970;
    let month = newDate.getMonth();
    let days = newDate.getDate();

    display.innerHTML = `You are <span>${year}</span> Year <span>${month}</span> Month and <span>${days}</span> Day Old...`

}