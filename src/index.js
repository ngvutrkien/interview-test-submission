global.PIXI = require('pixi.js');

global.APP = require('./core/Application');

window.main = function ()
{
    // StateManager.PushState(StatePreLoad);
    APP.Init(GameLoop);
};

function GameLoop(deltaTime)
{
    deltaTime = deltaTime / (60 * APP.ticker.speed);
    console.log(deltaTime);
    // APP.Update(deltaTime);
    // APP.Render();
};