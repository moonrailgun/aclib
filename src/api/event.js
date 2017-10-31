module.exports = function initEvent() {
  /** 绑定事件 */
  this.prototype.on = function(eventName, cb) {
    api.addEventListener({
      name: eventName
    }, cb);
  }
  /** 取消监听事件 */
  this.prototype.off = function(eventName) {
    api.removeEventListener({
      name: eventName
    });
  }
  /** 将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。 */
  this.prototype.emit = function(eventName，data) {
    api.sendEvent({
      name: eventName,
      extra: data
    });
  }
  /** 使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效。 */
  this.prototype.accessNative = function(name, data, cb) {
    api.accessNative({
      name: eventName,
      extra: data
    }, cb);
  }
  /** 向用户发出震动、声音提示、灯光闪烁、状态栏消息等通知，以及闹钟功能。状态栏消息点击后，页面可以通过监听 noticeclicked 事件得到内容。<br>注：当应用在前台弹出通知提示时，iOS上面通知将在显示几秒后消失，不会在通知栏保留。 */
  this.prototype.notification = function(params, cb) {
    api.notification(params, cb);
  }
  /** 向用户发出震动、声音提示、灯光闪烁、状态栏消息等通知，以及闹钟功能。状态栏消息点击后，页面可以通过监听 noticeclicked 事件得到内容。<br>注：当应用在前台弹出通知提示时，iOS上面通知将在显示几秒后消失，不会在通知栏保留。 */
  this.prototype.cancelNotification = function(id) {
    api.cancelNotification({id});
  }

  /** 设备电池电量低事件 */
  this.prototype.batterylow = function(cb) {
    this.on('batterylow', cb);
  }
  /** 设备电池状态改变事件，如电量变化或正在充电 */
  this.prototype.batterystatus = function(cb) {
    this.on('batterystatus', cb);
  }
  /** 设备 back 键被点击事件，仅 Android 平台有效<br>该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。 */
  this.prototype.keyback = function(cb) {
    this.on('keyback', cb);
  }
  /** 设备 menu 键被点击事件，仅 Android 平台有效<br>该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。 */
  this.prototype.keymenu = function(cb) {
    this.on('keymenu', cb);
  }
  /** 设备音量加键被点击事件，仅 Android 平台有效<br>该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。 */
  this.prototype.volumeup = function(cb) {
    this.on('volumeup', cb);
  }
  /** 设备音量减键被点击事件，仅 Android 平台有效<br>该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。 */
  this.prototype.volumedown = function(cb) {
    this.on('volumedown', cb);
  }
  /** 监听设备断开网络的事件 */
  this.prototype.offline = function(cb) {
    this.on('offline', cb);
  }
  /** 监听设备连接到网络的事件 */
  this.prototype.online = function(cb) {
    this.on('online', cb);
  }
  /** 应用进入后台事件 */
  this.prototype.pause = function(cb) {
    this.on('pause', cb);
  }
  /** 应用从后台回到前台事件 */
  this.prototype.resume = function(cb) {
    this.on('resume', cb);
  }
  /** Window 或者 Frame 页面滑动到底部事件<br>可用于实现滚动到底部，加载更多功能 */
  this.prototype.scrolltobottom = function(threshold, cb) {
    let extra = {};
    if(arguments.length === 1) {
      cb = threshold;
      extra = {threshold: 0}
    }else {
      extra = {threshold}
    }
    api.addEventListener({
      name:'scrolltobottom',
      extra
    }, cb);
  }
  /** 设备摇动事件，字符串类型。当前 APP 将立即开启摇动检测功能。<br>可用于实现摇一摇功能 */
  this.prototype.shake = function(cb) {
    this.on('shake', cb);
  }
  /** 应用在前台运行期间，用户屏幕截图事件（比如同时按下了 home 键和电源键），只支持 iOS。 */
  this.prototype.takescreenshot = function(cb) {
    this.on('takescreenshot', cb);
  }
  /** 应用多长时间不操作屏幕后触发的事件 */
  this.prototype.appidle = function(timeout, cb) {
    let extra = {};
    if(arguments.length === 1) {
      cb = timeout;
      extra = {timeout: 300}
    }else {
      extra = {timeout}
    }
    api.addEventListener({
      name:'appidle',
      extra
    }, cb);
  }
  /** Window 或者 Frame 的页面全局向下轻扫事件 */
  this.prototype.swipedown = function(cb) {
    this.on('swipedown', cb);
  }
  /** Window 或者 Frame 的页面全局向左轻扫事件 */
  this.prototype.swipeleft = function(cb) {
    this.on('swipeleft', cb);
  }
  /** Window 或者 Frame 的页面全局向右轻扫事件 */
  this.prototype.swiperight = function(cb) {
    this.on('swiperight', cb);
  }
  /** Window 或者 Frame 的页面全局向上轻扫事件 */
  this.prototype.swipeup = function(cb) {
    this.on('swipeup', cb);
  }
  /** Window 或者 Frame 的页面全局单击事件，字符串类型。监听该事件后，点击 window 或者 frame 的任意位置，都将收到 tap 回调。 */
  this.prototype.tap = function(cb) {
    this.on('tap', cb);
  }
  /** Window 或者 Frame 的页面全局长按事件。 */
  this.prototype.longpress = function(cb) {
    this.on('longpress', cb);
  }
  /** Window 显示到屏幕的事件，字符串类型。收到 viewappear 事件回调，即标识当前 Window 已经动画结束，并且完全显示到屏幕上。<br>该事件的作用对象为 Window，Frame 的显示不会收到事件 */
  this.prototype.viewappear = function(cb) {
    this.on('viewappear', cb);
  }
  /** Window 离开屏幕的事件，字符串类型。收到 viewdisappear 事件回调，即标识当前 Window 已经动画结束，并且完全从屏幕上移除。<br>该事件的作用对象为 Window，Frame 的隐藏不会收到事件<br>若是 Window 被关闭，此事件不会再回调 */
  this.prototype.viewdisappear = function(cb) {
    this.on('viewdisappear', cb);
  }
  /** 状态栏通知被用户点击后的回调 */
  this.prototype.noticeclicked = function(cb) {
    this.on('noticeclicked', cb);
  }
  /** 本应用被其他应用调起来时（Android 平台也可以通过 Activity 打开），收到相关数据的回调，字符串类型<br>在任意页面中注册该监听后，如果本应用被其他应用调起，将触发该监听函数，同时将传给该应用的数据回调给网页 */
  this.prototype.appintent = function(cb) {
    this.on('appintent', cb);
  }
  /** 云修复使用静默修复时，更新完毕事件。可通过监听此事件来通知用户做是否强制重启应用等操作或者提示，以使更新生效，字符串类型<br>如果是提示修复，则不会触发该事件 */
  this.prototype.smartupdatefinish = function(cb) {
    this.on('smartupdatefinish', cb);
  }
  /** 闪屏广告被用户点击后的回调 */
  this.prototype.launchviewclicked = function(cb) {
    this.on('launchviewclicked', cb);
  }
  /** 系统键盘弹出的回调，只支持iOS */
  this.prototype.keyboardshow = function(cb) {
    this.on('keyboardshow', cb);
  }
  /** 系统键盘隐藏的回调，只支持iOS */
  this.prototype.keyboardhide = function(cb) {
    this.on('keyboardhide', cb);
  }
  /** 页面安全区域发生变化的回调，可以在回调里根据需要调整页面 */
  this.prototype.safeareachanged = function(cb) {
    this.on('safeareachanged', cb);
  }
}
