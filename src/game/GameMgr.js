const Picture = require('./Picture');
const Dots = require('./Dots');
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
            this.addChild(Dots);
            this.addChild(Drawing);
        }

        let name = 'bee';
        Picture.InitPicture(name);
        Dots.InitDots(name);
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