// VARIABLES
let canvas;
let ctx;
let character = new Character();
let enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken()
]


// FIRST FUNCTION ONLOAD
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log(character);
}