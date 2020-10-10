// This file contains the reference to all the elements which we need to interact with

const attackBtn = document.getElementById("attackBtn")
const strongAttackBtn=document.getElementById("strAttackBtn")
const healBtn = document.getElementById("healBtn")
const getLogBtn = document.getElementById("getLogBtn")
const monsterHealthBar = document.getElementById("monsterProgress")
const playerHealthBar = document.getElementById("playerProgress")
const closeBtn = document.querySelector(".close")
const modalDiv = document.querySelector(".messageArea")
const messageInjectingArea = document.querySelector(".actual-text")
const suggestionText = document.querySelector(".suggestion")
const resetBtn=document.getElementById("resetBtn")


function setHealth(healthValue) {
    monsterHealthBar.value = healthValue
    monsterHealthBar.max = healthValue
    playerHealthBar.value = healthValue
    playerHealthBar.max=healthValue
}


function monsterDamageHandler(damage) {
    const damageToMonster = Math.random() * damage
    console.log(damageToMonster)
    monsterHealthBar.value-= damageToMonster
    return damageToMonster;
}

function playerDamageHandler(damage) {
    const damageToPlayer = Math.random() * damage;
    playerHealthBar.value -= damageToPlayer
    return damageToPlayer
}

function increasePlayerHealth(healValue) {
    playerHealthBar.value= +playerHealthBar.value+healValue
}

function resetTheGame(value) {
    monsterHealthBar.value = value;
    monsterHealthBar.max = value;
    playerHealthBar.value = value;
    playerHealthBar.max = value;
}