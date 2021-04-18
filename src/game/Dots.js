class Dots extends PIXI.Container
{
    constructor()
    {
        super();
    }

    InitDots(name)
    {
        let dots = DataDefine.dots[name];
        let dotSize = 30;
        dots.forEach(dot =>
        {
            let rect = new PIXI.Graphics()
                .beginFill(0xFF0000)
                .drawRect(0, 0, dotSize, dotSize)
                .endFill();
            rect.position.set(APP.GetWidth() / 2 + dot.x - dotSize / 2, APP.GetHeight() / 2 + dot.y - dotSize / 2);
            this.addChild(rect);
        });
    }

    TouchHandler(event)
    {
        let touch = {
            x: Input.touchX + Input.touchDX,
            y: Input.touchY + Input.touchDY
        };

        if (Input.IsTouchMove(event))
        {
            let child = this.children[0];
            let rect = {
                x: child.x,
                y: child.y,
                width: child.width,
                height: child.height
            }
            console.log(Utils.CollisionPointRect(touch.x, touch.y, rect));
        }
        else if (Input.IsTouchUp(event))
        {
        }
    }
};

module.exports = new Dots();