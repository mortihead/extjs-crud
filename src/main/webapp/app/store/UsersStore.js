Ext.define('CarCatalog.store.UsersStore', {
    extend: 'Ext.data.Store',
    model: 'User',
    proxy: {
        type: 'ajax',
        url: 'users',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});