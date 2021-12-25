const toggle = document.getElementById("toggle");
const quotedisplay=document.querySelector(".quotedisplay");

const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let index=0;
function run(){

        index++;

        if (index > img.length-1){

                index=0;
        }
        
        // imgs.style.transform = `translateX(${-index * 300 }px)`;
        imgs.style.transform = `translateX(${-300 * index}px)`;
        
        // setTimeout(run,5000)
        console.log(index)
}
setInterval(run,5000)


toggle.addEventListener("change",(e)=> {


        document.body.classList.toggle("dark",e.target.checked );

});

