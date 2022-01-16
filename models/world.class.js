class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0)
    ]

    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.backgroundObjects);

        //Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {  //Funktion wird asynchron ein bisschen später ausgeführt, erst wenn gezeichnet ist drawImage
            self.draw();  //Wort this erkennt er hier nicht mehr, deswegen Variable!
        });
    }
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}