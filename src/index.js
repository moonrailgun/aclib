const initApi = require('./api/index.js');
const initDom = require('./dom/index.js');

/**
 * @constructor
 */
function AcLib () {
  Object.assign(this, {
    /**
     * aclib版本号
     * @member {string}
     * @example 2.0.0
     */
    acVersion: '2.0.0',
    /**
     * 应用ID
     * @type {string}
     * @example A6980386445546
     */
    appId: api.appId,
    /**
     * 应用在桌面显示名称
     * @type {string}
     * @example AppLoader
     */
    appName : api.appName,
    /**
     * 应用版本号
     * @type {string}
     * @example 1.0.0
     */
    appVersion: api.appVersion,
    /**
     * 系统类型，可以返回ios|android|win|wp
     * @type {string}
     * @example ios
     */
    systemType: api.systemType,
    /**
     * 手机平台的系统版本
     * @type {string}
     * @example 8.0
     */
    systemVersion: api.systemVersion,
    /**
     * 引擎版本信息
     * @type {string}
     * @example 1.0.0
     */
    version: api.version,
    /**
     * 设备唯一标识
     * @type {string}
     * @example FC408F8B-9598-48B6-A740-B9037ADCXXXE
     */
    deviceId: api.deviceId,
    /**
     * iOS中用于推送的Token，若未从系统获取到则返回空字符串
     * @type {string}
     * @example a22241adab6c68b3687a9f0f086c540341f4b3f010546d4af4834ada32281615
     */
    deviceToken: api.deviceToken,
    /**
     * 设备型号
     * @type {string}
     * @example iPhone 5
     */
    deviceModel: api.deviceModel,
    /**
     * 设备名称
     * @type {string}
     * @example “柚子”的 iPhone
     */
    deviceName: api.deviceName,
    /**
     * 设备类型，可以返回pad|phone|tv|car|desk|watch
     * @type {string}
     * @example phone
     */
    uiMode: api.uiMode,
    /**
     * 运营商名称，若未获取到则返回none
     * @type {string}
     * @example 中国移动
     */
    operator: api.operator,
    /**
     * 当前网络连接类型，如 2g、3g、4g、wifi 等
     * @type {string}
     * @example wifi
     */
    connectionType: api.connectionType,
    /**
     * 应用是否全屏,只支持iOS
     * @type {boolean}
     * @example true
     */
    fullScreen: api.fullScreen,
    /**
     * 屏幕分辨率宽
     * @type {number}
     * @example 640
     */
    screenWidth: api.screenWidth,
    /**
     * 屏幕分辨率高
     * @type {number}
     * @example 960
     */
    screenHeight: api.screenHeight,
    /**
     * 当前 window 名称
     * 该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 root
     * @type {string}
     * @example root
     */
    winName: api.winName,
    /**
     * 当前 window 宽度
     * 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局
     * @type {number}
     * @example 320
     */
    winWidth: api.winWidth,
    /**
     * 当前 window 高度
     * 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局
     * @type {number}
     * @example 568
     */
    winHeight: api.winHeight,
    /**
     * frame 名称
     * 若当前环境为 window 中，则该属性值为空字符串
     * @type {string}
     * @example trans-con
     */
    frameName: api.frameName,
    /**
     * frame 宽度
     * @type {number}
     * @example 若当前环境为 window 中，则值和 winWidth 相同
     */
    frameWidth: api.frameWidth,
    /**
     * frame 高度
     * 若当前环境为 window 中，则值和 winHeight 相同
     * @type {number}
     * @example 1.0.0
     */
    frameHeight: api.frameHeight,
    /**
     * 页面不被其它内容（如状态栏）遮住的区域<br>
     * 通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。<br>
     * 比如应对顶部header被状态栏遮住一部分，可以为header增加一个paddingTop，如：<br>
     * header.style.paddingTop = api.safeArea.top + 'px';<br>
     * 在比如在iPhone X上面，底部的导航菜单会被虚拟Home键遮住一部分，可以为footer增加一个paddingBottom，如：<br>
     * footer.style.paddingBottom = api.safeArea.bottom + 'px';
     * @type {object}
     * @example {top:20, left:0, bottom:0, right:0}
     */
    safeArea: api.safeArea,
    /**
     * 页面参数<br>
     * 用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值
     * @type {object}
     * @example {"name" : "tans-con"}
     */
    pageParam: api.pageParam,
    /**
     * widget 参数<br>
     * 用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值
     * @type {object}
     * @example {"name": "API Demo"}
     */
    wgtParam: api.wgtParam,
    /**
     * 当应用被第三方应用打开时，传递过来的参数，字符串类型<br>
     * 建议通过appintent事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。
     * @type {object}
     * @example {"name": "API Demo"}
     */
    appParam: api.appParam,
    /**
     * 当前应用状态栏是否支持沉浸式效果
     * @type {boolean}
     * @example true
     */
    statusBarAppearance: api.statusBarAppearance,
    /**
     * widget: //协议对应的真实目录，即 widget 网页包的根目录<br>
     * 注意该目录为只读，不要往该目录下面写文件
     * @type {string}
     * @example /private/var/mobile/Containers/Bundle/Application/56218B5B-1B59-48CD-8080-DAC54DB46446/UZApp.app/widget
     */
    wgtRootDir: api.wgtRootDir,
    /**
     * fs: //协议对应地真实目录
     * @type {string}
     * @example /var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/A123456789
     */
    fsDir: api.fsDir,
    /**
     * cache://协议对应的真实目录<br>
     * iOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份
     * @type {string}
     * @example /var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Library/Caches/APICloud/Cache/XXXXXX
     */
    cacheDir: api.cacheDir,
    /**
     * box://协议对应的真实目录<br>
     * iOS上面在应用Documents下，安卓上面在系统为app分配的沙箱下，root或者越狱的手机可看到。
     * @type {string}
     * @example /var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/box
     */
    boxDir: api.boxDir,
    /**
     * 获取config.xml配置的debug字段的值。
     * @type {string}
     * @example /var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/box
     */
    debug: api.debug,
    /**
     * 渠道号
     * @type {string}
     * @example Apple App Store
     */
    channel: api.channel,
    /**
     * 设备是否越狱
     * @type {boolean}
     * @example false
     */
    jailbreak: api.jailbreak,
  })
}

/**
 * api对象准备完毕
 * @example ac.ready(function() {...});
 */
AcLib.prototype.ready = (func) => {
  apiready = () => {
    func();
  }
}

initApi.call(AcLib);
initDom.call(AcLib);

module.exports = AcLib;
window.ac = new AcLib();
