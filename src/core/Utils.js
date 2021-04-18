class Utils
{
    LoadAssets(assets, onProgressCallback, onErrorCallback, onCompleteCallback, loader = PIXI.Loader.shared)
    {
        loader.baseUrl = './images/';
        assets.forEach((name) =>
        {
            loader.add(name, `${name}.jpg`);
        });
        loader.onProgress.add(onProgressCallback);
        loader.onError.add(onErrorCallback);
        loader.onComplete.add(onCompleteCallback);
        loader.load();
    }
}

module.exports = new Utils();