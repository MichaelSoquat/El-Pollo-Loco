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
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png')
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
        this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });

        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });




        //Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {  //Funktion wird asynchron ein bisschen später ausgeführt, erst wenn gezeichnet ist drawImage
            self.draw();  //Wort this erkennt er hier nicht mehr, deswegen Variable!
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}