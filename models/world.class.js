class World {

    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottlesBar = new BottlesBar();
    coinsBar = new CoinsBar();
    endbossBar = new EndbossBar();
    throwableObject = [];
    FontSize = 0;
    reloading = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
        this.checkCollisions;
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.character.bottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
            this.character.bottles -= 10;
            this.bottlesBar.setPercentage(this.character.bottles);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy))
                this.character.hit();
            this.statusBar.setPercentage(this.character.energy)
        });

        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collect();
                this.bottlesBar.setPercentage(this.character.bottles);
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
            }
        });
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();
                this.coinsBar.setPercentage(this.character.coins);
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
            }

            this.throwableObject.forEach((bottle) => {
                if (this.endboss.isColliding(bottle)) {
                    this.endboss.energyBoss -= 1;
                    console.log(this.endboss.energyBoss);
                    this.endbossBar.setPercentage(this.endboss.energyBoss);
                }
            })

        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let self = this;
        if (
            this.character.dead || this.endboss.energyBoss <=0
        ) {
            this.addObjectsToMap(this.level.backgroundObjects);
            this.gameEnd();
        } else {
            this.ctx.translate(this.camera_x, 0);

            this.addObjectsToMap(this.level.backgroundObjects);
            this.addObjectsToMap(this.level.clouds);
            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.statusBar);
            this.addToMap(this.bottlesBar);
            this.addToMap(this.coinsBar);


            this.ctx.translate(this.camera_x, 0);

            this.addToMap(this.character);
            this.addToMap(this.endboss);
            this.addObjectsToMap(this.level.enemies);
            this.addToMap(this.endbossBar);
            this.addObjectsToMap(this.level.bottles);
            this.addObjectsToMap(this.level.coins);
            this.addObjectsToMap(this.throwableObject);
            this.ctx.translate(-this.camera_x, 0);

        }
        // Draw() wird immer wieder aufgerufen!
        requestAnimationFrame(function () {
            self.draw();
        });
    };
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    };
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    };

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };

    gameEnd() {
        if (this.character.dead) {
            this.drawEndString("Game Over");
            this.again();
        }
        else if (this.endboss.energyBoss <= 0) {
         this.drawEndString("Well Done");
            this.again();
        }

    }

    drawEndString(string) {
        this.ctx.textAlign = "center";
        let textHeight = this.ctx.measureText(string).actualBoundingBoxAscent + this.ctx.measureText(string).actualBoundingBoxDescent
        let centerH = (canvas.height / 2) + (textHeight);
        this.ctx.font = this.FontSize + 'px Quentin'
        this.FontSize++;
        if (this.FontSize >= 100) { this.FontSize = 100 }
        this.ctx.fillText(string, canvas.width / 2, centerH)
    };

    again() {
        setTimeout(this.reload, 5000);
    }

    reload() {
        if (!this.reloading) {
            this.reloading = true;
            location.reload();
        }
    }

}   
