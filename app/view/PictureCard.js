Ext.define('App.view.PictureCard', {
    extend: 'Ext.Panel',
    xtype: 'picturecard',
    requires: [
        'App.view.PictureImageCard',
        'App.view.PictureInfoCard'
    ],
    
    config: {
        layout: {
            type: 'card',
            animation: 'slide'
        },

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

        this.setItems(
            {
                xtype:       'pictureinfocard',
                artist:      this.getArtist(),
                url:         this.getUrl(),
                medium:      this.getMedium(),
                title:       this.getTitle(),
                slug:        this.getSlug(),
                title:       this.getTitle(),
                dimensions:  this.getDimensions(),
                date:        this.getDate()
            },
            {
                xtype: 'pictureimagecard',
                slug: this.getSlug()
            }
        );
    }

});
