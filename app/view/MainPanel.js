Ext.define('LIB.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    border: false,
    defaults: {
        split: true
    },
    constructor: function (cfg) {
        cfg = cfg || {};
        var me = this;

        var grid = Ext.create('LIB.view.book.Grid');

        var header = Ext.create('LIB.view.Header', {
            region: 'north',
            split: false
        });

        var center = Ext.create('Ext.panel.Panel', {
            region: 'center',
            items: [grid]
        });

        me.items = [header, center];

        me.callParent(arguments);
    }
});