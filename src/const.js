/**
 * Created by Chen on 2016-03-02.
 */

(function (ac, window) {
    ac.const = {
        modules: {
            model: 'model',
            query: 'query',
            relation: 'relation',
            user: 'user'
        },
        location: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        },
        sensorType: {
            accelerometer: 'accelerometer',
            gyroscope: 'gyroscope',
            magnetic_field: 'magnetic_field',
            proximity: 'proximity'
        },
        errorCode: {
            error: 0,
            noModule: 1,
            noFunction: 2,
            invalidParameters: 3,
            noAuthority: 4
        },
        telType: {
            tel: 'tel',
            tel_prompt: 'tel_prompt',
            facetime: 'facetime'
        },
        accuracy: {
            in10m: '10m',
            in100m: '100m',
            in1km: '1km',
            in3km: '3km'
        },
        animationType: {
            none: 'none',
            push: 'push',
            movein: 'movein',
            fade: 'fade',
            flip: 'flip',
            reveal: 'reveal',
            ripple: 'ripple',
            curl: 'curl',
            un_curl: 'un_curl',
            suck: 'suck',
            cube: 'cube'
        },
        animationCurve: {
            ease_in_out: 'ease_in_out',
            ease_in: 'ease_in',
            ease_out: 'ease_out',
            linear: 'linear'
        },
        animationDir: {
            from_right: 'from_right',
            from_left: 'from_left',
            from_top: 'from_top',
            from_bottom: 'from_bottom'
        },
        progressAnimationType: {
            fade: 'fade',
            zoom: 'zoom'
        },
        progressStyle: {
            default: 'default'
        },
        mediaType: {
            pic: 'pic',
            video: 'video',
            all: 'all'
        },
        pickerType: {
            date: 'date',
            time: 'time',
            date_time: 'date_time'
        },
        picEncodingType: {
            jpg: 'jpg',
            png: 'png'
        },
        picDestinationType: {
            base64: 'base64',
            url: 'url'
        },
        picSourceType: {
            library: 'library',
            camera: 'camera',
            album: 'album'
        },
        network: {
            unknown: 'unknown',
            ethernet: 'ethernet',
            wifi: 'wifi',
            _2g: '2g',
            _3g: '3g',
            _4g: '4g',
            none: 'none'
        },
        fsError: {
            noError: 0,
            noFile: 1,
            cantRead: 2,
            codeTypeError: 3,
            invalidHandle: 4,
            invalidModify: 5,
            diskOverflow: 6,
            fileIsExist: 7
        },
        system: {
            ios: 'ios',
            android: 'android',
            win: 'win',
            wp: 'wp'
        },
        downloadState: {
            downloading: 0,
            done: 1,
            failed: 2
        },
        ajaxError: {
            connectionError: 0,
            timeout: 1,
            authorityError: 2,
            dataTypeError: 3
        },
        ajaxDataType: {
            json: 'json',
            text: 'text'
        },
        ajaxMethod: {
            get: 'get',
            post: 'post',
            put: 'put',
            delete: 'delete',
            head: 'head'
        },
        statusBarStyle: {
            dark: 'dark',
            light: 'light'
        },
        screenOrientation: {
            portrait_up: 'portrait_up',
            portrait_down: 'portrait_down',
            landscape_left: 'landscape_left',
            landscape_right: 'landscape_right',
            auto: 'auto',
            auto_portrait: 'auto_portrait',
            auto_landscape: 'auto_landscape'
        },
        ajaxUploadStatus: {
            uploading: 0,
            down: 1,
            failed: 2
        },
        popupKeyboardType: {
            resize: 'resize',
            pan: 'pan',
            auto: 'auto'
        },
        cachePolicy: {
            default: 'default',
            cache_else_network: 'cache_else_network',
            no_cache: 'no_cache',
            cache_only: 'cache_only'
        }
    }
})(ac, window);