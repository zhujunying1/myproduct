define(['city'],function(citys){
	var arr = [];
	for(var i in citys){
		if(citys[i][1].charAt(0) === 'B'){
			arr.push(citys[i][0])
		}
	}
	return arr;
})