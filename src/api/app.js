module.exports = function initApp() {
  this.prototype.installApp = function(appUri) {
    api.installApp({appUri})
  }
  this.prototype.uninstallApp = function(packageName) {
    api.uninstallApp({packageName})
  }
  this.prototype.openApp = function(params, cb) {
    api.openApp(params, cb)
  }
  this.prototype.appInstalled = function(params, cb) {
    api.appInstalled(params, cb)
  }
  this.prototype.rebootApp = function() {
    api.rebootApp()
  }
  this.prototype.openWidget = function(params, cb) {
    api.openWidget(params, cb)
  }
  this.prototype.closeWidget = function(params, cb) {
    api.closeWidget(params, cb)
  }
}
