/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};
/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');
const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');
const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');
/*-------------------------------- Functions --------------------------------*/
const init = () => {
    gameOver = false;
    timer = setInterval(runGame(), 2000);
}

const runGame = () => {
    updateStates();
    render();
}

const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
};

const randomNum0to3 = () => {
    return Math.floor(Math.random() * 4);
}

const updateStates = () => {
    state.boredom += randomNum0to3;
    state.hunger += randomNum0to3;
    state.sleepiness += randomNum0to3;
}

init();
/*----------------------------- Event Listeners -----------------------------*/


