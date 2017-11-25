Ext.define('LibraryApp.model.Client', {
    extend: 'LibraryApp.model.BaseModel',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }]
});