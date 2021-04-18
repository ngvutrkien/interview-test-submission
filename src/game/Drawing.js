class Drawing extends PIXI.Container
{
    constructor()
    {
        super();
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
            console.log('X:' + x + ' Y: ' + y);
            this.addChild(circle);
        }
        else if (Input.IsTouchUp(event))
        {
            this.removeChildren();
        }
    }
};

module.exports = new Drawing();