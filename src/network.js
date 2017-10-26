/**
 * Created by Chen on 2016-03-07.
 */

(function (ac, window) {
    /**
     * @function 发送Ajax请求
     * @param params {object} 参数
     * @param callback {function} 回调
     * @example
     */
    ac.ajax = function (params, callback) {
        api.ajax(params, callback);
    };

    /**
     * @function 取消Ajax请求
     * @param tag {object} 标识
     */
    ac.cancelAjax = function (tag) {
        api.cancelAjax({tag: tag});
    };

    ac.download = function (params, callback) {
        if (typeof params === 'string') {
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
