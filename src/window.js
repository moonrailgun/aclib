/**
 * Created by Chen on 2016-02-26.
 */

(function (ac, window) {
    var openWinDelay = 300;

    ac.openWin = function (name, url, pageParam, bgColor, animation, bounces, reload) {
        api.openWin({
            name: name,
            url: url,
            pageParam: pageParam || api.pageParam,
            bgColor: bgColor || 'rgba(0,0,0,0)',
            bounces: bounces || false,
            animation: animation || undefined,
            delay: api.systemType == "ios" ? 0 : openWinDelay
        });
    };

    ac.closeWin = function (name, animation) {
        api.closeWin({
            name: name || undefined,
            animation: animation || undefined
        });
    };

    ac.closeToWin = function (name, animation) {
        api.closeToWin({
            name: name || undefined,
            animation: animation || undefined
        });
    };

    ac.setWinAttr = function (winAttr) {
        api.setWinAttr(winAttr);
    };

    ac.openFrame = function (name, url, rect, pageParam, bgColor, bounces, reload, showProgress) {
        var defaultRect = {
            x: 0,
            y: 0,
            w: ac.winWidth,
            h: ac.winHeight,
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0
        };

        api.openFrame({
            name: name,
            url: url,
            rect: {
                x: (!!rect.x) ? Number(rect.x) : defaultRect.x,
                y: (!!rect.y) ? Number(rect.y) : defaultRect.y,
                w: (!!rect.w) ? Number(rect.w) : defaultRect.w,
                h: (!!rect.h) ? Number(rect.h) : defaultRect.h,
                marginLeft: (!!rect.marginLeft) ? Number(rect.marginLeft) : defaultRect.marginLeft,
                marginTop: (!!rect.marginTop) ? Number(rect.marginTop) : defaultRect.marginTop,
                marginBottom: (!!rect.marginBottom) ? Number(rect.marginBottom) : defaultRect.marginBottom,
                marginRight: (!!rect.marginRight) ? Number(rect.marginRight) : defaultRect.marginRight
            },
            pageParam: pageParam || api.pageParam,
            bgColor: bgColor || 'rgba(0,0,0,0)',
            bounces: bounces || false,
            animation: animation || null,
            delay: api.systemType == "ios" ? 0 : openWinDelay
        });
    };

    ac.closeFrame = function (name) {
        api.closeFrame({
            name: name || undefined
        });
    };

    ac.setFrameAttr = function (frameAttr) {
        api.setFrameAttr(frameAttr);
    };

    ac.bringFrameToFront = function (from, to) {
        api.bringFrameToFront({
            from: from,
            to: to
        });
    };

    ac.sendFrameToBack = function (from, to) {
        api.sendFrameToBack({
            from: from,
            to: to
        });
    };

    ac.animation = function (opts, callback) {
        api.animation(opts, callback);
    };

    ac.openFrameGroup = function (opts, callback) {
        api.openFrameGroup(opts, callback)
    };

    ac.closeFrameGroup = function (name) {
        api.closeFrameGroup({name: name});
    };

    ac.setFrameGroupAttr = function (name, opts) {
        var params = opts;
        params.name = name;
        api.setFrameGroupAttr(params);
    };

    ac.setFrameGroupIndex = function (name, index, extra) {
        api.setFrameGroupIndex({
            name: name,
            index: index,
            scroll: !!extra ? extra.scroll || false : false,
            reload: !!extra ? extra.reload || false : false
        });
    };

    ac.openPopoverWin = function (name, url, opts) {
        var params = opts;
        params.name = name;
        params.url = url;
        api.openPopoverWin(params);
    };

    ac.closePopoverWin = function () {
        api.closePopoverWin();
    };

    ac.openSlidLayout = function (opts, callback) {
        api.openSlidLayout(opts, callback);
    };

    ac.openSlidPane = function (type) {
        api.openSlidPane({
            type: type
        });
    };

    ac.closeSlidPane = function () {
        api.closeSlidPane();
    };

    ac.lockSlidPane = function () {
        api.lockSlidPane();
    };

    ac.unlockSlidPane = function () {
        api.unlockSlidPane();
    };

    ac.execScript = function (script, windowName, frameName) {
        api.execScript({
            script: script,
            name: windowName,
            frameName: frameName
        });
    };

    ac.historyBack = function (frameName, callback) {
        if (typeof frameName == 'function') {
            api.historyBack({}, callback);
        } else {
            api.historyBack({
                frameName: frameName
            }, callback);
        }
    };

    ac.historyForward = function (frameName, callback) {
        if (typeof frameName == 'function') {
            api.historyForward({}, callback);
        } else {
            api.historyForward({
                frameName: frameName
            }, callback);
        }
    };

    ac.pageUp = function (top, callback) {
        if (typeof top == 'function') {
            api.pageUp({}, callback);
        } else {
            api.pageUp({
                top: top
            }, callback);
        }
    };

    ac.pageDown = function (bottom, callback) {
        if (typeof bottom == 'function') {
            api.pageDown({}, callback);
        } else {
            api.pageDown({
                bottom: bottom
            }, callback);
        }
    };

    ac.removeLaunchView = function (animation) {
        api.removeLaunchView(animation || {});
    };

    ac.parseTapmode = function () {
        api.parseTapmode();
    };
})(ac, window);