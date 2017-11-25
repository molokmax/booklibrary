Ext.define('LibraryApp.store.Book', {
    extend: 'Ext.data.Store',
    alias: 'store.book',
    storeId: 'book',

    model: 'LibraryApp.model.Book',

    sorters: [{
         property: 'name',
         direction: 'ASC'
    }]
});