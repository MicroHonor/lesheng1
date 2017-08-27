Ext.onReady(function(){
	//点击一个按钮，打开一个新的window
	var btn = Ext.get('btn');		//获得一个Ext DOM对象
	btn.on('click',function(){
		win.show();
	});
	
	var win = Ext.create('Ext.window.Window',{
		id:'myWin',
		title:'newWindow',
		width:600,
		height:400,
		closeAction:'hide'
	});
	
});



