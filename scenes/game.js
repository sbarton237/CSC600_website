import Card from '../helpers/card';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.preload.image('ac', '/Users/sbarton/Desktop/sbarton237.github.io/images/ac.png')
        this.preload.image('2c', '/Users/sbarton/Desktop/sbarton237.github.io/images/2c.png')
        this.preload.image('3c', '/Users/sbarton/Desktop/sbarton237.github.io/images/3c.png')
        this.preload.image('4c', '/Users/sbarton/Desktop/sbarton237.github.io/images/4c.png')
        this.preload.image('5c', '/Users/sbarton/Desktop/sbarton237.github.io/images/5c.png')
        this.preload.image('6c', '/Users/sbarton/Desktop/sbarton237.github.io/images/6c.png')
        this.preload.image('7c', '/Users/sbarton/Desktop/sbarton237.github.io/images/7c.png')
        this.preload.image('8c', '/Users/sbarton/Desktop/sbarton237.github.io/images/8c.png')
        this.preload.image('9c', '/Users/sbarton/Desktop/sbarton237.github.io/images/9c.png')
        this.preload.image('10c', '/Users/sbarton/Desktop/sbarton237.github.io/images/10c.png')
        this.preload.image('jc', '/Users/sbarton/Desktop/sbarton237.github.io/images/jc.png')
        this.preload.image('qc', '/Users/sbarton/Desktop/sbarton237.github.io/images/qc.png')
        this.preload.image('kc', '/Users/sbarton/Desktop/sbarton237.github.io/images/kc.png')
        this.preload.image('ad', '/Users/sbarton/Desktop/sbarton237.github.io/images/ad.png')
        this.preload.image('2d', '/Users/sbarton/Desktop/sbarton237.github.io/images/2d.png')
        this.preload.image('3d', '/Users/sbarton/Desktop/sbarton237.github.io/images/3d.png')
        this.preload.image('4d', '/Users/sbarton/Desktop/sbarton237.github.io/images/4d.png')
        this.preload.image('5d', '/Users/sbarton/Desktop/sbarton237.github.io/images/5d.png')
        this.preload.image('6d', '/Users/sbarton/Desktop/sbarton237.github.io/images/6d.png')
        this.preload.image('7d', '/Users/sbarton/Desktop/sbarton237.github.io/images/7d.png')
        this.preload.image('8d', '/Users/sbarton/Desktop/sbarton237.github.io/images/8d.png')
        this.preload.image('9d', '/Users/sbarton/Desktop/sbarton237.github.io/images/9d.png')
        this.preload.image('10d', '/Users/sbarton/Desktop/sbarton237.github.io/images/10d.png')
        this.preload.image('jd', '/Users/sbarton/Desktop/sbarton237.github.io/images/jd.png')
        this.preload.image('qd', '/Users/sbarton/Desktop/sbarton237.github.io/images/qd.png')
        this.preload.image('kd', '/Users/sbarton/Desktop/sbarton237.github.io/images/kd.png')
        this.preload.image('ah', '/Users/sbarton/Desktop/sbarton237.github.io/images/ah.png')
        this.preload.image('2h', '/Users/sbarton/Desktop/sbarton237.github.io/images/2h.png')
        this.preload.image('3h', '/Users/sbarton/Desktop/sbarton237.github.io/images/3h.png')
        this.preload.image('4h', '/Users/sbarton/Desktop/sbarton237.github.io/images/4h.png')
        this.preload.image('5h', '/Users/sbarton/Desktop/sbarton237.github.io/images/5h.png')
        this.preload.image('6h', '/Users/sbarton/Desktop/sbarton237.github.io/images/6h.png')
        this.preload.image('7h', '/Users/sbarton/Desktop/sbarton237.github.io/images/7h.png')
        this.preload.image('8h', '/Users/sbarton/Desktop/sbarton237.github.io/images/8h.png')
        this.preload.image('9h', '/Users/sbarton/Desktop/sbarton237.github.io/images/9h.png')
        this.preload.image('10h', '/Users/sbarton/Desktop/sbarton237.github.io/images/10h.png')
        this.preload.image('jh', '/Users/sbarton/Desktop/sbarton237.github.io/images/jh.png')
        this.preload.image('qh', '/Users/sbarton/Desktop/sbarton237.github.io/images/qh.png')
        this.preload.image('kh', '/Users/sbarton/Desktop/sbarton237.github.io/images/kh.png')
        this.preload.image('as', '/Users/sbarton/Desktop/sbarton237.github.io/images/as.png')
        this.preload.image('2s', '/Users/sbarton/Desktop/sbarton237.github.io/images/2s.png')
        this.preload.image('3s', '/Users/sbarton/Desktop/sbarton237.github.io/images/3s.png')
        this.preload.image('4s', '/Users/sbarton/Desktop/sbarton237.github.io/images/4s.png')
        this.preload.image('5s', '/Users/sbarton/Desktop/sbarton237.github.io/images/5s.png')
        this.preload.image('6s', '/Users/sbarton/Desktop/sbarton237.github.io/images/6s.png')
        this.preload.image('7s', '/Users/sbarton/Desktop/sbarton237.github.io/images/7s.png')
        this.preload.image('8s', '/Users/sbarton/Desktop/sbarton237.github.io/images/8s.png')
        this.preload.image('9s', '/Users/sbarton/Desktop/sbarton237.github.io/images/9s.png')
        this.preload.image('10s', '/Users/sbarton/Desktop/sbarton237.github.io/images/10s.png')
        this.preload.image('js', '/Users/sbarton/Desktop/sbarton237.github.io/images/js.png')
        this.preload.image('qs', '/Users/sbarton/Desktop/sbarton237.github.io/images/qs.png')
        this.preload.image('ks', '/Users/sbarton/Desktop/sbarton237.github.io/images/ks.png')
        this.preload.image('joker', '/Users/sbarton/Desktop/sbarton237.github.io/images/joker.png')
        this.preload.image('back', '/Users/sbarton/Desktop/sbarton237.github.io/images/back.png')
    }

    create() {
        this.dealText = this.add.text(75, 350, ['Deal Cards']).setFontSize(18).setFontFamily('Lucida Sans').setColor('#000000').setInteractive();

        let self = this;

        this.card = this.add.image(300, 300, 'back').setScale(0.3, 0.3).setInteractive();
        this.input.setDraggable(this.card);

        this.dealCards = () => {
            for ( let i = 0; i < 4; i ++) {
                let playerCard = new Card(this);
                playerCard.render(475 + (i * 100), 650, 'back');
            }
        }

        this.dealText.on('pointerdown', function () {
            self.dealCards();
        })

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#777777')
        })

        this.dealText.on('pointerout', function () {
            self.dealText(setColor('000000'))
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
    }

    update() {

    }
}