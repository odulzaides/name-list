import $ from 'jquery';
class Table {
    constructor() {
        $.getJSON('http://localhost:3000/names', function (data) {
            $.each(data, function (key, val) {
                console.log(key,$.each(val, function(key, val){
                    console.log( val);
                }));
            });
        });
    }
}
export default Table;