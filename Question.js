let No = document.querySelector(".No")
let Yes = document.querySelector(".Yes")
let text = document.querySelector("p")

document.addEventListener("DOMContentLoaded" , ()=>{
    let No = document.querySelector(".No")
    let Yes = document.querySelector(".Yes")
    let text = document.querySelector("p")
     
    setTimeout(() => {
        No.classList.add("opening")
        Yes.classList.add("opening")
        text.classList.add("opening")
    }, 100);
})

let video = document.querySelector("video")

video.pause()

let open = document.querySelector(".Yes")

open.addEventListener("click" , startVideo);
open.addEventListener("touchstart", startVideo);

function startVideo(){
    let No = document.querySelector(".No")
    let Yes = document.querySelector(".Yes")
    let text = document.querySelector("p")

    if(video.paused){
        video.play()
    }
    else{
        video.pause()
    }
 
    setTimeout(() => {
        No.classList.add("ending")
        Yes.classList.add("ending")
        text.classList.add("ending")
    }, 100);
    
}