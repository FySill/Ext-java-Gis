Ext.define('MyApp.view.header.HeaderUtility', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'headerUtility',
    defaults:{
		xtype : 'button',
		height : 20,
		width : 60,
	},

	height : 40,
	width : 1157,
    items:['->',{
//		style: {
//	   		 float: 'right'
//	   	 },
    	text: 'HOME',
    	id: 'btn-table',
    	action:'table',
//    	url: 'http://localhost:8080/login/',
    	tooltip: 'Home Page'
    },{
    	text: 'login',
    	id:'btn-login',
    	action: 'login',
//    	listeners:{
//            click: {
//                element: 'el', //bind to the underlying el property on the panel
//                fn: function(){ 		
//                    var button = Ext.get('btn-login');
//                if (!Ext.getCmp('login-show')) {
//                    loginWin = Ext.create('widget.window', {
//                    	id : 'login-show',
//                        title: 'Layout Window with title <em>after</em> tools',
//                        header: {
//                            titlePosition: 2,
//                            titleAlign: 'center'
//                        },
//                        closable: true,
//                        closeAction: 'hide',
//                        maximizable: true,
//                        animateTarget: button,
//                        width: 600,
//                        minWidth: 350,
//                        height: 350,
//                        tools: [{type: 'pin'}],
//                        layout: {
//                            type: 'border',
//                            padding: 5
//                        },
//                        loader: {
//                            url: 'app/view/login/login.html',
//                            autoLoad: true
//                        },
//                    });
//                }
////            	button.setDisabled(true);
//                button.dom.disabled = true;
//                if (loginWin.isVisible()) {
//                	loginWin.hide(this, function() {
////                    	button.setDisabled(false);
//                        button.dom.disabled = false;
//                    });
//                } else {
//                	loginWin.show(this, function() {
////                    	button.setDisabled(true);
//                        button.dom.disabled = false;
//                    });
//                }; }
//            },
//            dblclick: {
//                element: 'body', //bind to the underlying body property on the panel
//                fn: function(){ console.log('dblclick body'); }
//            }
//        }
    },{
    	text: 'MENU ',
    	action: 'menu'
    }]
})