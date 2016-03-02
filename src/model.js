/**
 * Created by Chen on 2016-03-02.
 */

(function (ac, window) {
    var model = api.require(ac.const.modules.model);

    ac.model = function (className) {
        return new Model(className);
    };

    ac.model.config = function (appKey, appId, host) {
        model.config({
            appKey: appKey,
            appId: appId || undefined,
            host: host || undefined
        });
    };

    var Model = function (className) {
        this.class = className;
    };

    Model.prototype.insert = function (value, callback) {
        model.insert({
            class: this.class,
            value: value
        },callback);
    };

    Model.prototype.deleteById = function (id, callback) {
        model.deleteById({
            class: this.class,
            id: id
        },callback);
    };

    Model.prototype.updateById = function (id, value, callback) {
        model.updateById({
            class: this.class,
            id: id,
            value: value
        },callback);
    };
    
    Model.prototype.findById = function (id, callback) {
        model.findById({
            class: this.class,
            id: id
        },callback);
    };

    Model.prototype.findAll = function (queryObj,callback) {
        var qid;
        if(typeof queryObj == 'object'){
            qid = queryObj.queryId;
        }else {
            qid = queryObj.toString();
        }

        model.findAll({
            class: this.class,
            qid: qid
        }, callback);
    };

    Model.prototype.count = function (queryObj, callback) {
        var qid;
        if(typeof queryObj == 'object'){
            qid = queryObj.queryId;
        }else {
            qid = queryObj.toString();
        }

        model.count({
            class: this.class,
            qid: qid
        }, callback);
    };

    Model.prototype.exist = function (id, callback) {
        model.exist({
            class: this.class,
            id: id
        },callback);
    };

    Model.prototype.uploadFile = function (url,name, values, report, callback) {
        model.uploadFile({
            data:{
                file:{
                    url: url,
                    name: name || undefined
                },
                values:values
            },
            report: report || false
        },callback);
    };

    Model.prototype.downloadFile = function (src, type, savePath, report,callback) {
        model.downloadFile({
            url: type === 'url' ? src : undefined,
            id: type === 'id' ? src: undefined,
            savePath: savePath || undefined,
            report: report || false
        },callback);
    };
})(ac, window);