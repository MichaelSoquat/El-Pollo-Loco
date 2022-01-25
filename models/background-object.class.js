class BackgroundObject extends MovableObject {
    width = canvas.width;
    height = 400;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 -this.height;
        
    }
}