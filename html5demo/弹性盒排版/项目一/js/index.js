/*图像轮播*/
var swipe=new Swiper(".banners",{
	autoplay:2000,
	loop:true,
	pagination:".swiper-pagination"
});

/*滑动效果*/
function move(){
	var lheight=0;
	$("#section #address aside").each(function(){
		lheight+=$(this).height();
	});
	$("#section #address").css("height",lheight);
}
move();
var scr=new IScroll("#section",{
	scrollY:true,
	scrollX:false
})