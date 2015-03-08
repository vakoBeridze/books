Ext.Loader.setConfig({enabled: true});
Ext.application({
    name: 'LIB',
    appFolder: 'app',
    launch: function(){

        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            border: false
        });

        viewport.add(Ext.create('LIB.view.MainPanel'));
    }
});