
let scrollBar = document.querySelector(".gallry");
let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");



nextBtn.addEventListener("click",() =>{
    scrollBar.scrollLeft += 900;
    scrollBar.style.scrollBehavior = "smooth";
    
})

backBtn.addEventListener("click",() =>{
    scrollBar.scrollLeft -= 900;
    scrollBar.style.scrollBehavior = "smooth";

})

