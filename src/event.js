/**
 * Created by Chen on 2016-02-21.
 */

(function(ac,window){
    ac.event = {
        BATTERY_LOW:'batterylow',
        BATTERY_STATUE:'batterystatus',
        KEY_BACK: 'keyback',
        KEY_MENU: 'keymenu',
        OFFLINE: 'offline',
        ONLINE: 'online',
        PAUSE: 'pause',
        RESUME: 'resume',
        SCROLL_TO_BOTTOM: 'scrolltobottom',
        SHAKE: 'shake',
        SWIPE_DOWN: 'swipedown',
        SWIPE_LEFT: 'swipeleft',
        SWIPE_RIGHT: 'swiperight',
        SWIPE_UP: 'swipeup',
        TAP:'tap',
        VIEW_APPEAR:'viewappear',
        VIEW_DISAPPEAR: 'viewdisappear',
        NOTICE_CLICKED: 'noticeclicked',
        APP_INTENT: 'appintent',
        SMART_UPDATE_FINISH: 'smartupdatefinish'
    };

    ac.addEventListener = function (name, extra, callback) {
        api.addEventListener({
            name: 'online',
            extra: extra || {}
        }, callback || function(ret,err){});
    };

    ac.removeEventListener = function(name){
        api.removeEventListener({name: name});
    };
    
    ac.sendEvent = function (name, extra) {
        api.sendEvent({
            name: name,
            extra: extra || {}
        });
    };
    
    ac.notification = function (obj,callback) {
        api.notification(obj, callback || function(ret,err){});
    };
    
    ac.cancelNotification = function (id) {
        api.cancelNotification({id: id});
    };
})(ac, window);