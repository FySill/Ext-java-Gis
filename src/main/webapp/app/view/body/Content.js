Ext.define('MyApp.view.body.Content', {
	extend: 'Ext.tab.Panel',
    xtype: 'content',
    
//    height: 1000,
    width: 900,
    region: 'center',
    // Tried this:
    margin: '2 0 0 -4',

    // And that:
    style: {
       border: 0,
       marginLeft: '-3px'
    },
    items:[{
        title: 'MAP',
        bodyPadding: 10,
        html: '<h2>Content...</h2>'
    }]
})