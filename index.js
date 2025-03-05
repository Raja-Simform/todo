let tasks = [];
function render() {
  let ul = document.getElementById("ul");
  ul.innerHTML = "";

  tasks.forEach((task, index) => {
    let new_item_div = document.createElement("div");
    let new_item_li = document.createElement("LI");
    let new_item_edit = document.createElement("BUTTON");
    let new_item_delete = document.createElement("BUTTON");
    new_item_div.className = "item";
    new_item_edit.className = "edit";
    new_item_delete.className = "delete";
    new_item_edit.textContent = "Edit";
    new_item_delete.textContent = "Delete";
    new_item_li.textContent = task;
    new_item_div.appendChild(new_item_li);
    new_item_div.appendChild(new_item_edit);
    new_item_div.appendChild(new_item_delete);
    document.getElementById("ul").appendChild(new_item_div);
    new_item_delete.addEventListener("click", () => handlerDelete(index));
    new_item_edit.addEventListener("click", () =>
      handlerEdit(index, new_item_li, new_item_edit)
    );
  });
}
function add() {
  let input = document.getElementById("input-text").value;
  if (input === "" || input.trim(" ").length === 0) {
    alert("Please write the task");
    return;
  }
  tasks.push(input);
  document.getElementById("input-text").value = "";
  render();
}
function handlerDelete(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    render();
  }
}
function handlerEdit(index, new_item_li, new_item_edit) {
  if (new_item_edit.textContent === "Edit") {
    new_item_li.setAttribute("contenteditable", true);
    new_item_li.focus();
    new_item_edit.textContent = "Save";
  } else {
    let content = new_item_li.textContent.trim();
    if (content === "" || content.length === 0) {
      alert("Please write the task");
    }
    tasks[index] = content;
    new_item_li.setAttribute("contenteditable", false);
    new_item_edit.textContent = "Edit";
    render();
  }
}
document
  .getElementById("input-text")
  .addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      add();
    }
  });
