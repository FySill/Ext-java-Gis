Ext.define('MyApp.view.Login', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.login',

	layout : 'border',
	items : [
			{
				region : 'north',
				xtype : 'component',
				padding : 10,
				height : 40,
				// html : 'My Company - My Company Motto'

				html : '<ul class="navigation">'
						+ '<a class="main" href="#url">Navigation</a>'
						+ '<li class="n1"><a href="#">item #1</a></li>'
						+ '<li class="n2"><a href="#">item #2</a></li>'
						+ '<li class="n3"><a href="#">item #3</a>' + '</ul>',
			}, {
				xtype : 'panel',
				title : 'Navigation',
				region : 'west',
				html : '<ul><li>This area ...</li></ul>',
				width : 250,
				split : true,
				tbar : [ {
					text : 'Button',
					handler : 'onClickButton'
				} ]
			}, {
				region : 'center',
				xtype : 'tabpanel',
				items : [ {
					title : 'Tab 1',
					bodyPadding : 20,
					xtype : 'button',
					text : 'login',
					action : 'login',
					html : '<h2>Content...</h2>'
				} ]
			} ]
});