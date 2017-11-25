Ext.define('LibraryApp.view.createBook.CreateBook', {
    extend: 'Ext.Dialog',
    xtype: 'createBook',
    title: 'Добавить книгу',

    requires: [
        'Ext.Button',
        'Ext.field.Text'
    ],

    viewModel: {
        data: {
            bookname: ""
        }
    },
    
    controller: 'createBook',

    items: [{
        xtype: 'textfield',
        name: 'name',
        label: 'Название',
        width: 400,
        bind: '{bookname}'
    }],
    
    buttons: {
        ok: {
            text: 'Добавить',
            handler: 'onOk',
            bind: {
                disabled: '{!bookname}'
            }
        },
        cancel: {
            text: 'Отмена',
            handler: 'onCancel'
        }
    }
});