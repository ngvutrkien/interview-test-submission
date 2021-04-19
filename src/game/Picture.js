class Picture extends PIXI.Container
{
    constructor()
    {
        super();

        this.sheet = null;
        this.textures = {};
        this.frame = new PIXI.Sprite();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    InitPicture(name)
    {
        if (this.children.length == 0)
        {
            this.addChild(this.frame);
        }

        this.sheet = new PIXI.BaseTexture.from(PIXI.Loader.shared.resources[name].url);

        let data = DataDefine.spriteSheets[name].cutted;
        this.textures.cutted = new PIXI.Texture(this.sheet, new PIXI.Rectangle(data.x, data.y, data.w, data.h));

        data = DataDefine.spriteSheets[name].full;
        this.textures.full = new PIXI.Texture(this.sheet, new PIXI.Rectangle(data.x, data.y, data.w, data.h));

        this.ShowPictureCutted();
    }

    ShowPictureCutted()
    {
        this.frame.texture = this.textures.cutted;
        this.frame.anchor.set(0.5);
        this.frame.position.set(APP.GetWidth() / 2, APP.GetHeight() / 2);
    }

    ShowPictureFull()
    {
        this.frame.texture = this.textures.full;
        this.frame.anchor.set(0.5);
        this.frame.position.set(APP.GetWidth() / 2, APP.GetHeight() / 2);
    }
};

module.exports = new Picture();