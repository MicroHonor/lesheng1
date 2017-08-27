Ext.onReady(function(){
	//定义对象
	//var obj = new Object(); //或者
//	var obj = {name:'张三',age:20};		//json对象
//	obj.sex='男';		//增加属性
//	obj.age=25;			//修改属性
//	delete obj.name;	//删除属性
//	//枚举对象属性
//	for(var attr in obj){
//		alert(attr+" : "+obj[attr]);
//	}
	//定义一个Js的类
	var Person = function(name,age){
		this.name=name;
		this.age=age;
		//private 私有属性
		var _sex='男';
		//get方法
		this.getSex = function(){
			return _sex;
		};
		//set方法
		this.setSex = function(sex){
			_sex=sex;
		};
	};
//	Person.prototype.id=10;			//扩展一个静态属性
//	//扩展方法
//	Person.prototype.method=function(){
//		alert(this.getSex());
//	};
	//原形对象的构造器总是指向当前对象的模板（类本身）
	Person.prototype = {
		constructor:Person,
		id : 10,
		method : function(){
			alert(this.getSex());
		}
	};
	
	//实例化类对象
	var p = new Person('张三',25);
	p.setSex('男');
//	alert(p.id+" , "+p.name+" , "+p.age+" , "+p.getSex());
//	p.method();		//调用对象的方法
	
	//单体模式
//	var SXT={};
//	SXT.Array = {
//		each:function(){
//			alert('each....');
//		},
//		filter:function(){
//			alert('filter...');
//		}
//	};
//	SXT.staticMethod = function(){
//		alert("我是SXT下的静态方法。。。");
//	};
//	SXT.Array.each();
//	SXT.staticMethod();
	
	//闭包单体
	var SXT = function(){
		var array={
			each:function(){
				alert('each....');
			}
		};
		return {
			arrayEach:function(){
				array.each();
			}
		};
	}();
	SXT.arrayEach();
});



