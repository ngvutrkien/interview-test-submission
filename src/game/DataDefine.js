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

        this.dots = {
            bee: [
                { x: 70, y: -170 },
                { x: 155, y: -155 },
                { x: 205, y: -80 }
            ]
        };
    }
};

module.exports = new DataDefine();