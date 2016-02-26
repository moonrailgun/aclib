/**
 * Created by Chen on 2016-02-26.
 */

(function (ac, window) {
    ac.alert = function (msg, buttons, title, callback) {
        if(typeof msg == 'string'){
            api.alert({
                title: title,
                msg: msg,
                buttons: buttons
            }, callback || function(ret,err){});
        }else if(typeof msg == 'object'){
            api.alert({
                msg: JSON.stringify(msg)
            }, callback || function(ret,err){});
        }
    }
})(ac, window);