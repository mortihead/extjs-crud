var myData = [
    ['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'],
    ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
    //..................
    ['Verizon Communications', 35.57, 0.39, 1.11, '9/1 12:00am'],
    ['Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am']
];

var store = Ext.create('Ext.data.ArrayStore', {
    fields: ['company', 'price', 'change', 'pctChange', 'lastChange'],
    data: myData
});


Ext.define('CarCatalog.controller.CarCatalogController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            selector: 'carGridView',
            ref: 'carGridView'
        },
        {
            selector: 'userGridView',
            ref: 'userGridView'
        },
        {
            selector: 'carGridView button[action="add"]',
            ref: 'carGridAdd'
        },
        {
            selector: 'carGridView button[action="delete"]',
            ref: 'carGridDelete'
        },
        {
            selector: 'searchCarView button[action="search"]',
            ref: 'searchCar'
        },
        {
            selector: 'addCarFormView',
            ref: 'addCarFormView'
        },
        {
            selector: 'carCatalogView',
            ref: 'carCatalogView'
        },
        {
            selector: 'addCarFormView textfield[name=name] ',
            ref: 'addCarFormName'
        },
        {
            selector: 'addCarFormView textfield[name=price]',
            ref: 'addCarFormPrice'
        },
        {
            selector: 'addCarFormView button[action=save]',
            ref: 'addCarFormSave'
        }
    ],

    init: function () {
        this.control({
            'carGridView  button[action=add]': {
                click: this.onAddCar
            },
            'carGridView  button[action=add2]': {
                click: this.onAddCar2
            },
            'carGridView  button[action=refresh]': {
                click: this.onRefreshClick
            },
            'carGridView  button[action=delete]': {
                click: this.onDelCar
            },
            'searchCarView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'addCarFormView  button[action=save]': {
                click: this.onSaveCar
            },
            'addCarFormView  textfield[name=name]': {
                change: this.onValidation
            },
            'addCarFormView  textfield[name=price]': {
                change: this.onValidation
            }
        });

    },

    onSaveCar: function (button) {
        var me = this;
        var carModel = Ext.create('CarCatalog.model.CarCatalogModel');
        carModel.set(this.getAddCarFormView().down('form').getValues());
        carModel.fields.id = null;
        carModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('CarCatalogStore').add(objAjax);
                me.getAddCarFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такая модель и цена уже существуют',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddCar: function () {
        Ext.widget('addCarFormView');
    },

    onRefreshClick: function () {
        //CarGridView().load(Ext.data.StoreManager.lookup('CarCatalogStore'));

        var grid1 =
        Ext.create('Ext.grid.Panel', {
            title: 'Simpsons',
            store: Ext.getStore('CarCatalogStore'),
            columns: [
                { text: 'ID', dataIndex: 'id' },
                { text: 'Name', dataIndex: 'name' },
                { text: 'Price', dataIndex: 'price', flex: 1 }
            ],
            height: 800,
            width: 600
             });

        var wnd = Ext.create('Ext.window.Window', {
            title: 'Cars',
            height: 200,
            width: 600,
            layout: 'fit',
            items: [grid1]
        });
        wnd.show();

    },

    onAddCar2: function () {
        var S = ''
        var myStore = Ext.getStore('HelloStore');

        var myUsersStore = Ext.getStore('UsersStore');

        S += "myUsersStore: " + (typeof myUsersStore !== "undefined") + "<br\>" +
            "myStore " + (typeof myStore !== "undefined") + "<br\>" +
            "store " + (typeof store !== "undefined") + "<br\>";

        // this.getUserGridView().store = myUsersStore;
        //  myUsersStore.load();

        var myData = [
            {
                "firstName": "Nikolai",
                "lastName": "Bochkarev",
                "age": 43,
                "eyeColor": "econ88@yandex.ru"
            }];

       this.getUserGridView().store.load(myData);

        var Admantstore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            storeId: 'Admants',
            fields: ['id','name'],
            data : myData,
            model: 'User'
            });

        // create the grid
        var grid = Ext.create('Ext.grid.Panel', {
            bufferedRenderer: false,
            store: Admantstore,
                    columns: [
                        {
                            text     : 'First Name',
                            flex     : 1,
                            sortable : true,
                            width    : 100,
                            dataIndex: 'firstName'
                        },
                        {
                            text     : 'Last Name',
                            width    : 100,
                            flex     : 1,
                            sortable : true,
                            dataIndex: 'lastName'
                        },
                        {
                            text: 'Age',
                            dataIndex: 'age'
                        },
                        {
                            text: 'Eye Color',
                            dataIndex: 'eyeColor'
                        }],
            forceFit: true,
            height: 210,
            split: true,
            region: 'north',
        });

        var wnd = Ext.create('Ext.window.Window', {
            title: 'Users',
            height: 200,
            width: 600,
            layout: 'fit',
            items: [grid]
        });
        wnd.show();

        // Ext.create('Ext.window.Window', {
        //     title: 'Users',
        //     height: 200,
        //     width: 600,
        //     layout: 'fit',
        //     items: {
        //         xtype: 'grid',
        //         border: false,
        //         store: Admantstore,
        //         columns: [
        //             {
        //                 text     : 'First Name',
        //                 flex     : 1,
        //                 sortable : true,
        //                 width    : 100,
        //                 dataIndex: 'firstName'
        //             },
        //             {
        //                 text     : 'Last Name',
        //                 width    : 100,
        //                 flex     : 1,
        //                 sortable : true,
        //                 dataIndex: 'lastName'
        //             },
        //             {
        //                 text: 'Age',
        //                 dataIndex: 'age'
        //             },
        //             {
        //                 text: 'Eye Color',
        //                 dataIndex: 'eyeColor'
        //             }],
        //     }}).show();

        // myUsersStore.load({
        //     callback: function (records, operation, success) {
        //         if (success == true) {
        //
        //             for (var i = 0; i < records.length; i++) {
        //                 S += records[i].get('firstName') + "<br\>";
        //             }
        //             Ext.Msg.alert('Title', S, Ext.emptyFn);
        //
        //         } else {
        //             S += "<br\>Error";
        //         }
        //         // console.log(myStore.data);
        //     }
        // });

        // myStore.load({
        //     callback: function (records, operation, success) {
        //         if (success == true) {
        //             var S = '';
        //             for (var i = 0; i < records.length; i++) {
        //                 S += records[i].get('content');
        //             }
        //
        //             Ext.Msg.alert('Title', 'length:'+records.length+'\nresult: '+S, Ext.emptyFn);
        //             Ext.Msg.alert('Title111', 'length:'+records.length+'\nresult: '+S, Ext.emptyFn);
        //         } else {
        //             Ext.Msg.alert('Title', 'Error!', Ext.emptyFn);
        //             Ext.Msg.alert('Title', 'Error!', Ext.emptyFn);
        //         }
        //
        //
        //         // console.log(myStore.data);
        //     }
        // });

        // Ext.Msg.alert('Title', Ext.getStore('HelloStore'), Ext.emptyFn);

    },

    onDelCar: function () {
        var sm = this.getCarGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getCarGridView().store.remove(rs[0]);
        this.getCarGridView().store.commitChanges();
        this.getCarGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('CarCatalogStore').load({
            params: {
                search: this.getCarCatalogView().down('searchCarView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getCarGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddCarFormName().validate() && this.getAddCarFormPrice().validate()) {
            this.getAddCarFormSave().enable();
        } else {
            this.getAddCarFormSave().disable();
        }
    }

});