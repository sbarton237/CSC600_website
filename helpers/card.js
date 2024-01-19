export default class Card {
    constructor(scene) {
        this.render = (x, y, spirte) => {
            let card = scene.add.image(x, y, sprite);
            scene.input.setDraggable(card);
            return card;
        }
    }
}