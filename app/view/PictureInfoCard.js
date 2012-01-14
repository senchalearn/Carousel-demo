Ext.define('App.view.PictureInfoCard', {
    extend: 'Ext.Panel',
    xtype: 'pictureinfocard',

    config: {
        cls: 'infocard',
        styleHtmlContent: true,
        tpl: [
            "<h3>{title}</h3>",
            "<p>by <a href='{url}'>{artist}</a></p>",
            "<dl>",
            "  <dt>medium:</dt><dd>{medium}</dd>",
            "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
            "  <dt>date:</dt><dd>{date}</dd>",
            "</dl>"
        ],

        // Custom properties:
        artist:      '[default]',
        url:         '[default]',
        medium:      '[default]',
        title:       '[default]',
        slug:        '[default]',
        title:       '[default]',
        dimensions:  '[default]',
        date:        '[default]'
    },

    constructor: function() {
        this.callParent(arguments);
        this.setData({
            title:       this.getTitle(),
            artist:      this.getArtist(),
            url:         this.getUrl(),
            medium:      this.getMedium(),
            dimensions:  this.getDimensions(),
            date:        this.getDate()
        });
    }
});
