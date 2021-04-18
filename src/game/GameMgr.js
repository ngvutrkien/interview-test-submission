const Picture = require('./Picture');

class GameMgr extends PIXI.Container
{
    constructor()
    {
        super();

        this.drawing = new PIXI.Container();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        if (this.children.length == 0)
        {
            this.addChild(Picture);
            this.addChild(this.drawing);
        }

        Picture.InitPicture();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Update(deltaTime)
    {
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        if (Input.IsTouchMove(event))
        {
            let x = Input.touchX + Input.touchDX;
            let y = Input.touchY + Input.touchDY;
            let circle = new PIXI.Graphics()
                .beginFill()
                .drawCircle(x, y, 10)
                .endFill()
            this.drawing.addChild(circle);
        }
        else if (Input.IsTouchUp(event))
        {
            this.drawing.removeChildren();
        }
    }
};

module.exports = new GameMgr();