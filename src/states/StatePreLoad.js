class StatePreLoad extends PIXI.Container
{
    constructor()
    {
        super();

        this.tutorialTxt = new PIXI.Text(
            "CONNECT THE DOTS TO COMPLETE THE PICTURE",
            {
                align: "center",
                fontFamily: "Arial",
                fontSize: 50,
                fill: "#ffffff"
            }
        );

        this.playTxt = new PIXI.Text(
            "Tap to continue",
            {
                align: "center",
                fontFamily: "Arial",
                fontSize: 35,
                fill: "#ffffff"
            }
        );

        this.playTxt.visible = false;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        APP.AddChild(this);

        this.addChild(this.tutorialTxt);
        this.addChild(this.playTxt);

        this.tutorialTxt.anchor.set(0.5);
        this.tutorialTxt.position.set(APP.GetWidth() / 2, APP.GetHeight() / 2);

        this.playTxt.anchor.set(0.5);
        this.playTxt.position.set(APP.GetWidth() / 2, APP.GetHeight() * 2 / 3);

        Utils.LoadAssets(DataDefine.assets, this.LoadProgressHandler.bind(this), this.LoadErrorHandler.bind(this), this.LoadCompleteHandler.bind(this));
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
        this.playTxt.visible = true;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    UpdatePreload(deltaTime)
    {

    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    NextState()
    {

    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        switch (event.target)
        {

        }
    }
};

module.exports = new StatePreLoad();