let tareas = [
  { id: 1, descripcion: 'Llamar a papá', realizada: false },
  { id: 2, descripcion: 'Comprar los regalos', realizada: false },
  { id: 3, descripcion: 'Preparar la diapositiva', realizada: true },
  { id: 4, descripcion: 'Hacer el informe', realizada: false },
];

console.log(tareas);
const Tarea_Nueva = document.querySelector('#NuevaTarea');
const btnAgregar = document.querySelector('#btn_Agregar');
const tbody = document.querySelector('tbody');
const Total_Tareas = document.querySelector('#Total_Tareas');
const Total_Tareas_Hechas = document.querySelector('#Total_Tareas_Realizadas');

var Hecha = function Hechas(Bollean) {
  if (Bollean == 1) {
    return 'checked';
  } else {
    return '';
  }
};

function showContent(id, id2) {
  const index = tareas.findIndex((ele) => ele.id == id2);
  console.log(id2);
  if (id == 1) {
    tareas[index].realizada = false;
  } else {
    tareas[index].realizada = true;
  }
  console.log(tareas);
  conteo_realizadas();
}

function renderRows(tareas) {
  tbody.innerHTML = '';
  tareas.forEach((tareas) => {
    tbody.innerHTML += `
  <tr>
  <td>${tareas.id}</td>
  <td>${tareas.descripcion}</td>
  <td><input id="${tareas.id}" 
       type="checkbox" 
       ${Hecha(tareas.realizada)} 
       onchange="showContent(${tareas.realizada},${tareas.id})" ></td>
  <td><button onclick="borrar(${tareas.id})"> eliminar </button></td>
  </tr>`;
  });
  Total();
  conteo_realizadas();
}
renderRows(tareas);

btnAgregar.addEventListener('click', () => {
  elementoNuevo = {
    id: ids(),
    descripcion: Tarea_Nueva.value,
    realizada: false,
  };
  console.log(elementoNuevo);
  tareas.push(elementoNuevo);
  console.log(tareas);
  renderRows(tareas);
  Tarea_Nueva.value = '';
});

function Total() {
  Total_Tareas.innerHTML = tareas.length;
}

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderRows(tareas);
}

var ids = function id() {
  if (tareas.length > 0) {
    return tareas[tareas.length - 1].id + 1;
  } else {
    return 1;
  }
};

function conteo_realizadas() {
  Realizadas = tareas.map((item) => {
    return item.realizada;
  });
  Total_Tareas_Hechas.innerHTML = Realizadas.filter(Boolean).length;
}
