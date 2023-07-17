const listaTareas = [
  { id: 1, name: "Pasear a Mahalo", completed: false },
  { id: 2, name: "Comprar verduras", completed: false },
  { id: 3, name: "Jugar Call of Duty", completed: false },
];

const getValue = document.getElementById("nuevatarea");
const list = document.getElementById("tareas");
const identif = document.getElementById("identif");
const addBtn = document.getElementById("boton");
const count = document.getElementById("total");
const done = document.getElementById("realizadas");
//nueva tarea
const newTask = () => {
  const addFromInput = getValue.value;
  if (!addFromInput) {
    alert("Agrega una tarea");
    return false;
  }
  const lastItem = listaTareas[listaTareas.length - 1];

  const addTask = {
    id: lastItem ? lastItem.id + 1 : 1,
    name: addFromInput,
    completed: false,
  };
  listaTareas.push(addTask);

  renderList();
  renderID();
};

addBtn.addEventListener("click", newTask);
//nuevo status
const newStatus = (id) => {
  const index = listaTareas.findIndex((listaTareas) => listaTareas.id === id);
  if (listaTareas[index].completed == false) {
    const newItem = {
      id: listaTareas[index].id,
      name: listaTareas[index].name,
      completed: true,
    };
    listaTareas.splice(index, 1, newItem);
  } else {
    const newItem = {
      id: listaTareas[index].id,
      name: listaTareas[index].name,
      completed: false,
    };
    listaTareas.splice(index, 1, newItem);
  }
};

deleteItem = (id) => {
  const itemIndex = listaTareas.findIndex((task) => task.id === id);
  listaTareas.splice(itemIndex, 1);
  renderList();
};

const renderList = () => {
  let show = "";
  let box = "";
  let totalDone = [];
  listaTareas.forEach((task) => {
    box = task.completed
      ? `
      ${task.name}<input class="completed" type="checkbox"  onclick="newStatus"(${task.id})> `
      : `${task.name}<input type="checkbox" onclick="newStatus"(${task.id})>`;

    show += ` <div>
            <p> ${box}<input type="checkbox" onclick="deleteItem"(${task.id})></p>
            </div>`;
    if (task.completed === true) {
      totalDone.push(task);
    }
  });
  list.innerHTML = show;
  count.innerHTML = listaTareas.length;
  done.innerHTML = totalDone.length;
};
renderList();

const renderID = () => {
  let show2 = "";
  let box2 = "";
  listaTareas.forEach((task) => {
    box2 = task
      ? `
        <p>${task.id}</p>`
      : `<p>${task.id} </p>`;

    show2 += ` <div>
              <p> ${box2}</p>
              </div>`;
  });
  identif.innerHTML = show2;
};
renderID();
renderList;
