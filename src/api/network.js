module.exports = function initNetwork() {
  this.prototype.ajax = function(params) {
    api.ajax({params}, function(ret, err) {
      if (ret) {
        if(params.success) {
          params.success(ret);
        }
      } else {
        if(params.error) {
          params.error(err);
        }
      }

      if(params.complete) {
        params.complete(ret);
      }
    })
  }

  this.prototype.get = function(url, data, success, error) {
    api.ajax({
      url,
      method: 'get',
      data,
    }, function(ret, err) {
      if (ret) {
        if(success) {
          success(ret);
        }
      } else {
        if(error) {
          error(err);
        }
        console.error(err);
      }
    })
  }

  this.prototype.post = function(url, data, success, error) {
    api.ajax({
      url,
      method: 'post',
      data,
    }, function(ret, err) {
      if (ret) {
        if(success) {
          success(ret);
        }
      } else {
        if(error) {
          error(err);
        }
        console.error(err);
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
