const initWin = require('./window.js');
const initNetwork = require('./network.js');
const initEvent = require('./event.js');
const initApp = require('./app.js');
const initStorage = require('./storage.js');
const initUI = require('./ui.js');

module.exports = function initApi() {
  initWin.call(this);
  initNetwork.call(this);
  initEvent.call(this);
  initApp.call(this);
  initStorage.call(this);
  initUI.call(this);
}
