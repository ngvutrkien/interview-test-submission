class Utils
{
    LoadAssets(assets, onProgressCallback, onErrorCallback, onCompleteCallback, loader = PIXI.Loader.shared)
    {
        loader.baseUrl = './images/';
        for (let [name, url] of Object.entries(assets))
        {
            loader.add(name, url);
        }
        loader.onProgress.add(onProgressCallback);
        loader.onError.add(onErrorCallback);
        loader.onComplete.add(onCompleteCallback);
        loader.load();
    }
}

module.exports = new Utils();