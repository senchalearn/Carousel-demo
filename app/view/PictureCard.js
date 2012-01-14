Ext.define('App.view.PictureCard', {
    extend: 'Ext.Panel',
    xtype: 'picturecard',
    
    config: {
        // html: 'it works!',
        tpl: 'I am number {thing}',
        styleHtmlContent: true,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        thing: 'default'
    },

    constructor: function() {
        this.callParent(arguments);

        this.setData({
            thing: this.getThing()
        });
    },

    applyThing: function(newValue, oldValue) {
        console.log('setting thing for #' + this.getId() + ' to ' + newValue);
        return newValue;
    },
});
