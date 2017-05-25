import $ from 'jquery';
import TableController from '../controllers/tableController';
import Database from '../controllers/dbController';

class TableView {
    constructor() {
        this.events();
    }
    events(){
        // Toggle th add record form
         $('.js-show-add-record').click(function(){
            $('.add-name-form').toggle();
         });
         // Add record to db
         $('#add-record-submit').click(function(){
             console.log("Clicked add record button");
             db.addName();
         })
    }
}
var db = new Database();
new TableController();
export default TableView;