Ext.define('CarCatalog.view.CarCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.carCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'carGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 10px cursive"><left><font size = "10">Car Catalog</font></left></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchCarView',
            title: 'Поиск',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});