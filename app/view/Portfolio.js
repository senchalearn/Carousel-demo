Ext.define('App.view.Portfolio', {
    extend: 'Ext.Carousel',

    requires: ['App.view.PictureCard'],

    config: {
        defaults: {
            xtype: 'picturecard',
            artist: 'Dale Adcock',
            url: 'http://daleadcock.com/index.php?/p/p/',
            medium: 'oil on linen'
        },
        
        items: [
            { id: 'one' },
            { id: 'two' },
            { id: 'three' },
        ]
    }
});
