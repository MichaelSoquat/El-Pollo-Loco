// VARIABLES
let canvas;
let world;

// FIRST FUNCTION ONLOAD
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);


    console.log(world.character);
}