global.PIXI = require('pixi.js');

global.APP = require('./core/Application');
global.StateManager = require('./core/StateManager');
global.Utils = require('./core/Utils');
global.Input = require('./core/Input');

global.DataDefine = require('./game/DataDefine');
global.StatePreLoad = require('./states/StatePreLoad');
global.StateIngame = require('./states/StateIngame');
global.StateGameOver = require('./states/StateGameOver');

window.main = function ()
{
    APP.Init(GameLoop);
    StateManager.PushState(StatePreLoad);
};

function GameLoop(deltaTime)
{
    deltaTime = deltaTime / (60 * APP.ticker.speed);
    APP.Update(deltaTime);
    APP.Render();
};