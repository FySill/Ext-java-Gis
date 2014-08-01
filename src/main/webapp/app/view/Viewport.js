Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',
    items: [{
        region: 'north',
        xtype: 'component',
        padding: 10,
        height: 40,
        html: 'My Company - My Company Motto'
    },
    {
        xtype: 'panel',
        title: 'Navigation',
        region: 'west',
        html: '<ul><li>This area ...</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            bodyPadding: 20,
            html: '<h2>Content...</h2>'
        }]
    }]
   
});