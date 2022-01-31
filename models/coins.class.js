class Coins extends MovableObject {
    y = 40;
    height = 120;
    width = 120;

    constructor(imagePath, x) {
        super().loadImage(imagePath, x);
        this.x = x + Math.random() * 500;
    }
}