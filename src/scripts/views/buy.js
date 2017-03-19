var tplBuy = require('../tpl/buy.string');


SPA.defineView('buy', {
	  init: {
    getData: function (vm) {
      $.ajax({
        url: "/CarApp/api/buylist.do",
        type: "get",
        data:{
        	 page: vm.page
        },
        success: function (res) {
            vm.buylist = res;        
        }
      });
    }
  },
  html: tplBuy,
    plugins:[{
    	name:'avalon',
    	  options: function (vm) {
	      vm.buylist = [];
	  		vm.page=0;
	      
   	 	}
    	
    }
  
  ],
  bindEvents: {
    'beforeShow': function () {
	     	var self = this;
	      var vm = self.getVM();
	      self.getData(vm);
	     
    }
  }
});