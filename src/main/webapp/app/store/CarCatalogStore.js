Ext.define('CarCatalog.store.CarCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'CarCatalog.model.CarCatalogModel'
    ],
    model: 'CarCatalog.model.CarCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'car',
            read: 'car',
            destroy: 'car',
            update: 'car'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});