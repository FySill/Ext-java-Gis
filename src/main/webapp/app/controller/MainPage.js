Ext.define('MyApp.controller.MainPage', {
    extend: 'Ext.app.Controller',
    
    views:['MyApp.view.header.HeaderLogo', 'MyApp.view.header.HeaderUtility','MyApp.view.tables.DailySearchTable',
           'MyApp.view.body.Navigation', 'MyApp.view.body.Content', 'MyApp.view.tables.SearchGridPanel'],
//           ,'MyApp.view.login.Login'
	refs: {
		headerUtility: 'headerUtility',
		navigation: 'navigation',
//		login:'login'
	},
	control: {
		'headerUtility button[action=login]':{
			mouseover: 'login'
		},
		'headerUtility button[action=menu]':{
			click: 'menu'
		},
		'headerUtility button[action=table]':{
			mouseover: 'table'
		},
		'navigation': {
			click: 'menuShow'
		}
	},
	table:function(){
		var dayTableWin,
		button = Ext.get('btn-table');
		button.on('click', function(){
	        if (!Ext.getCmp('dailySearchTable')) {
	        	dayTableWin = new MyApp.view.tables.DailySearchTable();
	        }
	        button.dom.disabled = true;
	        if (dayTableWin.isVisible()) {
	        	dayTableWin.hide(this, function() {
	                button.dom.disabled = false;
	            });
	        } else {
	        	dayTableWin.show(this, function() {
	                button.dom.disabled = false;
	            });
	        }
	    });
	},

	
	
	
	login: function(){
		var win,
        button = Ext.get('btn-login');

    button.on('click', function(){
        if (!Ext.getCmp('login-show')) {
        	win = new MyApp.view.login.Login();
//        	win = Ext.getCmp('login-show');
//            win = Ext.create('widget.window', {
//            	id : 'login-show',
//                title: 'Layout Window with title <em>after</em> tools',
//                header: {
//                    titlePosition: 2,
//                    titleAlign: 'center'
//                },
////                $window-background-color : #FFFFFF,
//                closable: true,
//                closeAction: 'hide',
//                maximizable: true,
//                animateTarget: button,
//                width: 350,
//                height: 240,
//                tools: [{type: 'pin'}],
//                layout: {
//                    type: 'border',
//                    padding: 5
//                },
//                loader: {
//                    url: 'app/view/login/login.html',
//                    autoLoad: true
//                },
//            });
        }
        button.dom.disabled = true;
        if (win.isVisible()) {
            win.hide(this, function() {
                button.dom.disabled = false;
            });
        } else {
            win.show(this, function() {
                button.dom.disabled = false;
            });
        }
    });
	},
	menu: function(sender, e, eOpts){
		var subherf = Ext.query("a", "navigation");
		Ext.each(subherf, function(item){
			var el = Ext.get(item);
			el.on('click', function(e) {
				console.log("aa");
			}, this);
		})
		var tabs= Ext.query("li", "navigation");
		var submenus_parents= $('#side-menu li.active');
		var submenus = Ext.query("ul", "navigation");
		var submenu = $(this).children('ul');
		var li = $(this);
		Ext.each(tabs, function(item){
			var el = Ext.get(item);
			el.on('click', function(e) {
		if($(this).hasClass('active'))
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				$(this).children('ul').slideUp();
			} else {
				$(this).children('ul').fadeOut(250);
			}
			$(this).removeAttr('class');
		} else 
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				$('#side-menu li.active ul').slideUp();			
				$(this).children('ul').slideDown();
			} else {
				$('#side-menu li.active').fadeOut(250);			
				$(this).children('ul').fadeIn(250);
			}
			$('#side-menu li.active').removeAttr('class');		
			$(this).attr('class', 'active');
		}
		 }, this);
		});
	}
});
