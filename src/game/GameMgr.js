class GameMgr extends PIXI.Container
{
    constructor()
    {
        super();

        this.frame = new PIXI.Sprite();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        if (this.children.length == 0)
        {
            this.addChild(this.frame);
        }

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

    }
};

module.exports = new GameMgr();