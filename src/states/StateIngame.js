const GameMgr = require('../game/GameMgr');

class StateIngame extends PIXI.Container
{
    constructor()
    {
        super();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        APP.AddChild(this);

        if (this.children.length == 0)
        {
            this.addChild(GameMgr);
        }

        GameMgr.Load();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Unload()
    {
        APP.RemoveChild(this);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Update(deltaTime)
    {
        GameMgr.Update(deltaTime);
    }

    EndGame()
    {
        console.log('END GAME');
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        GameMgr.TouchHandler(event);
    }
};

module.exports = new StateIngame();