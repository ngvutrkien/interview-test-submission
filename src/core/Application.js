class Application extends PIXI.Container
{
    constructor()
    {
        super();

        this.ticker = new PIXI.Ticker();
        this.renderer = new PIXI.Renderer({ width: window.innerWidth, height: window.innerHeight });

        this.interactive = true;
        this.on("pointerup", this.TouchHandler);
        this.on("pointerdown", this.TouchHandler);
        this.on("pointermove", this.TouchHandler);

        document.body.appendChild(this.renderer.view);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Init(gameLoop)
    {
        this.ticker.add(gameLoop);
        this.ticker.start();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    GetWidth()
    {
        return this.renderer.width;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    GetHeight()
    {
        return this.renderer.height;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    AddChild(stage)
    {
        this.addChild(stage);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    RemoveChild(stage)
    {
        this.removeChild(stage);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Align(stage)
    {
        stage.position.set(this.renderer.width / 2, this.renderer.height / 2);
        stage.pivot.set(this.GetWidth() / 2, this.GetHeight() / 2);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Update(deltaTime)
    {
        StateManager.Update(deltaTime);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Render()
    {
        this.renderer.render(this);
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        if (StateManager.stateNext == null)
        {
            Input.Update(event);
            StateManager.TouchHandler(event);
            Input.Reset(event);
        }
    }
};

module.exports = new Application();