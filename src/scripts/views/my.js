var tplMy = require('../tpl/my.string');


SPA.defineView('my', {
  html: tplMy,
  bindEvents: {
    'beforeShow': function () {
      // var myScroll = new IScroll('#index-scroll');
    }
  }
});