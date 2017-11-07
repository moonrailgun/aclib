module.exports = function initExtra() {

  /**
   * 动态追加脚本
   *
   * @param  {string} url  路径
   * @param  {object} attr 属性
   * @return {type}      description
   */
  this.prototype.$loadScript = function(url, attr) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src= url;
    if(attr) {
      for (var key in attr) {
        if (attr.hasOwnProperty(key)) {
          script.setAttribute(key, JSON.stringify(attr[key]));
        }
      }
    }
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}
