class Dots extends PIXI.Container
{
    constructor()
    {
        super();
    }

    InitDots(name)
    {
        let dots = DataDefine.dots[name];
        dots.forEach(dot =>
        {
            let rect = new PIXI.Graphics()
                .beginFill(0xFF0000)
                .drawRect(APP.GetWidth() / 2 + dot.x, APP.GetHeight() / 2 + dot.y, 10, 10)
                .endFill();
            this.addChild(rect);
        });
    }

    TouchHandler(event)
    {
        if (Input.IsTouchMove(event))
        {
        }
        else if (Input.IsTouchUp(event))
        {
        }
    }
};

module.exports = new Dots();