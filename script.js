var xhReq = new XMLHttpRequest();
xhReq.open("GET", "<?php echo site_url('item_controller/displayListItem'); ?>", false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);

$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            data: jsonObject,
            schema: {
                model: {
                    fields: {
                        name_id: { type: "number" },
                        name: { type: "string" },
                        title: { type: "string" }
                    }
                }
            },
            pageSize: 20,
            serverPaging: true,
            serverfiltering: true,
            serverSorting: true
        },
        height: 550,
        groupable: true,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            field: "NameID",
            title: "ID"
        }, {
            field: "name",
            title: "Name",
            width: 240
        }, {
            field: "title",
            title: "Title"
        }]
    });
});