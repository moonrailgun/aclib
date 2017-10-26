module.exports = function initWin() {
  this.prototype.openWin = function(name, url, params) {
    api.openWin(Object.assign({
      name,
      url
    }, params));
  }

  this.prototype.closeWin = function(name, animation) {
    api.closeWin({
      name,
      animation
    })
  }

  this.prototype.closeToWin = function(name, animation) {
    api.closeToWin({
      name,
      animation
    })
  }

  this.prototype.setWinAttr = function(params) {
    api.setWinAttr(params)
  }

  this.prototype.openFrame = function(name, url, params) {
    api.openFrame(Object.assign({
      name,
      url
    }, params));
  }

  this.prototype.closeFrame = function(name) {
    api.closeFrame({name});
  }

  this.prototype.setFrameAttr = function(name, params) {
    api.setFrameAttr(Object.assign({name}, params));
  }

  this.prototype.bringFrameToFront = function(from, to) {
    api.bringFrameToFront({from, to});
  }

  this.prototype.setFrameClient = function(frameName, cb) {
    api.setFrameClient({frameName}, cb);
  }

  this.prototype.animation = function(name, params, cb) {
    api.animation(Object.assign({name}, params), cb);
  }

  this.prototype.openFrameGroup = function(name, params, cb) {
    api.openFrameGroup(Object.assign({name}, params), cb);
  }

  this.prototype.closeFrameGroup = function(name) {
    api.closeFrameGroup({name});
  }

  this.prototype.setFrameGroupAttr = function(name, params) {
    api.setFrameGroupAttr(Object.assign({name}, params));
  }

  this.prototype.setFrameGroupIndex = function(name, index, params) {
    api.setFrameGroupIndex(Object.assign({name, index}, params));
  }

  this.prototype.openPopoverWin = function(params) {
    api.openPopoverWin(params);
  }

  this.prototype.closePopoverWin = function() {
    api.closePopoverWin();
  }

  this.prototype.openSlidLayout = function(params, cb) {
    api.openSlidLayout(params, cb);
  }

  this.prototype.openSlidPane = function(params) {
    api.openSlidPane(params);
  }

  this.prototype.closeSlidPane = function() {
    api.closeSlidPane();
  }

  this.prototype.lockSlidPane = function() {
    api.lockSlidPane();
  }

  this.prototype.unlockSlidPane = function() {
    api.unlockSlidPane();
  }

  this.prototype.openDrawerLayout = function(name, url, params) {
    api.openDrawerLayout(Object.assign({name, url}, params));
  }

  this.prototype.openDrawerPane = function(type) {
    api.openDrawerPane({type});
  }

  this.prototype.closeDrawerPane = function() {
    api.closeDrawerPane();
  }

  this.prototype.loadData = function(data, params) {
    api.loadData(Object.assign({data}, params));
  }

  this.prototype.execScript = function(script, params) {
    api.execScript(Object.assign({script}, params));
  }

  this.prototype.historyBack = function(frameName, cb) {
    api.historyBack({frameName}, cb);
  }

  this.prototype.historyForward = function(frameName, cb) {
    api.historyForward({frameName}, cb);
  }

  this.prototype.pageUp = function(top = false, cb) {
    api.pageUp({top}, cb);
  }

  this.prototype.pageDown = function(bottom = false, cb) {
    api.pageDown({bottom}, cb);
  }
  
  this.prototype.removeLaunchView = function(animation) {
    api.removeLaunchView({animation});
  }
  
  this.prototype.parseTapmode = function() {
    api.parseTapmode();
  }
}
