module.exports = function initModule() {
  this.prototype.require = function(moduleName) {
    return api.require(moduleName);
  }
}
