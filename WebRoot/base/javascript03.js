//this关键字,总是指向调用者
//window.x=5;			//等同于var x=5;
//function test(){
//	alert(this.x);	
//}
//test.x=10;
////alert(test.x);
//window.test();

////call和apply方法的使用， 主要作用是绑定作用域
//var color = 'red';
//var obj={color:'yellow'};
//function showColor(x,y,z){
//	alert(x+y+z);
//	alert(this.color);
//}
//showColor.call(obj,4,6,5);
//showColor.apply(obj,[3,4,5]);	//apply需要传入数组
//function test(){
//	(function (){
//		for(var i=1;i<=5;i++){
//			alert(i);
//		}
//	})();
//	alert(i);
//}
//test();

//闭包 执行环境，作用域链，js垃圾回收
//函数遇见return直接返回，如果没有return，返回undefined
//function test(){
//	var temp=10;
//	return function(){
//		alert(temp);
//	};
//}
//test()();
//var f =test(); 
//f();

//var i =0;
//function test(){
//	alert(++i);
//}

//避免使用全局变量
var inp=(function(){
	var i=0;
	return {
		getCount:function(){
			alert(++i);
		}
	};
})();



