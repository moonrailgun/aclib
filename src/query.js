/**
 * Created by Chen on 2016-02-27.
 */

(function (ac, window) {
    var query = api.require('query');

    ac.createQuery = function (callback) {
        query.createQuery(function (ret, err) {
            if (ret && ret.qid) {
                var queryId = ret.qid;
                callback(ac.query(queryId));//返回一个query对象
            } else {
                callback(null);
            }
        });
    };

    ac.query = function (queryId) {
        return new Query(queryId);
    };

    var Query = function (queryId) {
        this.queryId = queryId;
    };

    Query.prototype.limit = function (value) {
        query.limit({qid: this.queryId, value: value});
        return this;
    };

    Query.prototype.skip = function (value) {
        query.skip({qid: this.queryId, value: value});
        return this;
    };

    Query.prototype.asc = function (column) {
        query.asc({qid: this.queryId, column: column});
        return this;
    };

    Query.prototype.desc = function (column) {
        query.desc({qid: this.queryId, column: column});
        return this;
    };

    Query.prototype.include = function (column) {
        query.include({qid: this.queryId, column: column});
        return this;
    };

    Query.prototype.whereEqual = function (column, value) {
        query.whereEqual({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereNotEqual = function (column, value) {
        query.whereNotEqual({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereLike = function (column, value) {
        query.whereLike({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereUnLike = function (column, value) {
        query.whereUnLike({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereStartWith = function (column, value) {
        query.whereStartWith({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereEndWith = function (column, value) {
        query.whereEndWith({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereExist = function (column) {
        query.whereExist({qid: this.queryId, column: column});
        return this;
    };

    Query.prototype.whereNotExist = function (column) {
        query.whereNotExist({qid: this.queryId, column: column});
        return this;
    };

    Query.prototype.whereContain = function (column, value) {
        query.whereContain({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereContainAll = function (column, value) {
        query.whereContainAll({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereNotContain = function (column, value) {
        query.whereNotContain({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereGreaterThan = function (column, value) {
        query.whereGreaterThan({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereGreaterThanOrEqual = function (column, value) {
        query.whereGreaterThanOrEqual({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereLessThan = function (column, value) {
        query.whereLessThan({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.whereLessThanOrEqual = function (column, value) {
        query.whereLessThanOrEqual({qid: this.queryId, column: column, value: value});
        return this;
    };

    Query.prototype.justFields = function (value) {
        query.justFields({qid: this.queryId, value: value});
        return this;
    };

    Query.prototype.exceptFields = function (value) {
        query.exceptFields({qid: this.queryId, value: value});
        return this;
    };
})(ac, window);