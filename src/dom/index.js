require('zepto');
require('zepto/src/selector');

module.exports = function initDom() {
  this.prototype.$isAndroid = function() {
    return (/android/gi).test(navigator.appVersion);
  }
  var uzStorage = function() {
    var ls = window.localStorage;
    if (isAndroid) {
      ls = os.localStorage();
    }
    return ls;
  };

  function parseArguments(url, data, fnSuc, dataType) {
    if (typeof(data) == 'function') {
      dataType = fnSuc;
      fnSuc = data;
      data = undefined;
    }
    if (typeof(fnSuc) != 'function') {
      dataType = fnSuc;
      fnSuc = undefined;
    }
    return {
      url: url,
      data: data,
      fnSuc: fnSuc,
      dataType: dataType
    };
  }

  this.prototype.$ = Zepto;// 封装zepto

  this.prototype.$trim = function(str) {
    if (String.prototype.trim) {
      return str == null ? "" : String.prototype.trim.call(str);
    } else {
      return str.replace(/(^\s*)|(\s*$)/g, "");
    }
  }
  this.prototype.$trimAll = function(str) {
    return !!(obj && obj.nodeType == 1);
  }
  this.prototype.$isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  }
  this.prototype.$isArray = function(obj) {
    if (Array.isArray) {
      return Array.isArray(obj);
    } else {
      return obj instanceof Array;
    }
  };
  this.prototype.$isEmptyObject = function(obj) {
    if (JSON.stringify(obj) === '{}') {
      return true;
    }
    return false;
  };
  this.prototype.$addEvt = function(el, name, fn, useCapture) {
    if (!this.prototype.$isElement(el)) {
      console.warn('$api.addEvt Function need el param, el param must be DOM Element');
      return;
    }
    useCapture = useCapture || false;
    if (el.addEventListener) {
      el.addEventListener(name, fn, useCapture);
    }
  };
  this.prototype.$rmEvt = function(el, name, fn, useCapture) {
    if (!this.prototype.$isElement(el)) {
      console.warn('$api.rmEvt Function need el param, el param must be DOM Element');
      return;
    }
    useCapture = useCapture || false;
    if (el.removeEventListener) {
      el.removeEventListener(name, fn, useCapture);
    }
  };
  this.prototype.$one = function(el, name, fn, useCapture) {
    if (!this.prototype.$isElement(el)) {
      console.warn('$api.one Function need el param, el param must be DOM Element');
      return;
    }
    useCapture = useCapture || false;
    var that = this;
    var cb = function() {
      fn && fn();
      that.rmEvt(el, name, cb, useCapture);
    };
    that.addEvt(el, name, cb, useCapture);
  };
  this.prototype.$dom = function(el, selector) {
    if (arguments.length === 1 && typeof arguments[0] == 'string') {
      if (document.querySelector) {
        return document.querySelector(arguments[0]);
      }
    } else if (arguments.length === 2) {
      if (el.querySelector) {
        return el.querySelector(selector);
      }
    }
  };
  this.prototype.$domAll = function(el, selector) {
    if (arguments.length === 1 && typeof arguments[0] == 'string') {
      if (document.querySelectorAll) {
        return document.querySelectorAll(arguments[0]);
      }
    } else if (arguments.length === 2) {
      if (el.querySelectorAll) {
        return el.querySelectorAll(selector);
      }
    }
  };
  this.prototype.$byId = function(id) {
    return document.getElementById(id);
  };
  this.prototype.$first = function(el, selector) {
    if (arguments.length === 1) {
      if (!this.$isElement(el)) {
        console.warn('$api.first Function need el param, el param must be DOM Element');
        return;
      }
      return el.children[0];
    }
    if (arguments.length === 2) {
      return this.dom(el, selector + ':first-child');
    }
  };
  this.prototype.$last = function(el, selector) {
    if (arguments.length === 1) {
      if (!this.$isElement(el)) {
        console.warn('$api.last Function need el param, el param must be DOM Element');
        return;
      }
      var children = el.children;
      return children[children.length - 1];
    }
    if (arguments.length === 2) {
      return this.dom(el, selector + ':last-child');
    }
  };
  this.prototype.$eq = function(el, index) {
    return this.dom(el, ':nth-child(' + index + ')');
  };
  this.prototype.$not = function(el, selector) {
    return this.domAll(el, ':not(' + selector + ')');
  };
  this.prototype.$prev = function(el) {
    if (!this.$isElement(el)) {
      console.warn('$api.prev Function need el param, el param must be DOM Element');
      return;
    }
    var node = el.previousSibling;
    if (node.nodeType && node.nodeType === 3) {
      node = node.previousSibling;
      return node;
    }
  };
  this.prototype.$next = function(el) {
    if (!this.$isElement(el)) {
      console.warn('$api.next Function need el param, el param must be DOM Element');
      return;
    }
    var node = el.nextSibling;
    if (node.nodeType && node.nodeType === 3) {
      node = node.nextSibling;
      return node;
    }
  };
  this.prototype.$closest = function(el, selector) {
    if (!this.$isElement(el)) {
      console.warn('$api.closest Function need el param, el param must be DOM Element');
      return;
    }
    var doms, targetDom;
    var isSame = function(doms, el) {
      var i = 0,
        len = doms.length;
      for (i; i < len; i++) {
        if (doms[i].isSameNode(el)) {
          return doms[i];
        }
      }
      return false;
    };
    var traversal = function(el, selector) {
      doms = this.$domAll(el.parentNode, selector);
      targetDom = isSame(doms, el);
      while (!targetDom) {
        el = el.parentNode;
        if (el != null && el.nodeType == el.DOCUMENT_NODE) {
          return false;
        }
        traversal(el, selector);
      }

      return targetDom;
    };

    return traversal(el, selector);
  };
  this.prototype.$contains = function(parent, el) {
    var mark = false;
    if (el === parent) {
      mark = true;
      return mark;
    } else {
      do {
        el = el.parentNode;
        if (el === parent) {
          mark = true;
          return mark;
        }
      } while (el === document.body || el === document.documentElement);

      return mark;
    }

  };
  this.prototype.$remove = function(el) {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };
  this.prototype.$attr = function(el, name, value) {
    if (!this.$isElement(el)) {
      console.warn('$api.attr Function need el param, el param must be DOM Element');
      return;
    }
    if (arguments.length == 2) {
      return el.getAttribute(name);
    } else if (arguments.length == 3) {
      el.setAttribute(name, value);
      return el;
    }
  };
  this.prototype.$removeAttr = function(el, name) {
    if (!this.$isElement(el)) {
      console.warn('$api.removeAttr Function need el param, el param must be DOM Element');
      return;
    }
    if (arguments.length === 2) {
      el.removeAttribute(name);
    }
  };
  this.prototype.$hasCls = function(el, cls) {
    if (!this.$isElement(el)) {
      console.warn('$api.hasCls Function need el param, el param must be DOM Element');
      return;
    }
    if (el.className.indexOf(cls) > -1) {
      return true;
    } else {
      return false;
    }
  };
  this.prototype.$addCls = function(el, cls) {
    if (!this.$isElement(el)) {
      console.warn('$api.addCls Function need el param, el param must be DOM Element');
      return;
    }
    if ('classList' in el) {
      el.classList.add(cls);
    } else {
      var preCls = el.className;
      var newCls = preCls + ' ' + cls;
      el.className = newCls;
    }
    return el;
  };
  this.prototype.$removeCls = function(el, cls) {
    if (!this.$isElement(el)) {
      console.warn('$api.removeCls Function need el param, el param must be DOM Element');
      return;
    }
    if ('classList' in el) {
      el.classList.remove(cls);
    } else {
      var preCls = el.className;
      var newCls = preCls.replace(cls, '');
      el.className = newCls;
    }
    return el;
  };
  this.prototype.$toggleCls = function(el, cls) {
    if (!this.$isElement(el)) {
      console.warn('$api.toggleCls Function need el param, el param must be DOM Element');
      return;
    }
    if ('classList' in el) {
      el.classList.toggle(cls);
    } else {
      if (this.$hasCls(el, cls)) {
        this.$removeCls(el, cls);
      } else {
        this.$addCls(el, cls);
      }
    }
    return el;
  };
  this.prototype.$val = function(el, val) {
    if (!this.$isElement(el)) {
      console.warn('$api.val Function need el param, el param must be DOM Element');
      return;
    }
    if (arguments.length === 1) {
      switch (el.tagName) {
        case 'SELECT':
          var value = el.options[el.selectedIndex].value;
          return value;
          break;
        case 'INPUT':
          return el.value;
          break;
        case 'TEXTAREA':
          return el.value;
          break;
      }
    }
    if (arguments.length === 2) {
      switch (el.tagName) {
        case 'SELECT':
          el.options[el.selectedIndex].value = val;
          return el;
          break;
        case 'INPUT':
          el.value = val;
          return el;
          break;
        case 'TEXTAREA':
          el.value = val;
          return el;
          break;
      }
    }

  };
  this.prototype.$prepend = function(el, html) {
    if (!this.$isElement(el)) {
      console.warn('$api.prepend Function need el param, el param must be DOM Element');
      return;
    }
    el.insertAdjacentHTML('afterbegin', html);
    return el;
  };
  this.prototype.$append = function(el, html) {
    if (!this.$isElement(el)) {
      console.warn('$api.append Function need el param, el param must be DOM Element');
      return;
    }
    el.insertAdjacentHTML('beforeend', html);
    return el;
  };
  this.prototype.$before = function(el, html) {
    if (!this.$isElement(el)) {
      console.warn('$api.before Function need el param, el param must be DOM Element');
      return;
    }
    el.insertAdjacentHTML('beforebegin', html);
    return el;
  };
  this.prototype.$after = function(el, html) {
    if (!this.$isElement(el)) {
      console.warn('$api.after Function need el param, el param must be DOM Element');
      return;
    }
    el.insertAdjacentHTML('afterend', html);
    return el;
  };
  this.prototype.$html = function(el, html) {
    if (!this.$isElement(el)) {
      console.warn('$api.html Function need el param, el param must be DOM Element');
      return;
    }
    if (arguments.length === 1) {
      return el.innerHTML;
    } else if (arguments.length === 2) {
      el.innerHTML = html;
      return el;
    }
  };
  this.prototype.$text = function(el, txt) {
    if (!this.$isElement(el)) {
      console.warn('$api.text Function need el param, el param must be DOM Element');
      return;
    }
    if (arguments.length === 1) {
      return el.textContent;
    } else if (arguments.length === 2) {
      el.textContent = txt;
      return el;
    }
  };
  this.prototype.$offset = function(el) {
    if (!this.$isElement(el)) {
      console.warn('$api.offset Function need el param, el param must be DOM Element');
      return;
    }
    var sl = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    var rect = el.getBoundingClientRect();
    return {
      l: rect.left + sl,
      t: rect.top + st,
      w: el.offsetWidth,
      h: el.offsetHeight
    };
  };
  this.prototype.$css = function(el, css) {
    if (!this.$isElement(el)) {
      console.warn('$api.css Function need el param, el param must be DOM Element');
      return;
    }
    if (typeof css == 'string' && css.indexOf(':') > 0) {
      el.style && (el.style.cssText += ';' + css);
    }
  };
  this.prototype.$cssVal = function(el, prop) {
    if (!this.$isElement(el)) {
      console.warn('$api.cssVal Function need el param, el param must be DOM Element');
      return;
    }
    if (arguments.length === 2) {
      var computedStyle = window.getComputedStyle(el, null);
      return computedStyle.getPropertyValue(prop);
    }
  };
  this.prototype.$jsonToStr = function(json) {
    if (typeof json === 'object') {
      return JSON && JSON.stringify(json);
    }
  };
  this.prototype.$strToJson = function(str) {
    if (typeof str === 'string') {
      return JSON && JSON.parse(str);
    }
  };
  this.prototype.$setStorage = function(key, value) {
    if (arguments.length === 2) {
      var v = value;
      if (typeof v == 'object') {
        v = JSON.stringify(v);
        v = 'obj-' + v;
      } else {
        v = 'str-' + v;
      }
      var ls = uzStorage();
      if (ls) {
        ls.setItem(key, v);
      }
    }
  };
  this.prototype.$getStorage = function(key) {
    var ls = uzStorage();
    if (ls) {
      var v = ls.getItem(key);
      if (!v) {
        return;
      }
      if (v.indexOf('obj-') === 0) {
        v = v.slice(4);
        return JSON.parse(v);
      } else if (v.indexOf('str-') === 0) {
        return v.slice(4);
      }
    }
  };
  this.prototype.$rmStorage = function(key) {
    var ls = uzStorage();
    if (ls && key) {
      ls.removeItem(key);
    }
  };
  this.prototype.$clearStorage = function() {
    var ls = uzStorage();
    if (ls) {
      ls.clear();
    }
  };
  this.prototype.$fixIos7Bar = function(el) {
    return this.$fixStatusBar(el);
  };
  this.prototype.$fixStatusBar = function(el) {
    if (!this.$isElement(el)) {
      console.warn('$api.fixStatusBar Function need el param, el param must be DOM Element');
      return 0;
    }
    el.style.paddingTop = api.safeArea.top + 'px';
    return el.offsetHeight;
  };
  this.prototype.$fixTabBar = function(el) {
    if (!this.$isElement(el)) {
      console.warn('$api.fixTabBar Function need el param, el param must be DOM Element');
      return 0;
    }
    el.style.paddingBottom = api.safeArea.bottom + 'px';
    return el.offsetHeight;
  };
  this.prototype.$toast = function(title, text, time) {
    var opts = {};
    var show = function(opts, time) {
      api.showProgress(opts);
      setTimeout(function() {
        api.hideProgress();
      }, time);
    };
    if (arguments.length === 1) {
      var time = time || 500;
      if (typeof title === 'number') {
        time = title;
      } else {
        opts.title = title + '';
      }
      show(opts, time);
    } else if (arguments.length === 2) {
      var time = time || 500;
      var text = text;
      if (typeof text === "number") {
        var tmp = text;
        time = tmp;
        text = null;
      }
      if (title) {
        opts.title = title;
      }
      if (text) {
        opts.text = text;
      }
      show(opts, time);
    }
    if (title) {
      opts.title = title;
    }
    if (text) {
      opts.text = text;
    }
    time = time || 500;
    show(opts, time);
  };
  this.prototype.$post = function( /*url,data,fnSuc,dataType*/ ) {
    var argsToJson = parseArguments.apply(null, arguments);
    var json = {};
    var fnSuc = argsToJson.fnSuc;
    argsToJson.url && (json.url = argsToJson.url);
    argsToJson.data && (json.data = argsToJson.data);
    if (argsToJson.dataType) {
      var type = argsToJson.dataType.toLowerCase();
      if (type == 'text' || type == 'json') {
        json.dataType = type;
      }
    } else {
      json.dataType = 'json';
    }
    json.method = 'post';
    api.ajax(json,
      function(ret, err) {
        if (ret) {
          fnSuc && fnSuc(ret);
        }
      }
    );
  };
  this.prototype.$get = function( /*url,fnSuc,dataType*/ ) {
    var argsToJson = parseArguments.apply(null, arguments);
    var json = {};
    var fnSuc = argsToJson.fnSuc;
    argsToJson.url && (json.url = argsToJson.url);
    //argsToJson.data && (json.data = argsToJson.data);
    if (argsToJson.dataType) {
      var type = argsToJson.dataType.toLowerCase();
      if (type == 'text' || type == 'json') {
        json.dataType = type;
      }
    } else {
      json.dataType = 'text';
    }
    json.method = 'get';
    api.ajax(json,
      function(ret, err) {
        if (ret) {
          fnSuc && fnSuc(ret);
        }
      }
    );
  };
}
