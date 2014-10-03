Ext.define('MyApp.view.body.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'navigation',
    
    id: 'navigation',
    height: 1000,
    width: 220,
    loader: {
        url: 'app/view/body/menu.html',
        autoLoad: true
    },
    renderTo: Ext.getBody(),
    animCollapse: true,
    collapsible: true,
    split: true,
    collapseDirection: Ext.Component.DIRECTION_LEFT,
    title: 'Feeds',
    region: 'west',
    margin: '2 0 0 0',  
})
