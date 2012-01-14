Ext.define('App.view.PictureCard', {
    extend: 'Ext.Panel',
    xtype: 'picturecard',
    
    config: {
        // html: 'it works!',
        tpl: '{title}, by {artist}',
        styleHtmlContent: true,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        cls: 'painting',

        // Custom properties:
        artist: 'Dale Adcock',
        url: 'http://daleadcock.com/index.php?/p/p/',
        medium: 'oil on linen',
        title: 'default',
        slug: 'asteroid',
        title: 'Asteroid',
        dimensions: '152.4 x 152.4cm',
        date: '2010-2011'
    },

    constructor: function() {
        this.callParent(arguments);

        this.setItemId('image_' + this.getSlug());
        this.setCls('painting ' + this.getSlug());
    }

});
