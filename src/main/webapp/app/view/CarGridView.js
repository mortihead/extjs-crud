Ext.define('CarCatalog.view.UserGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userGridView',
    width: 400,
    height: 300,
    frame: true,
    iconCls: 'icon-user',
    viewConfig: {
        markDirty: false
    },
    columns: [
        {
            text: 'FirstName',
            dataIndex: 'firstName'
        },
        {
            text: 'LastName',
            dataIndex: 'lastName'
        },
        {
            text: 'Age',
            dataIndex: 'age'
        },
        {
            text: 'Eye Color',
            dataIndex: 'eyeColor'
        }
    ],
    usersStore: null,

    initComponent: function () {
        this.callParent();
        var myUsersStore = Ext.getStore('UsersStore');
        this.store = myUsersStore;
        this.usersStore = myUsersStore;
       // this.on('render', this.loadStore, this);
    }
    // ,
    // loadStore: function () {
    //      this.usersStore.load({
    //        scope: this
    //    });
   // }
});

Ext.define('CarCatalog.view.CarGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.carGridView',
    width: 400,
    height: 300,
    frame: true,
    iconCls: 'icon-user',
    viewConfig: {
        markDirty: false
    },
    columns: [
        {
            text: 'Модель',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 2,
            text: 'Цена',
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype: 'textfield',
                regex: /^([0-9]{1,20})*$/,
                regexText: 'Цена должна состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Сохранить',
            cancelBtnText: 'Отменить'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Удалить',
                    iconCls: 'icon-delete',
                    disabled: true
                },
                '-',
                {
                    action: 'add2',
                    text: 'add2',
                    iconCls: 'icon-add',
                    disabled: false
                }
            ]
        }
    ]
});