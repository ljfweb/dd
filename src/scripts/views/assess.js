var tplAssess = require('../tpl/assess.string');


SPA.defineView('assess', {
  html: tplAssess,
  bindEvents: {
    'beforeShow': function () {
      // var myScroll = new IScroll('#index-scroll');
    }
  }
});