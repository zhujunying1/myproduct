/**
 * Created by DELL-PC on 15-9-21.
 */
$(function(){
    //定义变量
    var i=2,
        y=0;
    var arr=["A","B","C","D"];
    //封装函数
    function event(){
        $("<div class='box2'></div>").appendTo("body");
        $("<P>题目"+(++i)+":<input type='text' class='txt1'><button></button></P>").appendTo(".box2");
        $("<div><P>选项"+arr[y]+":<input type='text' class='txt2'>转到篇<input type='text' class='txt3'>题<button></button></P><P>选项"+arr[++y]+":<input type='text' class='txt2'>转到篇<input type='text' class='txt3'>题<button></button></P><p class='wen'>添加选项>></p><p class='wen2'>新增项目+</p></div>").appendTo(".box2");
    }
    //点击新增项目
    $(".wen2").on("click",function(){
        event();
        $(".box2>div>p>button,.box2>p>button").on("click",function(){
            $(this).parent().remove();
        });
        $(".box2>div>.wen2").on("click",function(){
            event();
        })
    });
    //点击按钮删除对应的父元素
    $("button").on("click",function(){
        $(this).parent().remove();
    });
    //点击添加选项
    $(".wen1").on("click",function(){
        y++;
        $("<P>选项"+arr[++y]+":<input type='text' class='txt2'>转到篇<input type='text' class='txt3'>题<button></button></P>").insertBefore(".wen1")
    })
})