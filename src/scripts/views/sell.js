var tplSell = require('../tpl/sell.string');


SPA.defineView('sell', {
  html: tplSell,
  bindEvents: {
    'beforeShow': function () {
      // var myScroll = new IScroll('#index-scroll');
    }
  }
});