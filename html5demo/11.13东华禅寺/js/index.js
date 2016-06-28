/**
 * Created by Administrator on 2015/11/13.
 */

;(function($){
    $("#wrap").on("swipeUp",function(){
        var $H=$(window).height(),
            len=$(this).find("section").length-1,
            index=$(this).find("section.on").index()+1;
        if(index>=len) index=len;
        $(this).find("section").eq(index).addClass("on").siblings().removeClass("on");
        $(this).find(".cont").animate({
            "margin-top":-index*$H+"px"
        },500,"ease")


    }).on("swipeDown",function(){
        var $H=$(window).height(),
            index=$(this).find("section.on").index()-1;
        if(index<=0) index=0;
        $(this).find("section").eq(index).addClass("on").siblings().removeClass("on");
        $(this).find(".cont").animate({
            "margin-top":-index*$H+"px"
        },500,"ease")
    })
//音乐
    var icon=$("#icon"),music=$("#music");
    icon.on("click",function(){
        if(!icon.hasClass("bg")){
            icon.addClass("bg");
            music[0].play();
        }else{
            icon.removeClass("bg");
            music[0].pause();
        }

    });
})(Zepto)
