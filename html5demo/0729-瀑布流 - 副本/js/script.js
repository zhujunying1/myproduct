window.onload=function(){
	var dataInt={"data":[{"src":'15.jpg'},{"src":'16.jpg'},{"src":'17.jpg'},{"src":'18.jpg'},{"src":'19.jpg'},{"src":'20.jpg'}]}
  waterFall('wrapper','box');
  window.onscroll=function(){
    if(checkScroll()){
       var wrapper=document.getElementById('wrapper');
       for(var i in dataInt.data){
         var oBox=document.createElement('div');
         oBox.className='box';
         wrapper.appendChild(oBox);

         var oPic=document.createElement('div');
         oPic.className='pics';
         oBox.appendChild(oPic);

         var img=document.createElement('img');
         img.src='images/'+dataInt.data[i].src;
         oPic.appendChild(img);
       }
       waterFall('wrapper','box');
    }
  }
}

function waterFall(parent,clsName){
  var oParent=document.getElementById(parent);
  // 获取wrapper下所有class为box的元素
  var boxs=getByClass(oParent,clsName);
  // 计算总列数=页面宽/每一列的宽
  var w=boxs[0].offsetWidth;   // 每一列的宽
  var pagew=document.documentElement.clientWidth || document.body.clientWidth;
  var cols=Math.floor(pagew/w);
  // 计算wrapper的宽且让wrapper这个div在页面中居中显示
  oParent.style.cssText='width:'+w*cols+'px;margin:0 auto';
  var arr=[];  // 存储每一列的高
  // 遍历每一个盒子
  for(var i=0;i<boxs.length;i++){
    if(i<cols){
       arr[i]=boxs[i].offsetHeight;
    }else{
      // 求出数组中的最小值
      var minH=Math.min.apply(this,arr);
      // 求出最小值在数组中的索引
      var index=getIndex(minH,arr);
      // 定位盒子
      boxs[i].style.position='absolute';
      boxs[i].style.top=minH+'px';
      boxs[i].style.left=index*w+'px';
      arr[index]+=boxs[i].offsetHeight;
    }
  }
  console.log(arr);
}

// 通过class获取元素
function getByClass(oParent,clsName){
   var arr=[];
   oParent=oParent?oParent:document;
   var eles=oParent.getElementsByTagName('*');
   for(var i=0;i<eles.length;i++){
     if(new RegExp('( |^)'+clsName+'( |$)').test(eles[i].className)){
         arr.push(eles[i]);
     }
   }
   return arr;
}

// 获取值在数组中的索引
function getIndex(val,arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]==val){
      return i;
    }
  }
}

// 判断是否具备了加载条件
function checkScroll(){
  var oParent=document.getElementById('wrapper'),
      boxs=getByClass(oParent,'box'),
      lastBoxTop=boxs[boxs.length-1].offsetTop+Math.floor(boxs[boxs.length-1].offsetHeight/2),
      winH=document.documentElement.clientHeight || document.body.clientHeight,
      scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
  return lastBoxTop<winH+scrollTop?true:false;
}