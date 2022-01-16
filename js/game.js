let canvas;
let world;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas); //neues Objekt wird angelegt World! Canvas als Variable wird mitgegeben!
    ctx = canvas.getContext('2d');
    console.log('My Charakter is', world)
    
}