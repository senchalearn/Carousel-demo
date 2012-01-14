Ext.define('App.view.PictureCard', {
    extend: 'Ext.Panel',
    xtype: 'picturecard',
    
    config: {
        // html: 'it works!',
        tpl: '{title}',
        styleHtmlContent: true,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        title: 'default',
        slug: 'asteroid',
        title: 'Asteroid',
        dimensions: '152.4 x 152.4cm',
        date: '2010-2011'
    },

    constructor: function() {
        this.callParent(arguments);

        this.setData({
            title: this.getTitle()
        });
    },

    applyTitle: function(newValue, oldValue) {
        console.log('setting title for #' + this.getId() + ' to ' + newValue);
        return newValue;
    },
});
