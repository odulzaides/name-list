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
    populateTable(filter){
        var table = this.table;
        console.log("PopulateTable" , filter);
        // var filter = 'http://localhost:3000/names';
        console.log("URL in populateTable()", filter);
        if (!filter ){
        filter = 'http://localhost:3000/names';
            console.log("I'm running");
        } else{
            filter = 'http://localhost:3000/names?firstName_like=' + filter;
        }
        $.getJSON(filter, function (data) {
            console.log("getJason", filter);
            $.each(data, function (key, val) {
                var entry = $('<tr>').append(
                    $('<td>').text(val.firstName),
                    $('<td>').text(val.lastName),
                    $('<td>').text(val.address),
                    $('<td>').text(val.city),
                    $('<td>').text(val.state),
                    $('<td>').text(val.zipcode)
                );
                // console.log(entry[0]);
                entry.appendTo(table);
            });
        });
    }
    filterResults(){
        // Filter input event handler
        var tableRows = $('td');
        console.log(tableRows[0]);
        var that = this;
        $('#filter-submit').click(function(){
        var filterInput = $('#filter');
        var url =  filterInput.val();
        console.log("filtering value  -- " , url);
          tableRows.hide();
          that.populateTable(url);
    return false;
    })
        
        // alert(filter);
    }
    addName(){
    $('.add-name-form').click(function(){
        console.log("Hello");
    })
    }

}

export default Table;