(function (doc, win) {

  'use strict';

  var docEle = doc.documentElement,
    dpr = Math.min(win.devicePixelRatio, 3),
    scale = 1 / dpr,
    resizeEvent = 'orientationchange' in win ? 'orientationchange' : 'resize';

  dpr = win.top === win.self ? dpr : 1;
  docEle.dataset.dpr = dpr;

  //initial:
  (function recalCulate() {
    var defaultWidth = 750;
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      defaultWidth = 750;
    } else {
      defaultWidth = 1920;
    }
    var width = docEle.clientWidth;
    if (width / dpr > defaultWidth) {
      width = defaultWidth * dpr;
    }
    docEle.dataset.width = width;
    console.log('width:', width);
    docEle.dataset.percent = 100 * (width / defaultWidth);
    docEle.style.fontSize = 100 * (width / defaultWidth) + 'px';
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
  }());

})(document, window);
