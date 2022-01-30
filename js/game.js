// VARIABLES
let canvas;
let world;
let keyboard = new Keyboard();
let bg_sound = new Audio('audio/music.mp3');

// FIRST FUNCTION ONLOAD
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log(world.character);
}
function fullScreen() {
    canvas.requestFullscreen();
}
function startGame() {
    
    let startGame = document.getElementById('startGame');
    startGame.classList.add('d-none');
    canvas.classList.remove('d-none');
    bg_sound.play();
    bg_sound.volume = 0.1;
}

    


document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});