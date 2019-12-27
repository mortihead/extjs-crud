Ext.application({
    name: 'CarCatalog',
    views: [
        'AddCarFormView',
        'CarCatalogView',
        'CarGridView',
        'SearchCarView'
    ],
    controllers : [
        'CarCatalogController'
    ],

    stores : [
        'CarCatalogStore',
        'HelloStore'
    ],
    launch: function () {
       // Ext.Msg.alert('Title', 'Hello from '+Ext.getVersion(), Ext.emptyFn);
       // console.log(Ext.getVersion());
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'carCatalogView'
            }
        });
    }
    // launch: function () {
    //     Ext.Msg.alert('Title', 'Hello from '+Ext.getVersion(), Ext.emptyFn);
    //
    // }
});