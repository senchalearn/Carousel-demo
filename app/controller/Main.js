Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    views:  ['Portfolio', 'PictureCard'],

    refs: [],

    init: function() {
        this.control({
            'picturecard portfolio': {
                show: 'doSomething'
            }
        });
    },
    
    doSomething: function() {
        console.log('adsf')
    }

});
