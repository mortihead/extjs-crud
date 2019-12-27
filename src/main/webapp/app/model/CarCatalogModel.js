Ext.define('CarCatalog.model.CarCatalogModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'price'],
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