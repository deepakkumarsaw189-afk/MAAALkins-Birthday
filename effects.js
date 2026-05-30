/* =========================
   FLOATING HEARTS
========================= */

function startHearts(){

setInterval(()=>{

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (Math.random()*20+15)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

},800);

}

/* =========================
   SPARKLES
========================= */

function createSparkles(){

setInterval(()=>{

    const sparkle =
    document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "✨";

    sparkle.style.left =
    Math.random()*100 + "vw";

    sparkle.style.top =
    Math.random()*100 + "vh";

    sparkle.style.fontSize =
    (Math.random()*15+10)+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

},500);

}

/* =========================
   CONFETTI
========================= */

function launchConfetti(){

for(let i=0;i<120;i++){

    const confetti =
    document.createElement("div");

    confetti.style.position="fixed";

    confetti.style.left =
    Math.random()*100+"vw";

    confetti.style.top="-20px";

    confetti.style.width="10px";
    confetti.style.height="10px";

    const colors=[
    "#ff69b4",
    "#ffd700",
    "#ffffff",
    "#ffb6c1"
    ];

    confetti.style.background=
    colors[
    Math.floor(
    Math.random()*colors.length
    )
    ];

    confetti.style.zIndex="9999";

    document.body.appendChild(confetti);

    const duration=
    Math.random()*3000+2000;

    confetti.animate(

    [

    {
        transform:
        "translateY(0px) rotate(0deg)"
    },

    {
        transform:
        `translateY(${window.innerHeight}px)
         rotate(720deg)`
    }

    ],

    {

    duration:duration,

    easing:"linear"

    }

    );

    setTimeout(()=>{

        confetti.remove();

    },duration);

}

}

/* =========================
   FIREWORKS
========================= */

function launchFireworks(){

const canvas =
document.getElementById(
"fireworksCanvas"
);

if(!canvas) return;

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles=[];

function createExplosion(x,y){

for(let i=0;i<60;i++){

particles.push({

x:x,

y:y,

vx:
(Math.random()-0.5)*8,

vy:
(Math.random()-0.5)*8,

life:100

});

}

}

for(let i=0;i<8;i++){

setTimeout(()=>{

createExplosion(

Math.random()
*canvas.width,

Math.random()
*canvas.height*0.5

);

},i*600);

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach((p)=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
3,
0,
Math.PI*2
);

ctx.fillStyle=
`hsl(${
Math.random()*360
},100%,70%)`;

ctx.fill();

p.x += p.vx;

p.y += p.vy;

p.life--;

});

for(
let i=
particles.length-1;
i>=0;
i--
){

if(
particles[i].life<=0
){

particles.splice(i,1);

}

}

requestAnimationFrame(
animate
);

}

animate();

launchConfetti();

}

/* =========================
   WINDOW RESIZE
========================= */

window.addEventListener(
"resize",
()=>{

const canvas =
document.getElementById(
"fireworksCanvas"
);

if(canvas){

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

}

}
);