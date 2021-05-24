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

// var usersStore1 = Ext.create('Ext.data.Store', {
//     model: 'User',
//     proxy: {
//         type: 'ajax',
//         url: 'users',
//         reader: {
//             type: 'json',
//             rootProperty: 'users'
//         }
//     },
//     autoLoad: true
// });

