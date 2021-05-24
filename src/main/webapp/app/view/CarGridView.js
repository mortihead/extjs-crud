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
        // var myUsersStore = Ext.getStore('UsersStore');
        // this.store = myUsersStore;
        // this.usersStore = myUsersStore;
        // this.on('render', this.loadStore, this);
    }
    //  ,
    //  loadStore: function () {
    //       this.usersStore.load({
    //         scope: this
    //     });
    // }
});

Ext.define('CarCatalog.view.CarGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.carGridView',
    requires: [
        'CarCatalog.store.CarCatalogStore'
    ],
    width: 400,
    height: 300,
    frame: true,
    store: Ext.getStore('CarCatalogStore'),
    iconCls: 'icon-user',
    viewConfig: {
        markDirty: false
    },
    columns: [
        {
            text: 'ID',
            flex: 1,
            sortable: true,
            dataIndex: 'id',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Модель',
            flex: 2,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 3,
            text: 'Цена',
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype: 'textfield',
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
                },
                '-',
                {
                    action: 'refresh',
                    text: 'refresh',
                    iconCls: 'icon-refresh',
                    disabled: false
                }

            ]
        }
    ]
});