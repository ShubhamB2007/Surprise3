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

Yes.addEventListener("click", startVideo);

function startVideo(){
let video = document.createElement("video");
video.className = "video-container"
video.setAttribute("autoplay" , " ");

let source = document.createElement("source")
source.src = "lv_0_20240630112224.mp4";
 source.type = "video/mp4";

 video.appendChild(source);
 document.body.appendChild(video)

 setTimeout(() => {
    video.play()   
 },2000);
 

 let No = document.querySelector(".No")
let Yes = document.querySelector(".Yes")
let text = document.querySelector("p")


 setTimeout(() => {
    No.classList.add("ending");
    Yes.classList.add("ending");
    text.classList.add("ending");
  }, 100);
}
 
