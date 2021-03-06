class BottlesBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 40;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
