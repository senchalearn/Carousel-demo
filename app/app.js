Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'App',
    
    controllers: ['Main'],
    views: ['Portfolio'],
    
    launch: function() {
        Ext.Viewport.add({
            xclass: 'App.view.Portfolio'
        });
    }
});
