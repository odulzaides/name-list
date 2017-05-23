import $ from 'jquery';
/*TODO : Make all table cells inputs
            a. display disabled until they are clicked
                click function
                    remove disabled
                    save to json after clicking outside
*/
class Table {
    constructor() {
        this.table = $('#names');
        this.populateTable();
        this.filterResults();
        this.addName();
    }
    populateTable(filter) {
        var table = this.table;
        var names = [];
        if (!filter) {
            filter = 'http://localhost:3000/names';
        } else {
            filter = 'http://localhost:3000/names?lastName_like=' + filter;
        }
        $('td').parent().remove();
        $.getJSON(filter, function (data) {
            $.each(data, function (key, val) {
            //    var entry = $('<tr>').append(
            //     $.each(val, function (key, val) {
            //         // console.log(val);
            //         $('<td contenteditable="true">').text(val);
            //     }));
                var entry = $('<tr>').append(
                    $('<td contenteditable="true">').text(val.firstName),
                    $('<td contenteditable="true">').text(val.lastName),
                    $('<td contenteditable="true">').text(val.address),
                    $('<td contenteditable="true">').text(val.city),
                    $('<td contenteditable="true">').text(val.state),
                    $('<td contenteditable="true">').text(val.zipcode)
                );
                entry.appendTo(table);
            });
        });
    }
    filterResults() {
        // Filter input event handler
        var tableRows = $('td');
        var that = this;
        $('#filter-submit').click(function () {
            var filterInput = $('#filter');
            var url = filterInput.val();
            console.log("filtering value  -- ", url);
            tableRows.hide();
            that.populateTable(url);
            return false;
        })

        // alert(filter);
    }
    addName() {
        $('.add-name-form').click(function () {
            console.log("Hello");
        })
    }

}

export default Table;