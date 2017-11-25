Ext.define('LibraryApp.view.createBook.CreateFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.createBook',

    onOk: function (button) {
        var book = new LibraryApp.model.Book();
        var bookName = this.getViewModel().data.bookname;
        book.set('name', bookName);
        var bookStore = Ext.data.StoreManager.lookup('book');
        bookStore.add(book);
        button.up('window').destroy();
    },
    onCancel: function (button) {
        button.up('window').destroy();
    }
});