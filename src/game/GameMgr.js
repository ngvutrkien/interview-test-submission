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
            GAME: n++,
            WAIT_END: n++,
            END: n++,
        };

        this.state = this.STATE.NONE;
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

        let name = 'bee'; // Random picture name
        Picture.InitPicture(name);
        Dots.InitDots(name);

        this.SetState(this.STATE.GAME);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    SetState(state)
    {
        this.state = state;
        switch (this.state)
        {
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
                    this.SetState(this.STATE.WAIT_END);
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