/**
 * Created by Chen on 2016-02-26.
 */

(function (ac, window) {
    ac.alert = function (msg, buttons, title, callback) {
        api.alert({
            title: title,
            msg: msg,
            buttons: buttons
        }, callback);
    }
})(ac, window);