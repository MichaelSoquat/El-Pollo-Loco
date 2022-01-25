class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 100;
    width = 100;

    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementbyId('image')  <img id="image" src> Wäre dasselbe!!!
        this.img.src = path;
    }
    moveRight() {

    }

    moveLeft() {

    }
}