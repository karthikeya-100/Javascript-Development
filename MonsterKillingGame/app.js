// This javascript file contains the core logic
let maxLife = 100
let currentMonsterLife = maxLife
let currentPlayerLife = maxLife

const strengthArray = [10, 15]

const getStrength = (start,end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (max - min+1) + min)
}

let playerStrength = strengthArray[getStrength(0,1)]
const playerStrongStrength = 20;
let monsterStrength = strengthArray[getStrength(0, 1)]
const HEAL_VALUE = 20;
const ATTACK_MODE = "ATTACK"
const STRONG_ATTACK_MODE = "STRONG_ATTACK"
const MONSTER_DIE="GREAT-->MONSTER DIED AND YOU WON!!!!!!"
const PLAYER_DIE = "MONSTER KILLED YOU!!!"
const BOTH_DIE = "BOTH ARE DEAD!!!"
const HEAL_INCREASE_MESSAGE = "YOUR HEALTH INCREASED"
const HEAL_ALERT_MESSAGE="You cant heal more than your max health"
const MODE = "ATTACK"
const HEAL = "HEAL"
let hasHealedOnce = false;


setHealth(maxLife)

const displayMessage = (mode,message,incomingSuggestionText="Suggestion :Using Strong Attack May increase chance of Win!!") => {
    if (mode===MODE) {
    modalDiv.style.display = "block"
    suggestionText.innerHTML=""
    messageInjectingArea.innerHTML = message
    } else if (mode === HEAL) {
        modalDiv.style.display = "block"
        suggestionText.innerHTML=incomingSuggestionText
        messageInjectingArea.innerHTML = message;
    }
}

function decideWinner(finalMonsterHealth, finalPlayerHealth) {
    let messageToShow;
    if (finalMonsterHealth <= 0 && finalPlayerHealth <= 0) {
        messageToShow = BOTH_DIE
        displayMessage(MODE,messageToShow)
        
    } else if (finalMonsterHealth <= 0 && finalPlayerHealth >= 0) {
        messageToShow = MONSTER_DIE
        displayMessage(MODE,messageToShow)
    } else if (finalPlayerHealth<=0 && finalMonsterHealth >= 0) {
        messageToShow = PLAYER_DIE
        displayMessage(MODE,messageToShow)
    }
    setTimeout(() => {
        if (finalMonsterHealth <= 0 || finalPlayerHealth <= 0) {
            resetHealthBars()
        }    
    },3000)
    
}
const attackMonsterAndDecideWinner=()=> {
    const damageHappenedtoPlayer = playerDamageHandler(monsterStrength)    
    currentPlayerLife -= damageHappenedtoPlayer
    decideWinner(currentMonsterLife, currentPlayerLife)
    
}

const playerAttack=(mode) =>{
    const damageHappenedToMonster = monsterDamageHandler((mode === ATTACK_MODE) ? playerStrength : playerStrongStrength
    )
    currentMonsterLife -= damageHappenedToMonster
    attackMonsterAndDecideWinner()
}
const healPlayer = () => {
    if (!hasHealedOnce) {
        console.log("entered")
        let healValue;
    if (currentPlayerLife >= maxLife - HEAL_VALUE) {
        console.log(currentPlayerLife)
        healValue = maxLife - currentPlayerLife //Max heal value increase upto maxchoosen life
        displayMessage(HEAL,HEAL_ALERT_MESSAGE)
    }
    else {
        healValue = HEAL_VALUE
        displayMessage(HEAL,HEAL_INCREASE_MESSAGE)
    }
    increasePlayerHealth(healValue)
    currentPlayerLife += healValue
    attackMonsterAndDecideWinner()
    } 
    hasHealedOnce = true;
    healBtn.style.display="none"
}

const closeHandler = () => {
 modalDiv.style.display="none"
}

const resetHealthBars = () => {
    currentPlayerLife = maxLife
    currentMonsterLife = maxLife
    healBtn.style.display = "block"
    hasHealedOnce = false;
    playerStrength=strengthArray[getStrength(0,1)]
    monsterStrength = strengthArray[getStrength(0, 1)]
    resetTheGame(maxLife)
}


const attackMonsterHandler = () => {
    playerAttack(ATTACK_MODE)
}

const strongAttackMonsterHandler = () => {
    playerAttack(STRONG_ATTACK_MODE)
}

attackBtn.addEventListener("click", attackMonsterHandler)
strongAttackBtn.addEventListener("click", strongAttackMonsterHandler)
healBtn.addEventListener("click",healPlayer)
closeBtn.addEventListener("click", closeHandler)
resetBtn.addEventListener("click",resetHealthBars)