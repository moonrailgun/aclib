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
})(ac, window);