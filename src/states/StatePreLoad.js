class StatePreLoad extends PIXI.Container
{
    constructor()
    {
        super();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Load()
    {
        APP.AddChild(this);

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
        this.isLoaded = true;
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