class Dot extends PIXI.Container
{
    constructor(dot, dotSize)
    {
        super();

        this.next = null;
        this.prev = null;

        this.rect = new PIXI.Graphics()
            .beginFill(0xFF0000)
            .drawRect(0, 0, dotSize, dotSize)
            .endFill();
        this.rect.position.set(APP.GetWidth() / 2 + dot.x - dotSize / 2, APP.GetHeight() / 2 + dot.y - dotSize / 2);
        this.addChild(this.rect);
    }

    GetRect()
    {
        let rect = {
            x: this.rect.x,
            y: this.rect.y,
            width: this.rect.width,
            height: this.rect.height
        };
        return rect;
    }
};

module.exports = Dot;