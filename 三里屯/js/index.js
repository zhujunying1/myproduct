var cvs = document.getElementById("cvs");
	can = cvs.getContext("2d"),w=0,h=0;
function item(){
	this.init();
	this.initDom();
	this.initEvent();
}
item.prototype = {
	init : function(){
		this.lock = true;
	},
	initDom : function(){
		var msg=document.getElementById("msg");
	},
	initEvent : function(){
		self = this;
		$(window).on("touchmove",function(e){
			e.preventDefault();
		})
		var slider = new Slider({
				wrap : $(".container"),
				lock : false,
				callback :function(){
					$(".page").hide();
					$(".page").eq(nowIndex).show();
					var self = this;
					if(nowIndex == 1){
						this.lock = true;
						var m = 0;							
						var timer1 = setInterval(function(){
							m++;
							msg.play();
							if(m>8){
								self.lock = false;
								clearInterval(timer1);
							}					
						},800)
					}
					if(nowIndex == 2){
						this.lock = true;
						setTimeout(function(){
							self.lock = false;
						},2000)
					}
					if(nowIndex == 3){
						this.lock = true;
						setTimeout(function(){
							self.lock = false;
						},5500)
					}
					if(nowIndex == 4){
						this.lock = true;
						setTimeout(function(){
							self.lock = false;
						},5500)
					}
					if(nowIndex == 5){
						this.lock = true;
						setTimeout(function(){
							self.lock = false;
						},6500)
					}
					if(nowIndex == 6){
						this.lock = true;
						setTimeout(function(){
							self.lock = false;
						},4500)
					}
					if(nowIndex == 7){
						this.lock = true;
						self = this;
						$("#eight2").on("tap",function(){
							$(".page").eq(nowIndex).hide();
							$(".page").eq(nowIndex).next().show();
						})
					}	
					if(nowIndex == 8){
							this.lock = true;
						
						alert(nowIndex)
					}
					$(".nine4").on("tap",function(){
						$(".page").eq(8).hide();
						self.lock = false;
						self._index = 0;
						can.clearRect(0,0,300,140);
						$(".page").eq(self._index).show();
					})			
				}
			})
		
	}
}

$(".nine5").on("tap",function(){
	can.clearRect(0,0,300,140);
	var arr = [
				{
					moveX : 0,
					moveY : 115,
					toX : 85,
					toY : 0
				},
				{
					moveX : 85,
					moveY : 115,
					toX : 0,
					toY : 85
				},
				{
					moveX : 85,
					moveY : 28,
					toX : 90,
					toY : 0
				},
				{
					moveX : 175,
					moveY : 28,
					toX : 0,
					toY : -30
				},
				{
					moveX : 175,
					moveY : 58,
					toX : -20,
					toY : 0
				}
			]
   	var s = 0;
	line(arr,0)	
})

$(".nine6").on("tap",function(){
	can.clearRect(0,0,300,140);
	var arr = [
				{
					moveX : 0,
					moveY : 28,
					toX : 175,
					toY : 0
				},
				{
					moveX : 175,
					moveY : 28,
					toX : 0,
					toY : -30
				},
				{
					moveX : 175,
					moveY : 58,
					toX : -20,
					toY : 0
				}
			]
   	var s = 0;
	line(arr,0)	
})

$(".nine7").on("tap",function(){
	can.clearRect(0,0,300,140);
	var arr = [
				{
					moveX : 290,
					moveY : 0,
					toX : 0,
					toY : -115
				},
				{
					moveX : 290,
					moveY : 115,
					toX : -190,
					toY : 0
				},
				{
					moveX : 100,
					moveY : 115,
					toX : 0,
					toY : 10
				}
			]
   	var s = 0;
	line(arr,0)	
})

$(".nine8").on("tap",function(){
	can.clearRect(0,0,300,140);
	var arr = [
				{
					moveX : 180,
					moveY : 140,
					toX : 0,
					toY : 80
				},
				{
					moveX : 180,
					moveY : 60,
					toX : -10,
					toY : 0
				}
			]
   	var s = 0;
	line(arr,0)	
})

$(".nine9").on("tap",function(){
	can.clearRect(0,0,300,140);
	var arr = [
				{
					moveX : 290,
					moveY : 140,
					toX : 0,
					toY : 28
				},
				{
					moveX : 290,
					moveY : 112,
					toX : -190,
					toY : 0
				},
				{
					moveX : 100,
					moveY : 112,
					toX : 0,
					toY : 10
				}
			]
   	var s = 0;
	line(arr,0)	
})
function line(arr,num){
	s = 0;
	timer2 = setTimeout(function(){
		
		num++;				
		if(num>=arr.length){
			return false;
		}
		line(arr,num);
	},1100)
	
	timer1 = setInterval(function(){
		s++;
		if(s >=10){
			clearInterval(timer1);
		}
		
		can.lineWidth = 3;
		can. strokeStyle = "#f00";
		can.beginPath();
		can.lineCap = "square";
		if(arr[num].toX == 0){
			can.moveTo(arr[num].moveX,arr[num].moveY);
			can.lineTo(arr[num].moveX,arr[num].moveY-arr[num].toY/10*s);
		}else{
			can.moveTo(arr[num].moveX,arr[num].moveY);
			can.lineTo(arr[num].moveX+arr[num].toX/10*s,arr[num].moveY);	
		}					
		can.stroke();
		can.closePath();
	},100)
}





	