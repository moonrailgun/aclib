/**
 * Created by Chen on 2016-02-21.
 */

(function(window){
    var ac = {
        acVersion: '1.0.0',

        appId:api.appId,
        appName : api.appName,
        appVersion:api.appVersion,
        systemType:api.systemType,
        systemVersion: api.systemVersion,
        version: api.version,
        deviceId:api.deviceId,
        deviceToken: api.deviceToken,
        deviceModel:api.deviceModel,
        deviceName:api.deviceName,
        operator:api.operator,
        connectionType:api.connectionType,
        fullScreen:api.fullScreen,
        screenWidth:api.screenWidth,
        screenHeight:api.screenHeight,
        winName:api.winName,
        winWidth: api.winWidth,
        winHeight:api.winHeight,
        frameName:api.frameName,
        frameWidth:api.frameWidth,
        frameHeight:api.frameHeight,
        pageParam:api.pageParam,
        wgtParam:api.wgtParam,
        appParam:api.appParam,
        wgtRootDir:api.wgtRootDir,
        fsDir:api.fsDir,
        cacheDir:api.cacheDir
    };

    window.ac = ac;
})(window);