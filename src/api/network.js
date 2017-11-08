module.exports = function initNetwork() {
  this.prototype.ajax = function(params) {
    // process jquery data
    if(!params.method && params.type && typeof params.type === 'string') {
      params.method = params.type.toLowerCase();
    }

    api.ajax(params, function(ret, err) {
      if (ret) {
        if(params.success) {
          params.success(ret);
        }
      } else {
        if(params.error) {
          params.error(err);
        }
        console.log("[network error]:"+JSON.stringify(err));
      }

      if(params.complete) {
        params.complete(ret, err);
      }
    })
  }

  this.prototype.get = function(url, data, success, error) {
    var _queryStr = '';
    if(typeof data === 'object') {
      var _dl = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          _dl.push(key+"="+JSON.stringify(data[key]));
        }
      }
      _queryStr = _dl.join('&');
    }

    if(_queryStr) {
      if(url.indexOf('?') === -1) {
        url += '?' + _queryStr;
      }else {
        url += '&' + _queryStr;
      }
    }

    if(typeof data === 'function') {
      error = success;
      success = data;
    }

    api.ajax({
      url,
      method: 'get',
    }, function(ret, err) {
      if (ret) {
        if(success) {
          success(ret);
        }
      } else {
        if(error) {
          error(err);
        }
        console.log("[network error]:"+JSON.stringify(err));
      }
    })
  }

  this.prototype.post = function(url, data, success, error) {
    if(typeof data === 'function') {
      error = success;
      success = data;
    }

    api.ajax({
      url,
      method: 'post',
      data: {
        values: data
      },
    }, function(ret, err) {
      if (ret) {
        if(success) {
          success(ret);
        }
      } else {
        if(error) {
          error(err);
        }
        console.error(JSON.stringify(err));
      }
    })
  }

  this.prototype.cancelAjax = function(tag) {
    api.cancelAjax({tag});
  }

  this.prototype.download = function(url, params, cb) {
    api.download(Object.assign({url}, params), cb);
  }

  this.prototype.download = function(url) {
    api.download({url});
  }

  this.prototype.imageCache = function(url, params, cb) {
    api.imageCache(Object.assign({url}, params), cb);
  }
}
