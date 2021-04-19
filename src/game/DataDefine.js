class DataDefine
{
    constructor()
    {
        this.images = {
            bee: 'bee.png',
            monkey: 'monkey.png',
        };

        this.spriteSheets = {
            bee: {
                cutted: { x: 588.5, y: 0, w: 588.5, h: 500 },
                full: { x: 0, y: 0, w: 588.5, h: 500 }
            },
            monkey: {
                cutted: { x: 0, y: 0, w: 588.5, h: 500 },
                full: { x: 588.5, y: 0, w: 588.5, h: 500 }
            }
        };

        this.dots = {
            bee: [
                { x: 77, y: -163, size: 30 },
                { x: 155, y: -150, size: 30 },
                { x: 210, y: -75, size: 30 }
            ],
            monkey: [
                { x: 147, y: -123, size: 30 },
                { x: 220, y: -117, size: 40 },
                { x: 195, y: -40, size: 30 }
            ]
        };
    }
};

module.exports = new DataDefine();