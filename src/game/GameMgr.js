const Picture = require('./Picture');
const Drawing = require('./Drawing');

class GameMgr extends PIXI.Container
{
    constructor()
    {
        super();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        if (this.children.length == 0)
        {
            this.addChild(Picture);
            this.addChild(Drawing);
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
        Drawing.TouchHandler(event);
    }
};

module.exports = new GameMgr();