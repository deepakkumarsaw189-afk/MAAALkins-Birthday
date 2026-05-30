const startBtn = document.getElementById("startBtn");
const hero = document.getElementById("hero");
const storybook = document.getElementById("storybook");
const finale = document.getElementById("finale");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

if(startBtn){

startBtn.addEventListener("click",()=>{

    music.play().catch(()=>{});

    musicPlaying = true;

    if(musicBtn){
        musicBtn.classList.add("music-playing");
    }

    hero.style.display = "none";

    storybook.style.display = "flex";

    if(typeof createSparkles === "function"){
        createSparkles();
    }

    if(typeof startHearts === "function"){
        startHearts();
    }

});

}

if(musicBtn){

musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        music.play().catch(()=>{});

        musicPlaying = true;

        musicBtn.classList.add("music-playing");

    }else{

        music.pause();

        musicPlaying = false;

        musicBtn.classList.remove("music-playing");
    }

});

}

function showFinale(){

    storybook.style.display = "none";

    finale.style.display = "flex";

    if(typeof launchFireworks === "function"){
        launchFireworks();
    }

}