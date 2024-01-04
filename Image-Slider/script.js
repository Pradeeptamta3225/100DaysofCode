
let scrollBar = document.querySelector(".gallry");
let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");

// scrollBar.addEventListener("wheel",(e) =>{
//     e.preventDefault();
//     scrollBar.scrollLeft += e.deltaY;
//     scrollBar.style.scrollBehavior = "auto";
    
// })


nextBtn.addEventListener("click",() =>{
    scrollBar.scrollLeft += 900;
    scrollBar.style.scrollBehavior = "smooth";
    
})

backBtn.addEventListener("click",() =>{
    scrollBar.scrollLeft -= 900;
    scrollBar.style.scrollBehavior = "smooth";

})

