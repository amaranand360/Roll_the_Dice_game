'use strict';
//seleacting element.
const player1 = document.querySelector('.player_0');
const player2 = document.querySelector('.player_1');

const score1 = document.getElementById('score_0');
const score2 = document.querySelector('#score_1');

const current1 = document.getElementById('current_0');
const current2 = document.getElementById('current_1');

// const diceE = document.querySelectorAll('.dice');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');

const btnnew = document.querySelector('.btn_new');
const btnroll = document.querySelector('.btn_roll');

// starting condation:
let current_1, current_2,score_1,score_2,count
let playing = true;
/*******************RePlay Game and Start functionality********************/
const playagain = ()=>{
    playing = true;
    current_1 = 0;
    current_2 =0;
    score_1 = 0;
    score_2 = 0;
    count = 10;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    document.querySelector('.atm').textContent = count;

    dice1.classList.add('hidden');
    dice2.classList.add('hidden');
    player1.classList.remove('player_winner');
    player2.classList.remove('player_winner');

}
playagain();

btnnew.addEventListener('click', playagain);


/*******************Rolling dice functionality********************/
let rollop = function rollfun() {
    if(playing){
    //1.creacting a random dice rool
    const dice_1 = Math.floor(Math.random() * 6) + 1;
    console.log(dice_1);
    dice1.classList.remove('hidden');
    dice1.src = `img/dice-${dice_1}.png `
    current_1 = dice_1;
    score_1 += dice_1;
    current1.textContent = current_1;
    score1.textContent = score_1;
    
     //2.creacting a random dice rool
    const dice_2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice_2);
    dice2.classList.remove('hidden');
    dice2.src = `img/dice-${dice_2}.png `
    current_2 = dice_2;
    score_2 += dice_2;
    current2.textContent = current_2;
    score2.textContent = score_2;

    document.querySelector('.atm').textContent = --count;
    if ( count == 0)
    {
        playing = false;
        if(score_1 > score_2){
            player1.classList.add('player_winner');
        }
        else if(score_2 > score_1){
            player2.classList.add('player_winner');
        }
        else{
            alert("Match Draw!");
            res = confirm("Are you want to replay ?");
            if(res == true){
                playagain();
            }
        }
       
    }  
}
}
btnroll.addEventListener('click', rollop);

