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
        thing: true // just creating a property inside config:{} creates {get,set}Thing()
    }
});
