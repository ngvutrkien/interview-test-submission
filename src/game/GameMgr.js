const Picture = require('./Picture');
const Dots = require('./Dots');
const Drawing = require('./Drawing');

class GameMgr extends PIXI.Container
{
    constructor()
    {
        super();

        let n = 0;
        this.STATE = {
            NONE: n++,
            RESET: n++,
            GAME: n++,
            WAIT_END: n++,
            END: n++,
        };
        this.state = this.STATE.NONE;

        this.imgNames = null;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        if (this.children.length == 0)
        {
            this.addChild(Picture);
            // this.addChild(Dots); // Unrem this to show guilding dots.
            this.addChild(Drawing);
        }
        this.imgNames = Object.keys(DataDefine.images);
        this.Reset();
        this.SetState(this.STATE.GAME);
    }

    Unload()
    {
        Picture.Unload();
        Dots.Unload();
        Drawing.Unload();
    }

    Reset()
    {
        let random = Math.floor(Math.random() * (this.imgNames.length - 1));
        let name = this.imgNames[random];
        this.imgNames.splice(random, 1);

        Picture.InitPicture(name);
        Dots.InitDots(name);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    SetState(state)
    {
        this.state = state;
        switch (this.state)
        {
            case this.STATE.RESET:
                if (this.imgNames.length == 0)
                {
                    this.SetState(this.STATE.WAIT_END);
                    break;
                }
                setTimeout(() =>
                {
                    this.Unload();
                    this.Reset();
                    this.SetState(this.STATE.GAME);
                }, 1000);
                break;
            case this.STATE.WAIT_END:
                setTimeout(() =>
                {
                    this.SetState(this.STATE.END);
                }, 1000);
                break;
            case this.STATE.END:
                StateIngame.EndGame();
                this.SetState(this.STATE.NONE);
                break;
            default:
                break;
        }
    }

    Update(deltaTime)
    {
        switch (this.state)
        {
            case this.STATE.GAME:
                if (Dots.isFinished)
                {
                    Drawing.ClearDrawing();
                    Picture.ShowPictureFull();
                    this.SetState(this.STATE.RESET);
                }
                break;
            default:
                break;
        }
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        switch (this.state)
        {
            case this.STATE.GAME:
                Dots.TouchHandler(event);
                Drawing.TouchHandler(event);
                break;
            default:
                break;
        }
    }
};

module.exports = new GameMgr();