//Function 函数
//fun1();
//alert(fun2);		//undefined
////1.function语句式
//function fun1(){
//	alert("fun1...");
//};
////2.函数直接量形式
//var fun2 = function(){
//	alert("fun2...");
//};
////3.构造函数形式 不常用
//var fun3 = new Function('x','y','return x+y;');
//alert(fun3(10,20));

var k=1;
function test(){
	var k=2;
	//创建三种函数
//	function f(){return k;}
//	var f = function(){return k;}
	var f = new Function('return k;');
	alert(f());
}

//test();

//function argm(x,y){
//	//argument接收函数的实际参数
//	alert(arguments.length);
//	alert(arguments[2]);
//}
//argm(1,2,4);

function fact(number){
	if(number <=1){
		return 1;
	}else {
//		return number*fact(number-1);
		//arguments.callee表示引用本身
		return number*arguments.callee(number-1);
	}
}
//alert(fact(5));
var fact2 = fact;
fact=null;
alert(fact2(5));



