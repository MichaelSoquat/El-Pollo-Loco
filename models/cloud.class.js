class Cloud extends MovableObject {
    y = 0;
    height = 250;
    width = 500;
    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x + Math.random() * 500;
        this.speed = 0.05 +Math.random() * 0.10;
        this.animate();



    }
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    };
}

