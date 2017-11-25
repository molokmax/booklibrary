Ext.define('LibraryApp.view.main.Main', {
    extend: 'Ext.Panel',

    controller: 'main',

    requires: [
        'Ext.Button',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.field.ComboBox',
        'Ext.field.Display',
        'Ext.grid.Grid',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.cell.Widget',
        'Ext.layout.HBox',
        'Ext.layout.Fit',
        'Ext.data.Session'
    ],

    layout: 'hbox',

    viewModel: {
        session: new Ext.data.Session(),
        stores: {
            books: {
                session: new Ext.data.Session(),
                type: 'book'
            },
            clients: {
                session: new Ext.data.Session(),
                type: 'client'
            }
        },
        data: {
            selectedBook: null
        }
    },

    items: [{
        xtype: 'panel',
        title: 'Книги',
        layout: 'fit',
        flex: 1,
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Добавить',
                handler: 'onAdd'
            }, {
                xtype: 'button',
                text: 'Сгенерировать тестовые данные',
                handler: 'onGenerateTestData'
            }]
        }, {
            xtype: 'grid',
            plugins: 'gridcellediting',
            bind: {
                selection: '{selectedBook}',
                store: '{books}'
            },

            columns: [{
                text: 'Название',
                dataIndex: 'name',
                flex: 1,
                editable: false
            }, {
                text: 'ФИО',
                dataIndex: 'clientId',
                editor: {
                    xtype: 'combobox',
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    bind: {
                        store: '{clients}'
                    }
                },
                renderer: function (val, rec) {
                    var client = rec.getClient();
                    if (client) {
                        return client.get('name');
                    } else {
                        return null;
                    }
                },
                flex: 1
            }, {
                cell: {
                    xtype: 'widgetcell',
                    widget: {
                        xtype: 'button',
                        text: 'Удалить',
                        cls: 'delete-button',
                        handler: 'onDelete'
                    }
                }
            }]
        }]
    }, {
        xtype: 'formpanel',
        title: 'Информация',
        flex: 1,
        items: [{
            xtype: 'displayfield',
            label: 'Название',
            name: 'bookname',
            bind: '{selectedBook.name}',
        }, {
            xtype: 'displayfield',
            label: 'ФИО',
            name: 'bookname',
            bind: '{selectedBook.client.name}',
        }]
    }]
});