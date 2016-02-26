/**
 * Created by Chen on 2016-02-26.
 */

(function (ac, window) {
    var utils = {
        getTimeDiff: function (from, to) {
            var now = to || Date.now();
            var diff = now - from;
            var diffSec = parseInt(diff / 1000);//间隔秒数
            var diffMin = parseInt(diffSec / 60);//间隔分钟
            var diffHour = parseInt(diffMin / 60);//间隔小时
            var diffDay = parseInt(diffHour / 24);//间隔天数

            var ms = diff % 1000;
            var s = diffSec % 60;
            var m = diffMin % 60;
            var h = diffHour % 24;
            var d = diffDay;

            return {
                ms: ms,
                s: s,
                m: m,
                h: h,
                d: d,
                diff: diff,
                diffSec: diffSec,
                diffMin: diffMin,
                diffHour: diffHour,
                diffDay: diffDay,
                toString: function () {
                    //var str = d + '-' + h + '-' + m + '-' + s + '-' + ms;
                    var str = [d, h, m, s, ms].join('-');
                    return str;
                }
            }
        },
        //向前填充字符到给定长度
        supply: function (str, supplyStr, rightLength) {
            var text = str.toString();
            if (text.length < rightLength) {
                var temp = '';
                for (var i = 0; i < rightLength - text.length; i++) {
                    temp += supplyStr;
                }
                text = temp + text;
            }
            return text;
        }
    }
})(ac, window);