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
        
        items: [{
            docked: 'top',
            id: 'globaltoolbar',
            xtype: 'toolbar',
            title: '[default]'
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
