Ext.define('LibraryApp.model.Book', {
    extend: 'LibraryApp.model.BaseModel',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'clientId',
        type: 'int',
        reference: 'Client'
    }]
});