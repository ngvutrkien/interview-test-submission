class DataDefine
{
    constructor()
    {
        this.images = {
            bee: 'bee.png'
        };

        this.spriteSheets = {
            bee: {
                cutted: { x: 588, y: 0, w: 588, h: 500 },
                full: { x: 0, y: 0, w: 588, h: 500 }
            }
        };
    }
};

module.exports = new DataDefine();