Ext.define('MyApp.controller.Navigation', {
    extend: 'Ext.app.Controller',
    
    views:['MyApp.view.login.Login','MyApp.view.tables.StatusBar' ],
	refs: {
		navigation: 'navigation',
	},
	control: {
		'navigation': {
			mouseover: 'analysis'
		}
	},
	
});