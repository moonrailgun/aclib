/**
 * Created by Chen on 2016-03-07.
 */

(function (ac, window) {
    ac.ajax = function (params, callback) {
        api.ajax(params, callback);
    };

    ac.cancelAjax = function (tag) {
        api.cancelAjax({tag: tag});
    };

    ac.download = function (params, callback) {
        if (typeof params == 'string') {
            api.download({
                url: params
            }, callback);
        } else {
            api.download(params, callback);
        }
    };

    ac.cancelDownload = function (url) {
        api.cancelDownload({
            url: url
        });
    };

    ac.imageCache = function (params, callback) {
        if (typeof params == 'string') {
            api.imageCache({
                url: params
            }, callback);
        } else {
            api.imageCache(params, callback);
        }
    }
})(ac, window);