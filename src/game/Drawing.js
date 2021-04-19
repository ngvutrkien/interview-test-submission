class Drawing extends PIXI.Container
{
    constructor()
    {
        super();
    }

    Unload()
    {
        this.ClearDrawing();
    }

    ClearDrawing()
    {
        this.removeChildren();
    }

    TouchHandler(event)
    {
        let touch = {
            x: Input.touchX + Input.touchDX,
            y: Input.touchY + Input.touchDY
        };

        if (Input.IsTouchMove(event))
        {
            let circle = new PIXI.Graphics()
                .beginFill()
                .drawCircle(touch.x, touch.y, 7)
                .endFill();
            this.addChild(circle);
        }
        else if (Input.IsTouchUp(event))
        {
            this.removeChildren();
        }
    }
};

module.exports = new Drawing();