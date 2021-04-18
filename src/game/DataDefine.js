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
                { x: 77, y: -163 },
                { x: 155, y: -150 },
                { x: 210, y: -75 }
            ]
        };
    }
};

module.exports = new DataDefine();