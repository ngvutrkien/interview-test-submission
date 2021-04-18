global.PIXI = require('pixi.js');

global.APP = require('./core/Application');
global.StateManager = require('./core/StateManager');
global.Utils = require('./core/Utils');
global.Input = require('./core/Input');

global.DataDefine = require('./game/DataDefine');

window.main = function ()
{
    global.StatePreLoad = require('./states/StatePreLoad');
    StateManager.PushState(StatePreLoad);
    APP.Init(GameLoop);
};

function GameLoop(deltaTime)
{
    deltaTime = deltaTime / (60 * APP.ticker.speed);
    APP.Update(deltaTime);
    APP.Render();
};