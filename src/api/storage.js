module.exports = function initStorage() {
  this.prototype.readFile = function(path, cb) {
    api.readFile({path}, cb);
  }
  this.prototype.readFileSync = function(path) {
    return api.readFile({path, sync: true});
  }
  this.prototype.writeFile = function(path, data, cb) {
    api.writeFile({path, data}, cb);
  }
  this.prototype.writeFileAppend = function(path, data, cb) {
    api.writeFile({path, data, append: true}, cb);
  }
  this.prototype.setPrefs = function(key, value) {
    api.setPrefs({key, value});
  }
  this.prototype.getPrefs = function(key, cb) {
    api.getPrefs({key}, cb);
  }
  this.prototype.getPrefsSync = function(key) {
    return api.getPrefs({key, sync: true});
  }
  this.prototype.removePrefs = function(key) {
    api.removePrefs({key});
  }
  this.prototype.clearCache = function(timeThreshold = 0, cb) {
    api.clearCache({timeThreshold}, cb);
  }
  this.prototype.getCacheSize = function(cb) {
    api.getCacheSize(cb);
  }
  this.prototype.getCacheSizeSync = function() {
    return api.getCacheSize({sync: true});
  }
  this.prototype.getTotalSpace = function(cb) {
    api.getTotalSpace(cb);
  }
  this.prototype.getTotalSpaceSync = function() {
    return api.getTotalSpace({sync: true});
  }
  this.prototype.getFreeDiskSpace = function(cb) {
    api.getFreeDiskSpace(cb);
  }
  this.prototype.getFreeDiskSpaceSync = function() {
    return api.getFreeDiskSpace({sync: true});
  }
  this.prototype.loadSecureValue = function(key, cb) {
    api.loadSecureValue({key}, cb);
  }
  this.prototype.getFreeDiskSpaceSync = function(key) {
    return api.loadSecureValue({key, sync: true});
  }
}
