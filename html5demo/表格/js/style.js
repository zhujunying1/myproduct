/**
 * Created by me on 15-9-22.
 */
$(function(){
    $("input[type='text']").css({
        "width":"60px",
        "height":"20px"
    })
    $("input[type='checkbox']").css({
        "width":"16px",
        "height":"16px"
    })
    //全选
    $("#all").on("click",function(){
        var i=0;
        $("tbody tr").each(function(index,dom){
            if($(dom).children("td").first().children("input").prop("checked")==true){
                i++;
            }
        })
        if(i==$("tbody tr").length){
            $("tbody tr").each(function(index,dom){
                $(dom).children("td").first().children("input").prop("checked",false)
            })
        }else{
            $("tbody tr").each(function(index,dom){
                $(dom).children("td").first().children("input").prop("checked",true)
            })
        }

    })
    //复制所选
    $("#clone").on("click",function(){
        $("tbody tr").each(function(index,dom){
            if($(dom).children("td").first().children("input").prop("checked")==true){
                var newTr=$(dom).clone(true);
                newTr.children("td").first().children("input").prop("checked",false)
                newTr.appendTo("tbody")
            }
        })
    })
    //删除选中行，并且只剩一行时无法删除
    $("#delete").on("click",function(){
        $.each($("input[type='checkbox']"),function(){
            if($("tbody tr").length>1){
                if($(this).is(":checked"))
                {
                    $(this).parent().parent().remove();
                }
            }
            else{
                $(this).prop("checked",false)
            }

        })
    });
    $("#clear").on("click",function(){
        $.each($("input[type='checkbox']"),function(){
            $("input").val("")
        })
    });


})
