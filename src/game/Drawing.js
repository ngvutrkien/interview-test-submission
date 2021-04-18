const Picture = require('./Picture');

class Drawing extends PIXI.Container
{
    constructor()
    {
        super();
    }

    AddChild(child)
    {
        this.addChild(child);
    }

    RemoveChildren()
    {
        this.removeChildren();
    }

    TouchHandler(event)
    {
        if (Input.IsTouchMove(event))
        {
            let x = Input.touchX + Input.touchDX;
            let y = Input.touchY + Input.touchDY;
            let circle = new PIXI.Graphics()
                .beginFill()
                .drawCircle(x, y, 10)
                .endFill();
            this.AddChild(circle);
        }
        else if (Input.IsTouchUp(event))
        {
            this.RemoveChildren();
        }
    }
};

module.exports = new Drawing();