var tplHome = require('../tpl/home.string');


SPA.defineView('home', {
  html: tplHome,
  bindEvents: {
    'beforeShow': function () {
     		var mySwiper = new Swiper('#h-swipe', {
					autoplay:2000
				});
						
				
    }
  }
});