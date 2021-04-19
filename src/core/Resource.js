class Resource
{
    constructor()
    {
    }

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

    Load(path, responseType)
    {
        return new Promise((resolve, reject) =>
        {
            this.Request('get', path, null, responseType)
                .then(response =>
                {
                    resolve(response);
                })
                .catch(error =>
                {
                    reject(error);
                });
        });
    }

    Request(method, url, body, responseType)
    {
        return new Promise((resolve, reject) =>
        {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);

            if (method == 'post')
            {
                xhr.setRequestHeader("Content-type", "application/json");
            }

            if (responseType)
            {
                xhr.responseType = responseType;
            }

            xhr.onreadystatechange = () =>
            {
                if (xhr.readyState == 4)
                {
                    if (xhr.status == 200)
                    {
                        resolve(xhr.response);
                    }
                    else
                    {
                        reject("error");
                    }
                }
            }
            xhr.send(body);
        })
    }
}

module.exports = new Resource();