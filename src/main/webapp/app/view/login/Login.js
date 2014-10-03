Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.window.Window',
    
    id : 'login-show',
    title: '<em>LOGIN</em>',
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    closable: true,
    closeAction: 'hide',
    maximizable: true,
    animateTarget: Ext.get('btn-login'),
    width: 350,
    height: 240,
    tools: [{type: 'pin'}],
    layout: {
        type: 'border',
        padding: 5
    },
    loader: {
        url: 'app/view/login/login.html',
        autoLoad: true
    },
});