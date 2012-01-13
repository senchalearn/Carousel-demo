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
            { id: 'thing-one', thing: 'one' },
            { id: 'thing-two', thing: 'two' },
            { id: 'thing-three', thing: 'three' },
        ]
    }
});
