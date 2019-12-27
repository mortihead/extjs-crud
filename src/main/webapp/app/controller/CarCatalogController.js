Ext.define('CarCatalog.controller.CarCatalogController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            selector: 'carGridView',
            ref: 'carGridView'
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
            'carGridView  button[action=delete]': {
                click: this.onDelCar
            },
            'searchCarView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'carGridView': {
                cellclick: this.onLineGrid
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

    onAddCar2: function () {
        var myStore = Ext.getStore('HelloStore');
        myStore.load({
            callback: function (records, operation, success) {
                if (success == true) {
                    var S = '';
                    for (var i = 0; i < records.length; i++) {
                        S += records[i].get('content');
                    }

                    Ext.Msg.alert('Titl33e', 'length:'+records.length+'\nresult: '+S, Ext.emptyFn);
                } else {
                    Ext.Msg.alert('Title', 'Error!', Ext.emptyFn);
                    Ext.Msg.alert('Title', 'Error!', Ext.emptyFn);
                }


                // console.log(myStore.data);
            }
        });

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