global.PIXI = require('pixi.js');

global.APP = require('./core/Application');
global.StateManager = require('./core/StateManager');
global.Utils = require('./core/Utils');
global.Input = require('./core/Input');
global.Resource = require('./core/Resource');

global.StatePreLoad = require('./states/StatePreLoad');
global.StateIngame = require('./states/StateIngame');
global.StateGameOver = require('./states/StateGameOver');

window.main = function ()
{
    Resource.Load('images/settings.json', 'json')
        .then((response) =>
        {
            global.DataDefine = response;
            APP.Init(GameLoop);
            StateManager.PushState(StatePreLoad);
        })
        .catch(error =>
        {
            console.error(error);
        });
};

function GameLoop(deltaTime)
{
    deltaTime = deltaTime / (60 * APP.ticker.speed);
    APP.Update(deltaTime);
    APP.Render();
};