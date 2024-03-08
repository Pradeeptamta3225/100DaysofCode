
let lists = document.getElementsByClassName("love");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// for(list of lists){
//    list.addEventListener("dragstart", function(e){
//     let selected = e.target;

//     rightBox.addEventListener("dragover", function(e){
//         e.preventDefault();
//     });

//     rightBox.addEventLisetner("drop", function(e){
//         rightBox.appendChild(selected);
//         selected = null;
//     })
//    })
// }

for(love of lists){
    love.addEventListener("dragstart", function(e){
        console.log(e)

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault;
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null ;
        })
    })
}