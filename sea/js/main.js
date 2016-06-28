
//配置require
require.config({
	baseUrl : 'http://localhost/require',
	paths : {
		'jquery' : 'lib/jquery-1.8.3.min',
		'zepto' : 'lib/zepto.min',
		'city' : 'js/city'
	}

})
require(['jquery','js/hot','js/script'],function($,hots,citys){
	var html='<ul>';
	$("body").css("background","#ccc")
	$.each(citys,function(i,v){
		html += '<li>'+v+'</li>'
	})
	html += '</ul>';
	$("#hot").html(hots)
	$("#list").html(html)
})