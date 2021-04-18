class GameMgr extends PIXI.Container
{
    constructor()
    {
        super();

        this.frame = new PIXI.Sprite();
        this.drawing = new PIXI.Container();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        if (this.children.length == 0)
        {
            this.addChild(this.frame);
            this.addChild(this.drawing);
        }

        this.frame.interactive = true;
        this.frame.texture = PIXI.Loader.shared.resources.bee.texture;
        this.frame.anchor.set(0.5);
        this.frame.position.set(APP.GetWidth() / 2, APP.GetHeight() / 2);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Update(deltaTime)
    {
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        switch (event.target)
        {
            case this.frame:
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
                break;
        }
    }
};

module.exports = new GameMgr();