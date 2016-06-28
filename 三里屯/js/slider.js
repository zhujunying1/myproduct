	
	function Slider(options){	
		this.wrap = options.wrap;
		this.lock = options.lock;
		
		this._type = options._type;
		this.callback = options.callback;
		this.auto = options.auto;
		this.timer = options.timer || 3000;   //如果有timer，执行timer，没有执行3000毫秒

		this.init();
		this.initDom();
		this.initEvent();
	}

	Slider.prototype = {
		init : function(){
			this._width = $(window).width();
			this._height = $(window).height();
			this._index = 0;
		},
		initDom : function(){
			var self = this;
			this._item = this.wrap.find(".page");
			//alert(this._item)
			for(var i=0;i<self._item.length;i++){
				$(self._item[i]).css('-webkit-transform','translate3d(0,'+i*self._height+'px,0)')
			}
		},
		initEvent : function(){
			var self = this;

			this.auto && 		//定时器------自动播放
			setInterval(function(){
				self._start('+1');
			},self.timer);

			this._item.on('touchstart',function(e){
				e.preventDefault();
				self._startX = e.touches[0].screenX;
				self._startY = e.touches[0].screenY;
				self._offset = 0;
				//alert(self._startX)
			})
			this._item.on('touchmove',function(e){
				e.preventDefault();
				self._moveX = e.touches[0].screenX;
				self._moveY = e.touches[0].screenY;
				self._offsetX = self._moveX-self._startX;
				self._offsetY = self._moveY-self._startY;

				var _height = self._height,
					_offset = self._offsetX;
					_offsetY = self._offsetY;
					
				/*for(var i=0;i<self._item.length;i++){
					//console.log((i-self._index)*_height+_offset)
					$(self._item[i]).css('-webkit-transform','translate3d('+((i-self._index)*_height+_offsetY)+'px,0,0)');
					$(self._item[i]).css('webkit-transition','none');
				}*/
			})
			this._item.on('touchend',function(e){
				var _offsetY = self._offsetY;
				if(_offsetY<0){
					
					self.lock || self._start("+1",e.type);
					
				}
				if(_offsetY>0){
					self.lock || self._start("-1",e.type);
				}
				//console.log(e.type)
			})	
		},
		_start : function(num,_type){
			console.log(self.lock)
			var index = this._index,
				width = this._height,
				item = this._item,
				len = item.length;
			//console.log(typeof (num))
			if(typeof num =='number') nowIndex = num;
			if(typeof num == 'string') nowIndex = index + num * 1;
			if(nowIndex < 0 ) nowIndex = 0;
			if(nowIndex > len-1){
				nowIndex = len-1;
			}

			item[nowIndex] && ($(item[nowIndex]).css({'-webkit-transform':'translate3d(0,0,0)',"display":"block",'-webkit-transition':'transform 0.6s'}));
			item[nowIndex+1] && ($(item[nowIndex+1]).css({'-webkit-transform':'translate3d(0,'+width+'px,0)',"display":"none",'-webkit-transition':'transform 0.6s'}));
			item[nowIndex-1] && ($(item[nowIndex-1]).css({'-webkit-transform':'translate3d(0,'+(-width)+'px,0)',"display":"none",'-webkit-transition':'transform 0.6s'}));

			this._index=nowIndex;

			/*if(_type.indexOf(this._type) >= 0){*/   //检测type == 当前事件类型，调用callback
				this.callback && this.callback();
			/*}*/
		}
	}