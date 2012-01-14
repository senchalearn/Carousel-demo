Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',

    views:  ['Portfolio', 'PictureCard'],

    refs: [
        {
            ref: 'toolbar',
            selector: 'globaltoolbar'
        },
        {
            ref: 'carousel',
            selector: 'portfolio'
        },
    ],

    init: function() {
        this.control({
            'portfolio': {
                activeitemchange: 'redrawToolbar'
            }
        });
    },

    redrawToolbar: function() {
        var picture = this.getCarousel().getActiveItem();
        this.getToolbar().setTitle(picture.getTitle());
    }

});
