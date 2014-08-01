Ext.define('MyApp.controller.Login', {
    extend: 'Ext.app.Controller',

    stores: [
        
    ],

    models: [
        
    ],

    views: [
        'MyApp.view.Login'     
    ],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],
    config: {
        control: {
            'login button[action=login]': {
                click: 'login'
            }
         }
    },
    
    login: function(){
    	Ext.Msg.alert('Login', 'Login saved successfully.');
    }
//    init: function() {
//        this.control({
//            'viewport > userlist': {
//                itemdblclick: this.editUser
//            },
//            'useredit button[action=save]': {
//                click: this.updateUser
//            }
//        });
//    },
//
//    editUser: function(grid, record) {
//        var edit = Ext.create('AM.view.user.Edit').show();
//
//        edit.down('form').loadRecord(record);
//    },
//
//    updateUser: function(button) {
//        var win    = button.up('window'),
//            form   = win.down('form'),
//            record = form.getRecord(),
//            values = form.getValues();
//
//        record.set(values);
//        win.close();
//        this.getUsersStore().sync();
//    }
});
