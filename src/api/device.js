module.exports = function initDevice() {
  this.prototype.startLocation = function(params, cb) {
    api.startLocation(params, cb);
  }
  this.prototype.stopLocation = function() {
    api.stopLocation();
  }
  this.prototype.getLocation = function(cb) {
    api.getLocation(cb);
  }
  this.prototype.startSensor = function(type, cb) {
    api.startSensor({type}, cb);
  }
  this.prototype.stopSensor = function(type) {
    api.stopSensor({type});
  }
  this.prototype.call = function(type, number) {
    api.call({type, number});
  }
  this.prototype.sms = function(params, cb) {
    api.sms(params, cb);
  }
  this.prototype.mail = function(params, cb) {
    api.mail(params, cb);
  }
  this.prototype.openContacts = function(cb) {
    api.openContacts(cb);
  }
  this.prototype.setFullScreen = function(fullScreen) {
    api.setFullScreen({fullScreen});
  }
  this.prototype.setStatusBarStyle = function(style, color) {
    let params = {};
    if(style === 'dark' || style === 'light') {
      params.style = style;
      if(color) {
        params.color = color;
      }
    }else if(style[0] === '#' || style[0] === 'r') {
      params.color = style;
    }
    api.setStatusBarStyle(params);
  }
  this.prototype.setScreenOrientation = function(orientation) {
    api.setScreenOrientation({orientation});
  }
  this.prototype.setKeepScreenOn = function(keepOn) {
    api.setKeepScreenOn({keepOn});
  }
  this.prototype.toLauncher = function() {
    api.toLauncher();
  }
  this.prototype.setScreenSecure = function(secure) {
    api.setScreenSecure({secure});
  }
  this.prototype.setAppIconBadge = function(badge) {
    api.setAppIconBadge({badge});
  }
  this.prototype.getPhoneNumber = function(cb) {
    api.getPhoneNumber(cb);
  }
  this.prototype.getPhoneNumberSync = function() {
    return api.getPhoneNumber({sync: true});
  }
}
