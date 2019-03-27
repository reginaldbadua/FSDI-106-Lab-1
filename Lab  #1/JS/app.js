// Plain javascript way to initialize

/*
window.onload = function(){
    console.log('DOM ready');
    console.log($);
}
*/
//store todos here
var DB = [];

//object (todo) constructor
function Todo(text,importance){
    this.text = text; 
    this.importance = importance; 
}
//jQuery way of initialization 
$(document).ready(function(){
    //console.log('DOM ready');

    //hook events
    $("#btnAdd").click(creatToDo);
    $("#txtText").keypress(function(e){
        if (e.keyCode == 13){
        createTodo();  
        }
    });

    //var h1JS = document.getElementById("mainH1");
    var h1JQ = $("#mainH1");
   // console.log(h1JS,h1JQ);
    h1JQ.addClass('test');
    console.log(h1JQ.text());
    console.log(h1JQ.html());


});

function creatToDo(){
    //get text

    var text = $("#txtText").val();
    var imp = $("#selImp").val();
    console.log(imp);
    /*
    //if($(#rd1).prop('checked,'true))
    var isRd1Checked = $("#rd1").prop('checked', true);
    var isRd2Checked = $("#rd2").prop('checked', true);
    var isRd2Checked = $("#rd3").prop('checked', true);

    if (isRd1Checked){
        imp = 'Minor';
    }

    else if (isRd2Checked){
        imp = 'Mid'
    }
    else {
        imp = 'Important'
    }
    */

    var objTodo = new Todo(text);
    DB.push(objTodo);

    //create an li in the ul
    var li = `<li class="list-group-item">
        ${text} - ${imp}
        <button class = 'btn btn-danger btn-sm'>Remove</button>
        </li>`;
    $("#list").append(li)
    //clear the input
    $("#txtText").val('');
    $("#txtText").focus();


}


// - Add ToDos to a "Pending list" Done
// - Remove Todos from the list
// - Mark a Todo as Done and move it to a "Done list"