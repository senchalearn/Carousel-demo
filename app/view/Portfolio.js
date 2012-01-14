Ext.define('App.view.Portfolio', {
    extend: 'Ext.Carousel',
    xtype: 'portfolio',

    requires: [
        'App.view.PictureCard',
        'App.view.GlobalToolbar',
    ],

    config: {
        defaults: {
            xtype: 'picturecard',
            artist: 'Dale Adcock',
            url: 'http://daleadcock.com/index.php?/p/p/',
            medium: 'oil on linen'
        },
        
        items: [{
            xtype: 'globaltoolbar'
        }, {
            slug: 'asteroid',
            title: 'Asteroid',
            dimensions: '152.4 x 152.4cm',
            date: '2010-2011'
        }, {
            slug: 'template',
            title: 'Template',
            dimensions: '245 x 195cm',
            date: '2010-2011'
        }, {
            slug: 'standing',
            title: 'Standing',
            dimensions: '190 x 230cm',
            date: '2009'
        }, {
            slug: 'sitting',
            title: 'Sitting',
            dimensions: '230 x 190cm',
            date: '2009'
        }, {
            slug: 'erect',
            title: 'Erect',
            dimensions: '230 x 190cm',
            date: '2009'
        }]
    }
});
