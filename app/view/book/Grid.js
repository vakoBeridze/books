Ext.define('LIB.view.book.Grid', {
    extend: 'Ext.grid.Panel',
    layout: 'fit',
    store: Ext.create('LIB.store.Books'),
    columns: [{
        header: "დასახელება",
        flex: 5,
        dataIndex: 'name'
    }, {
        header: "ავტორი",
        flex: 5,
        dataIndex: 'author'
    }, {
        header: "გვერდები",
        flex: 2,
        dataIndex: 'pages'
    }, {
        header: "დამატებით",
        flex: 4,
        dataIndex: 'qwerty'
    }],
    constructor: function (cfg) {
        cfg = cfg || {};
        var me = this;

        me.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'დამატება',
                handler: editBook
            }, {
                iconCls: 'icon-delete',
                text: 'წაშლა',
                handler: deleteBook
            }]
        }];

        me.callParent(arguments);

        me.on({
            afterrender: function () {
                Ext.Ajax.request({
                    url: 'php/listBooks.php',
                    method: 'GET',
                    success: function (response) {
                        Ext.Msg.alert('Success');
                        var res = response.responseText;
                        res = Ext.decode(res);
                        console.log(res);
                    },
                    failure: function (res) {
                        Ext.Msg.alert('Fail');
                        console.log(res);
                    }
                });
            }
        });

        function editBook(grid, record) {
            var edit = Ext.create('LIB.view.book.Form').show();

            //if(record){
            //    edit.down('form').loadRecord(record);
            //}
        }

        function updateBook(button) {
            var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

            var novo = false;

            if (values.id > 0) {
                record.set(values);
            } else {
                record = Ext.create('LIB.model.Book');
                record.set(values);
                this.getBooksStore().add(record);
                novo = true;
            }

            win.close();
            this.getBooksStore().sync();

            if (novo) { //faz reload para atualziar
                this.getBooksStore().load();
            }
        }

        function deleteBook(button) {

            //var grid = this.getBookGrid(),
            //    record = grid.getSelectionModel().getSelection(),
            //    store = this.getBooksStore();
            //
            //store.remove(record);
            //this.getBooksStore().sync();
            //
            ////faz reload para atualziar
            //this.getBooksStore().load();
        }
    }
});
