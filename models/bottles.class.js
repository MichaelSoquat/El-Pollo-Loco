class Bottles extends MovableObject {
    y = 370;
    height = 60;
    width = 60;

    constructor(imagePath, x) {
        super().loadImage(imagePath, x);
        this.x = x + Math.random() * 500;
    }
}