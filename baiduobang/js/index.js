
var m=1;

var time=setInterval(function(){
	m++;
	$(".num span").html(m);
},300);

setTimeout(function(){
	clearInterval(time)
	$(".load").hide();
},3000);

$(".head a").on("click",function(){
	$(".role").hide();
})

$(".myStar a").on("click",function(){
	location.href="qingjing.html";
})
function content(opt){
	this.option = opt.option;
	this.next = opt.next;
	this.prev = opt.prev;
	this.btn = opt.btn;

	this.shou = opt.shou;
	this.select = opt.select;
	this.problem = opt.problem;
	this.article = opt.article;
	this.back = opt.back;
	this.success = opt.success;
	this.fail = opt.fail;
	this.confident = opt.confident;
	this.get = opt.get;
	this.bag = opt.bag;
	this.page = opt.page;

	this.init();
	this.initDom();
	this.initEvent();
	this.start();
}
content.prototype = {
	init : function(){
		this.sum = 0;
		this.ls = window.localStorage;
	},
	initDom : function(){
		
	},
	initEvent : function(){
		var self = this;
		$(this.btn).on("click",function(){
			self.ls.setItem("card",$(this).data("card"));
		})
		$(this.shou).on("swipeUp",function(){
			$(this).css({"-webkit-transform":"translate3d(0,-100%,0)","-webkit-transition":"transform 1s"}).next(".problem").css({"-webkit-transform":"translate3d(0,-100%,0)","-webkit-transition":"transform 1s"}).find(".option");
			var swipe=new Slider({
				wrap : $(this).next(".problem").find(".option"),
				next : $(".next"),
				prev : $(".prev")
			})
		});
		$(this.select).on("click",function(){
			var idx = $(this).data("id")*1;
			self.sum += $(this).data("grade");
			if(idx==3){
				self.ls.setItem("sum",self.sum);
				location.href="result.html";
			}else{
				$(self.shou).eq(idx).hide();
				$(self.problem).eq(idx).hide();
				$(self.shou).eq(idx+1).show();
				$(self.problem).eq(idx+1).show();
			}			
		})
		$(this.back).on("click",function(){
			location.href="index.html";
		})
		$(this.confident).on("click",function(){
			location.href="confident.html";
		})
		$(this.get).on("click",function(){
			location.href="get.html";
		})
		$(this.page).on("swipeUp",function(){
			$(this).find("img").eq(0).css({
				"-webkit-transform":"translateY(-100%)",
				"-webkit-transition":"transform 1s ease-in-out"
			});
			$(this).find("img").eq(1).css({
				"-webkit-transform":"translateY(-100%)",
				"-webkit-transition":"transform 1s ease-in-out"
			})
		})

		$(this.page).on("swipeDown",function(){

			$(this).find("img").eq(0).css({
				"-webkit-transform":"translateY(0)",
				"-webkit-transition":"transform 1s ease-in-out"
			});
			$(this).find("img").eq(1).css({
				"-webkit-transform":"translateY(0)",
				"-webkit-transition":"transform 1s ease-in-out"
			})
		})
	},
	start : function(){
		var self = this;
		var num = Math.floor(Math.random()*2+1);
		if(this.ls.getItem("sum")){
			$(this.article).html(this.ls.getItem("sum"));
			if((this.ls.getItem("sum")*1)>75){
				$(this.success).show();
				$(this.fail).hide();
			}else{
				$(this.success).hide();
				$(this.fail).show();
			}
		}
		if(this.ls.getItem("card")){
			$(this.bag).eq(this.ls.getItem("card")).show().siblings().hide();
			$(this.bag).eq(this.ls.getItem("card")).find(this.page).eq(num).show().siblings().hide();
		}
	}
}
