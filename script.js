score = 0;
cross = true;
// highScore = 0;
play = true;

timeT=-150;

document.onkeydown= function(e){
    // console.log(e.keyCode);
    
    
        if(e.keyCode==38){
            dino = document.querySelector(".dino");
            dino.classList.add("animateDino");
            setTimeout(() => {
                dino.classList.remove("animateDino");
            }, 1000);
        }
        else if(e.keyCode==39){
            dinoB = parseInt(window.getComputedStyle(dino,null).getPropertyValue("bottom"));
            if(dinoB<100){
                dino = document.querySelector(".dino");
                dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
                dino.style.left = dinoX + 112 + "px";
            }
        }
        else if(e.keyCode==37){
            dinoB = parseInt(window.getComputedStyle(dino,null).getPropertyValue("bottom"));
            if(dinoB<100){
                dino = document.querySelector(".dino");
                dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
                dino.style.left = (dinoX - 112) +"px";
            }
        }
    
}


myInterval = setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))

    testX = (dx-ox);
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    
    // console.log(testX);
    
    if(offsetX < 164 && offsetY<52){
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("obstacleAnimate");
        dino.classList.remove("animateDino");
        updateScore(score);
        // computeHighScore(score);
    }
    
    
    else if((testX > 200 && testX < 230)&&cross){
        
        setTimeout(() => {
            score+=1;
            updateScore(score);
        }, 9);

        
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        
        setInterval(() => {
            oX = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
            // console.log(oX)
            
            if(oX<-150 && oX > -165) {
                animationDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                newAnimationDur = animationDur - 0.04;
                obstacle.style.animationDuration = newAnimationDur + 's';
                timeT = (100-(newAnimationDur*3));
                console.log(newAnimationDur);
            }
            
        }, 10);
        
        
    }

    
}, 10);



function updateScore(score){
    if(score<0)
        scoreCont.innerHTML = "You score is : "+ 0 ;
    else
        scoreCont.innerHTML = "You score is : "+ score ;
}

// function computeHighScore(score){
//     if(score>highScore){
//         highS.innerHTML = "New High Score : "+score;
//         highScore=score;
//     }
//     else
//         highS.innerHTML = "High Score : "+highScore;
// }


