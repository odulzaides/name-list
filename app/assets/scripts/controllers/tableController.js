import $ from 'jquery';
class Table {
    constructor() {
        $.getJSON('http://localhost:3000/names', function (data) {
            var table = $('#names');
            $.each(data, function (key, val) {
                var entry = $('<tr>').append(
                    $('<td>').text(val.firstName),
                    $('<td>').text(val.lastName),
                    $('<td>').text(val.address),
                    $('<td>').text(val.city),
                    $('<td>').text(val.state),
                    $('<td>').text(val.zipcode)
                );
                console.log(entry[0]);
                entry.appendTo(table);
            });
        });
    }
}
export default Table;