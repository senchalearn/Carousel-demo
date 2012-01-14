Ext.define('App.view.PictureImageCard', {
    extend: 'Ext.Panel',
    xtype: 'pictureimagecard',

    config: {
        cls: 'painting',
        slug: 'asteroid'
    },

    constructor: function() {
        this.callParent(arguments);
        this.setItemId('image_' + this.getSlug());
        this.setCls('painting ' + this.getSlug());
    }
});
