Ext.define('MyApp.view.tables.DailySearchTable', {
    extend: 'Ext.window.Window',
        
    
    id : 'dailySearchTable',
    title: '<em>LOGIN</em>',
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    closable: true,
    closeAction: 'hide',
    maximizable: true,
    animateTarget: Ext.get('btn-table'),
    width: 600,
    height: 400,
    tools: [{type: 'pin'}],
    layout: {
        type: 'border',
        padding: 5
    },
       items:[{
//    	xtype: Ext.create('MyApp.view.tables.SearchGridPanel'),
    	xtype: 'searchGridPanel',
        border: false,
        height: 350,
        width: 600,
//        title: 'Live Search Grid',
//        renderTo: 'grid-example',
        viewConfig: {
            stripeRows: true
        },
        columns: [{
            text     : 'Company',
            flex     : 1,
            sortable : false,
            dataIndex: 'company'
        },
        {
            text     : 'Price',
            width    : 75,
            sortable : true,
            formatter: 'usMoney',
            dataIndex: 'price'
        },
        {
            text     : 'Change',
            width    : 86,
            sortable : true,
            dataIndex: 'change',
            renderer: function (val){
                if(val > 0){
                    return '<span style="color:green;">' + val + '</span>';
                }else if(val < 0){
                    return '<span style="color:red;">' + val + '</span>';
                }
                return val;
            }
        },
        {
            text     : '% Change',
            width    : 110,
            sortable : true,
            dataIndex: 'pctChange',
            renderer:  function (val){
                if(val > 0){
                    return '<span style="color:green;">' + val + '%</span>';
                }else if(val < 0){
                    return '<span style="color:red;">' + val + '%</span>';
                }
                return val;
            }  
        },
        {
            text     : 'Last Updated',
            width    : 126,
            sortable : true,
            formatter: 'date',
            dataIndex: 'lastChange'
        }],                 // One header just for show. There's no data,
        store: Ext.create('MyApp.store.ArrayStore'), // A dummy empty data store

    }]
//    
    
})