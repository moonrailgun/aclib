const initWin = require('./window.js');
const initNetwork = require('./network.js');

module.exports = function initApi() {
  initWin.call(this);
  initNetwork.call(this);
}
