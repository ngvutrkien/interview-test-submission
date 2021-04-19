class StateGameOver extends PIXI.Container
{
    constructor()
    {
        super();

        this.isLoaded = false;

        this.background = new PIXI.Graphics();
        this.background.clear();
        this.background.beginFill();
        this.background.drawRect(0, 0, APP.GetWidth(), APP.GetHeight());
        this.background.endFill();

        this.replayTxt = new PIXI.Text(
            "tap to replay",
            {
                align: "center",
                fontFamily: "Arial",
                fontSize: 30,
                fill: "#ffffff",
                wordWrap: true,
                wordWrapWidth: APP.GetWidth() * 0.85
            }
        );
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        APP.AddChild(this);

        if (this.children.length == 0)
        {
            this.addChild(this.background);
            this.addChild(this.replayTxt);
        }

        this.replayTxt.anchor.set(0.5);
        this.replayTxt.position.set(APP.GetWidth() / 2, APP.GetHeight() / 2);

        this.interactive = true;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Unload()
    {
        APP.RemoveChild(this);
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
            case this:
                if (Input.IsTouchUp(event))
                {
                    this.interactive = false;
                    StateManager.SwitchState(StateIngame);
                }
                break;
        }
    }
};

module.exports = new StateGameOver();