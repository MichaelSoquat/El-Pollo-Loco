class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;

// loadImage('img/test.png');

loadImage(path) {
    this.img = new Image(); //this.img = document.getElementById('image) <img id="image">   Wäre dasselbe! Image ist bereits Objekt!
    this.img.src = path;
}
moveRight() {
    console.log('Moving right')
}

moveLeft() {

}
}