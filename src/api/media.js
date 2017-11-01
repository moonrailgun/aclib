module.exports = function initMedia() {
  this.prototype.getPicture = function(params, cb) {
    api.getPicture(params, cb);
  }
  this.prototype.saveMediaToAlbum = function(path, cb) {
    api.saveMediaToAlbum({path}, cb);
  }
  this.prototype.startRecord = function(path) {
    api.startRecord({path});
  }
  this.prototype.stopRecord = function(cb) {
    api.stopRecord(cb);
  }
  this.prototype.startPlay = function(path, cb) {
    api.startPlay(path, cb);
  }
  this.prototype.stopPlay = function() {
    api.stopPlay();
  }
  this.prototype.openVideo = function(url) {
    api.openVideo({url});
  }
}
