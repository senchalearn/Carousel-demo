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
        {
            ref: 'toggleButton',
            selector: 'button[action=toggle]'
        }
    ],

    init: function() {
        this.control({
            'portfolio': {
                activeitemchange: 'drawToolbar'
            },
            'picturecard': {
                activeitemchange: 'drawToolbar'
            },
            'button[action=toggle]': {
                tap: 'togglePictureCard'
            }
        });
    },

    drawToolbar: function() {
        var picture = this.getCarousel().getActiveItem();
        this.getToolbar().setTitle(picture.getTitle());

        if (picture.getActiveItem().xtype === 'pictureimagecard') {
            console.log("we're looking at a picture")
            this.getToggleButton().setText('info');
        } else {
            console.log("we're looking at a information")
            this.getToggleButton().setText('image');
        }
    },

    togglePictureCard: function() {
        console.log('toggling...');
    }


});
