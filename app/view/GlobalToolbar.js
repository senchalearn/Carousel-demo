Ext.define('App.view.GlobalToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'globaltoolbar',

    config: {
        docked: 'top',
        title: '[default]',
        items: [
            {
                xtype: 'button',
                text: '[swap]',
                action: 'toggle'
            }
        ]
    }
});
