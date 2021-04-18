const Dot = require('./Dot');

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
            let node = new Dot(dot, dotSize);
            this.addChild(node);
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
            let rect = this.children[0].GetRect();
            console.log(Utils.CollisionPointRect(touch.x, touch.y, rect));
        }
        else if (Input.IsTouchUp(event))
        {
        }
    }
};

module.exports = new Dots();