/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('MyApp.view.MainPage', {
    extend: 'Ext.container.Container',
    layout: {
        type: 'border',
    },
    
    defaults:{
    	xtype: 'container'
    },
    
    items: [{
    	id: 'header',
        cls: 'header',
        region: 'north',
        layout: 'hbox',
          
        items: [{
          		xtype: 'headerLogo',
        	},{
          		xtype: 'headerUtility'
        	}]
    	},
    	{
    		id: 'body',
          	xtype: 'navigation',
    	},{
          	xtype: 'content'
    	},{
        cls: 'footer',
//        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        height: 80
    }]
});
