Ext.define('LibraryApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.MessageBox'
    ],

    /*
     Показать форму для добавления новой записи о книге
    */
    onAdd: function () {
        var form = Ext.create('widget.createBook');
        form.show();
    },
    /*
     Удалить запись о книге (только в случае подтверждения)
    */
    onDelete: function (button) {
        var cell = button.up('widgetcell');
        var record = cell.getRecord();
        Ext.Msg.confirm('Удаление', Ext.String.format('Удалить книгу "{0}" из библиотеки?', record.get('name')), function(buttonId) {
            if (buttonId === 'yes') {
                var bookStore = Ext.data.StoreManager.lookup('book');
                bookStore.remove(record);
            }
        }, this);
    },

    /* 
     Сгенеритьвать данный для тестирования
     */
    onGenerateTestData: function () {
        var bookStore = Ext.data.StoreManager.lookup('book');
        var bookNames = [
            'Букварь',
            'Война и Мир',
            'Мастер и Маргарита',
            'Анна Каренина',
            'Автостопом по галактике',
            'Алиса в Стране чудес',
            'Гарри Поттер и кубок огня',
            'Гарри Поттер и философский камень',
            'Гарри Поттер и тайная комната',
            'Гарри Поттер и узник Азкабана',
            'Старик и море',
            'Собачье сердце'
        ]
        for (var i in bookNames) {
            var book = new LibraryApp.model.Book();
            book.set('name', bookNames[i]);
            bookStore.add(book);
        }
    }

});