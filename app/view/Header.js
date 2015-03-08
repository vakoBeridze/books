Ext.define('LIB.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    border: false,
    bodyPadding: 5,
    constructor: function (cfg) {
        cfg = cfg || {};
        var me = this;

        me.items = [{
            xtype: 'label',
            html: '<h3>ჩემი ბიბლიოთეკა</h3>'
        }];

        me.callParent(arguments);
    }
});