/**
 * Created by Chen on 2016-03-07.
 */

(function (ac, window) {
    ac.installApp = function (appUri) {
        api.installApp({appUri: appUri});
    };

    ac.appInstalled = function (appBundle, callback) {
        api.appInstalled({appBundle: appBundle}, callback);
    };

    ac.openApp = function (info, appParam, callback) {
        if (ac.systemType == 'ios') {
            api.openApp({
                iosUrl: info.iosUrl,
                appParam: appParam
            });
        } else if (ac.systemType == 'android') {
            api.openApp({
                androidPkg: info.androidPkg,
                mimeType: info.mimeType,
                uri: info.uri
            }, callback);
        }
    };

    ac.openWidget = function (id, wgtParam, animation, callback) {
        api.openWidget({
            id: id,
            wgtParam: wgtParam,
            animation: animation
        }, callback);
    };

    ac.closeWidget = function (id, retData, silent, animation) {
        api.closeWidget({
            id: id,
            retData: retData,
            silent: silent,
            animation: animation
        });
    }
})(ac, window);