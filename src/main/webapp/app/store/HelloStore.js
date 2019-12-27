Ext.define('CarCatalog.store.HelloStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'content'],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'greeting',
        reader: {
            type: 'json'

        }
    }
});