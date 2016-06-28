function Slider(opt) {
	this.wrap = opt.wrap;
	this.next = opt.next;
	this.prev = opt.prev;
	this.type = opt.type;
	this.callback = opt.callback;

	this.init();
	this.initDom();
	this.initEvent();
}
Slider.prototype = {
	init : function(){
		this.width = $(window).width();
		this._index=0;
	},
	initDom : function(){
		var self = this;
		this.item = this.wrap.find("div");
		for(var i=0;i<self.item.length;i++){
			$(self.item[i]).css({"-webkit-transform":"translate3d("+i*self.width+"px,0,0)"})
		}
	},
	initEvent : function(){
		var self = this;
		this.item.on("touchstart",function(e){
			//e.preventDefault();
			self.startX = e.touches[0].screenX;
		})
		this.item.on("touchmove",function(e){
			//e.preventDefault();
			self.moveX = e.touches[0].screenX;
			self.offsetX = self.moveX - self.startX;

			var _width = self.width,
				_offsetX = self.offsetX;
			/*for(var i=0;i<self.item.length;i++){
				$(self.item[i]).css({"-webkit-transform":"translate3d("+_offsetX+"px,0,0)"})
				$(self.item[i]).css({"-webkit-transition":"none"})
			}*/

		})
		this.item.on("touchend",function(e){
			var _offsetX = self.offsetX;
			if(_offsetX<0){
				self._start("+1",e.type)
			}else{
				self._start("-1",e.type)
			}
		})
		this.next.on("tap",function(e){
			self._start("+1",e.type);
		})
		this.prev.on("tap",function(e){
			self._start("-1",e.type);
		})
	},
	_start : function(num,type){
		var self = this;
		//console.log(type.indexOf(this.type))
		if(type.indexOf(this.type)>=0){
			self.callback && self.callback();
		}
		
		
		var index = this._index,
			num = num,
			item = this.item,
			len = item.length,
			_width = this.width;
		if(typeof(num) == "number"){
			nowIndex = num;
		}
		if(typeof(num) == "string"){
			nowIndex = index+num*1
		}
		if(nowIndex<0){
			nowIndex = 0;
		}
		if(nowIndex>len-1){
			nowIndex = len-1;
		}
		item[nowIndex] && ($(item[nowIndex])).css({"-webkit-transform":"translate3d(0,0,0)"});
		item[nowIndex+1] && ($(item[nowIndex+1])).css({"-webkit-transform":"translate3d("+_width+"px,0,0)"});
		item[nowIndex-1] && ($(item[nowIndex-1])).css({"-webkit-transform":"translate3d("+(-_width)+"px,0,0)"});

		item[nowIndex] && ($(item[nowIndex])).css({"-webkit-transition":"all 1s"});
		item[nowIndex+1] && ($(item[nowIndex+1])).css({"-webkit-transition":"all 1s"});
		item[nowIndex-1] && ($(item[nowIndex-1])).css({"-webkit-transition":"all 1s"});
		this._index = nowIndex;
	}
}