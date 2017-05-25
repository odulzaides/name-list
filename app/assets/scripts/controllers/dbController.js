import $ from 'jquery';

class Database {
    constructor() {
        // console.log("Datbase controller Class");
    }
     addName() {
         console.log("addName invocked");
            $.ajax({
                url: 'http://localhost:3000/names',
                type: 'POST',
                contenttype: 'application/json; charset=utf-8',
                data: {
                    "firstName": $('#firstName').val(),
                    "lastName": $('#lastName').val(),
                    "address": $('#address').val(),
                    "city": $('#city').val(),
                    "state": $('#state').val(),
                    "zipcode": $('#zipcode').val(),
                },
                datatype: 'JSON'
            });
    }
}
export default Database;