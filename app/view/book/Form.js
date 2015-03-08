Ext.define('LIB.view.book.Form', {
    extend: 'Ext.window.Window',
    title: 'რედაქტირება / დამატება',
    layout: 'fit',
    autoShow: true,
    width: 280,
    iconCls: 'icon-user',
    constructor: function () {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [
                    {
                        xtype: 'textfield',
                        name: 'id',
                        fieldLabel: 'id',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'დასახელება'
                    },
                    {
                        xtype: 'textfield',
                        name: 'author',
                        fieldLabel: 'ავტორი'
                    },
                    {
                        xtype: 'textfield',
                        name: 'pages',
                        fieldLabel: 'გვერდები'
                    },
                    {
                        xtype: 'textfield',
                        name: 'qwerty',
                        fieldLabel: 'დამატებით'
                    }
                ]
            }
        ];

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'შენახვა',
                action: 'save'
            }, {
                iconCls: 'icon-reset',
                text: 'გაუქმება',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
