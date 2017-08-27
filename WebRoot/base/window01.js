Ext.onReady(function(){
	//Ext.create()方法相当于创建一个实例化对象
	Ext.create('Ext.window.Window',{
		title:'my Window',
		width:550,
		height:320,
		layout:'fit',
		modal:true,		//模态窗口
		x:50,
		y:50,			//xy坐标
		renderTo:Ext.getBody()
	}).show();
	
});



