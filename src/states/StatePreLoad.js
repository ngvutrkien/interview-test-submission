class StatePreLoad extends PIXI.Container
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

        this.tutorialTxt = new PIXI.Text(
            "CONNECT THE DOTS TO COMPLETE THE PICTURE",
            {
                align: "center",
                fontFamily: "Arial",
                fontSize: 30,
                fill: "#ffffff",
                wordWrap: true,
                wordWrapWidth: APP.GetWidth() * 0.85
            }
        );

        this.playTxt = new PIXI.Text(
            "loading...",
            {
                align: "center",
                fontFamily: "Arial",
                fontSize: 25,
                fill: "#ffffff"
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
            this.addChild(this.tutorialTxt);
            this.addChild(this.playTxt);
        }

        this.tutorialTxt.anchor.set(0.5);
        this.tutorialTxt.position.set(APP.GetWidth() / 2, APP.GetHeight() * 1 / 3);

        this.playTxt.anchor.set(0.5);
        this.playTxt.position.set(APP.GetWidth() / 2, APP.GetHeight() * 2 / 3);

        Utils.LoadAssets(DataDefine.images, this.LoadProgressHandler.bind(this), this.LoadErrorHandler.bind(this), this.LoadCompleteHandler.bind(this));
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

    LoadProgressHandler(loader, resource)
    {
        console.log("StatePreload loading: " + resource.name);
        console.log("StatePreload progress: " + loader.progress + "%");
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    LoadErrorHandler(error, loader, resource)
    {
        console.log("LoadErrorHandler: " + error);
        console.log("on resource: " + resource.name);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    LoadCompleteHandler()
    {
        console.log("LoadCompleteHandler");

        this.playTxt.text = "tap to continue";

        this.isLoaded = true;

        this.interactive = true;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        switch (event.target)
        {
            case this:
                if (Input.IsTouchUp(event) && this.isLoaded)
                {
                    this.interactive = false;
                    StateManager.SwitchState(StateIngame);
                }
                break;
        }
    }
};

module.exports = new StatePreLoad();