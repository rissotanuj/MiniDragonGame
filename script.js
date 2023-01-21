
let audio = new Audio('music.mp3');
let gameO = new Audio('gameover.mp3');
cross = true;
score = 0;


setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = (e)=>{
    if(e.key==='ArrowUp'){
        let dino = document.querySelector('.dino');
        dino.classList.add('dinoAni');

        setTimeout(() => {
        dino.classList.remove('dinoAni');
        }, 700);
    }

    if(e.key === 'ArrowRight'){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        console.log(dinoX);
        dino.style.left = dinoX + 60 + "px";
    }

    if(e.key === 'ArrowLeft'){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        console.log(dinoX);
        dino.style.left = dinoX-60 + "px";
    }

}

gameOver = ()=>{
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));
        
        obstacle = document.querySelector('.obstacle');
        ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
        oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));
        
        x = dx - ox;
        y = dy - oy;   

        abx = Math.abs(x);
        aby = Math.abs(y);
        
        if(abx<80 && aby<60){
            console.log("this is x",abx);
            console.log("this is y",aby);
            obstacle.style.animation = "none";
            GO =  document.querySelector(".gOWN");
            GO.style.fontSize = "xx-large";
            GO.style.fontWeight = "bolder";
            GO.textContent = 'Game Over Press Back Button to restart';
            gameO.play();

            setTimeout(() => {
                audio.pause();
                gameO.pause();
            }, 1000);
        }
        else if (abx < 145 && cross) {
            score += 1;
            updateScore(score);
            cross = false;

            setTimeout(() => {
                cross = true;
            }, 1000);

            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                obstacle.style.animationDuration = newDur + 's';
                console.log('New animation duration: ', newDur)
            }, 500);
    
        }
    
        
       
    }

    function updateScore(score) {
        scoreCont.innerHTML = "Your Score: " + score
    }

    
setInterval(() => {
        gameOver();         
},100);