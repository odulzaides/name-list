import $ from 'jquery';
import '../helpers/helpers';

/*TODO : Make all table cells inputs
            a. display disabled until they are clicked
                click function
                    remove disabled
                    save to json after clicking outside
*/

class TableController {
    constructor() {
        this.table = $('#names');
        this.populateTable();
        this.filterResults();
    }
    populateTable(filter) {
        console.log("Table Controller");
        var table = this.table;
        var names = [];
        if (!filter) {
            filter = 'http://localhost:3000/names';
        } else {
            filter = 'http://localhost:3000/names?q=' + filter;
        }
        $('td').parent().remove();
        $.getJSON(filter, function (data) {
            $.each(data, function (key, val) {
                var entry = $.map(val, function (value) {
                    return '<td contenteditable="true">' + value + '</td>';
                });
                table.append('<tr>' + entry.join('') + '</tr>');
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
            tableRows.hide();
            that.populateTable(url);
            return false;
        });
    }
}
export default TableController;