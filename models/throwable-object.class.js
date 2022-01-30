class ThrowableObject extends MovableObject {
    throwing_sound = new Audio('audio/glass.flac');

    constructor(x,y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this. width = 50;
        this.throw();
    }

    throw() {
        this.throwing_sound.play();
        this.speedY = 30;
        this.speedX = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        },25)
    }
}