class Dot extends PIXI.Container
{
    constructor(dot)
    {
        super();

        this.next = null;
        this.prev = null;

        this.rect = new PIXI.Graphics()
            .beginFill(0xFF0000)
            .drawRect(0, 0, dot.size, dot.size)
            .endFill();
        this.rect.position.set(APP.GetWidth() / 2 + dot.x - dot.size / 2, APP.GetHeight() / 2 + dot.y - dot.size / 2);
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