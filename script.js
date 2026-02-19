// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
    sections.forEach(sec=>{
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add("show");
        }
    });
});


// MINI CYBER GAME (Click the hacker)
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = Math.random() * 350;
let y = Math.random() * 150;
let score = 0;

function drawCircle(){
    ctx.clearRect(0,0,400,200);
    ctx.beginPath();
    ctx.arc(x,y,15,0,Math.PI*2);
    ctx.fillStyle="#00eaff";
    ctx.fill();
}

canvas.addEventListener("click", function(e){
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dist = Math.sqrt((mouseX-x)**2 + (mouseY-y)**2);
    if(dist < 15){
        score++;
        document.getElementById("score").innerText="Score: "+score;
        x = Math.random() * 350;
        y = Math.random() * 150;
    }
});

setInterval(drawCircle,30);
