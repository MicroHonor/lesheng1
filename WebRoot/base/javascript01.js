Ext.onReady(function(){
	//Number/String/Boolean/Object/Undefined/Function  数据类型
	//Number
//	var num1=10;
//	var num2=20.5;
//	var num3=0.6;
//	var num4=070;	//8进制，等于56
//	var num5= 1/0;	//正确写法，正无穷
//	var num6=window.parseInt("10dfsfsdf");	//结果等于10
//	var num6=window.parseInt("dsfsdffsfsdf");	//结果为NaN, not a number
//	//注意：NaN与自己不相等
//	
//	//String  单双引号里面的 表示字符串
//	//Boolean  包含true和false
//	
//	//Object 
//	var date = new Date();		//日期
//	var arr = new Array();		//数组
//	var obj = {name :'张三',age:28};		//Json对象
//	//alert(obj.hasOwnProperty('name'));	//判断是否是自己的属性，结果为true
//	var result = typeof obj;
//	//alert(typeof result);
//	
//	//Undefined 变量申明了,但没有被赋值  其实等同于Null
//	var a;
//	//alert("a:"+a);
////	alert(a==null);
////	alert(typeof null);
////	alert(typeof undefined);	//null表示一个空对象的引用
//	
//	//Function 函数类型
//	function fun(){
//		alert("fun");
//	}
//	alert(typeof fun);
	
	//数组
	var arr = [1,2,3,4,5];
	//forEach函数, 不适用于多维数组
//	arr.forEach(function(item){		
//		alert(item);
//	});
	//filter函数
	var newArr = arr.filter(function(item){
		if(item>2){
			return true;
		}else {
			return false;
		}
	});
	alert(newArr);
});


