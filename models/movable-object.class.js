class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    bottles = 0;
    coins = 0;
    lastHit = 0;
    deadTime = 0;
    dead = false;
    timeAfterDeath = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)

    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 140;
        }
    }



    // character.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    };


    collect() {
        this.bottles += 10;
        if (this.bottles > 100) {
            this.bottles = 100;
        } if (this.bottles < 0) {
            this.bottles = 0;
        }
    }

    collectCoins() {
        this.coins += 10;
        if (this.coins > 100) {
            this.coins = 100;
        }
    }

    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
            this.dead = true;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    };
    isHurt() {
        
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    isDead() {

        return this.energy == 0;

    };

    howLongDead() {
        if(this.dead = true) {
            this.deadTime = new Date().getTime();
            console.log(this.deadTime);
        }
        timeAfterDeath = new Date().getTime() - this.deadTime;
        timeAfterDeath = timeAfterDeath / 1000;
        return timeAfterDeath;
    };

    moveRight() {

        this.x += this.speed;



    }

    playAnimation(images) {

        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

    moveLeft() {
        this.x -= this.speed;


    }


}