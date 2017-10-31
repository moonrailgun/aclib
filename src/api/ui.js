module.exports = function initUI() {
  this.prototype.alert = function(params, cb) {
    if(typeof params === 'object') {
      if(params['msg']) {
        api.alert(params, cb);
      }else {
        api.alert({msg: JSON.stringify(params)}, cb);
      }
    }else {
      api.alert({msg: params.toString()}, cb);
    }
  }

  this.prototype.confirm = function(params, cb) {
    if(typeof params === 'object') {
      if(params['msg']) {
        api.confirm(params, cb);
      }else {
        api.confirm({msg: JSON.stringify(params)}, cb);
      }
    }else {
      api.confirm({msg: params.toString()}, cb);
    }
  }

  this.prototype.prompt = function(params, cb) {
    if(typeof params === 'object') {
      if(params['msg']) {
        api.prompt(params, cb);
      }else {
        api.prompt({msg: JSON.stringify(params)}, cb);
      }
    }else {
      api.prompt({msg: params.toString()}, cb);
    }
  }

  this.prototype.actionSheet = function(params, cb) {
    api.actionSheet(params, cb);
  }

  this.prototype.showProgress = function(params, cb) {
    api.showProgress(params, cb);
  }

  this.prototype.hideProgress = function() {
    api.hideProgress();
  }

  this.prototype.toast = function(params) {
    if(typeof params === 'object') {
      if(params['msg']) {
        api.toast(params);
      }else {
        api.toast({msg: JSON.stringify(params)});
      }
    }else {
      api.toast({msg: params.toString()});
    }
  }

  this.prototype.openPicker = function(params, cb) {
    api.openPicker(params, cb);
  }

  this.prototype.setRefreshHeaderInfo = function(params, cb) {
    api.setRefreshHeaderInfo(params, cb);
  }

  this.prototype.setCustomRefreshHeaderInfo = function(params, cb) {
    api.setCustomRefreshHeaderInfo(params, cb);
  }

  this.prototype.refreshHeaderLoading = function() {
    api.refreshHeaderLoading();
  }

  this.prototype.refreshHeaderLoadDone = function() {
    api.refreshHeaderLoadDone();
  }
  this.prototype.showFloatBox = function(params) {
    api.showFloatBox(params);
  }
}
