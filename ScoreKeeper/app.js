const p1={
    score:0,
    display:document.querySelector('#score_p1'),
    button:document.querySelector('#p1')
}
const p2={
    score:0,
    display:document.querySelector('#score_p2'),
    button:document.querySelector('#p2')
}
const resetbtn=document.querySelector('#reset');
const winningScoreSelector=document.querySelector('#tot_score');
let isGameOver=false;
let winningScore=3;

function updateScore(player,opponent){
    if(player.score !== winningScore  && !isGameOver){
        player.score+=1;
        player.display.innerText=player.score;
    }
    if(player.score === winningScore){
        isGameOver=true
        player.display.classList.add('has-text-success');
        opponent.display.classList.add("has-text-danger");
        player.button.disabled=true;
        opponent.button.disabled=true;
        player.button.classList.add('is-light')
        opponent.button.classList.add('is-light')
    }

}

function reset() {
    isGameOver=false;
    p1.score=0, p2.score=0;
    p1.display.innerText=p1.score;
    p2.display.innerText=p2.score;
    p2.display.classList.remove("has-text-success","has-text-danger");
    p1.display.classList.remove("has-text-danger","has-text-success");
    p1.button.disabled=false;
    p2.button.disabled=false;
    p1.button.classList.remove('is-light')
    p2.button.classList.remove('is-light')
}

winningScoreSelector.addEventListener('change',function () {
    winningScore=parseInt(this.value)
    reset();
})

p1.button.addEventListener('click',function(){
    updateScore(p1,p2)
})

p2.button.addEventListener('click',function(){
    updateScore(p2,p1)
})

resetbtn.addEventListener('click',reset)