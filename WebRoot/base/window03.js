Ext.onReady(function(){
	var win = new Ext.window.Window({
		title:'添加子组件示例',
		width:600,
		height:400,
		draggable : false,		//不允许拖拽
		resizable : false,		//不允许改变大小
		closable : false,		//取消右上角的关闭按钮
		collapsible : true,		//显示折叠按钮
		collapseDirection : 'left',	//向左折叠
		bodyStyle: 'background:#ffc; padding:10px;',		//设置样式
		html:'window组件的内容!!!',
		//添加子组件
		items:[{
			
		},{
		
		}]
	});
	win.show();
	
});



