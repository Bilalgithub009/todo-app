
var list = document.getElementById("list")


function addTodo () {
    var todo_items = document.getElementById("todo-item");

    // Create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_items.value);
    li.appendChild(liText);

    // Create delete Btn
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick", "delItem(this)")
    delBtn.setAttribute("class", "btn")
    delBtn.appendChild(delText);

    //Create Edit Btn
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "editBtn(this)")
    editBtn.setAttribute("class", "btn")
    editBtn.appendChild(editText);


    li.appendChild(delBtn);

    li.appendChild(editBtn);

    list.appendChild(li)



    todo_items.value = "";

}

function delItem(a) {

    a.parentNode.remove();

}
function delAll() {
    list.innerHTML = "";
}
function editBtn(a) {
    var val = a.parentNode.firstChild.nodeValue;
    // var NewValue = prompt("Enter New Value", val)
    // val = NewValue
    a.parentNode.firstChild.nodeValue= prompt("Enter New Value", val)
  

}