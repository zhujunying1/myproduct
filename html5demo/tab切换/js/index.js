;(function($){
	var index=0;
	$("#tab li").on("tap",function(){
		var dis1=33.3*$(this).index(),dis2=-$(this).index()*100;
		$("#move").css("left",dis1+"%");
		$("#cont").css("-webkit-transform","translateX("+dis2+"%)");
	})
})(Zepto)