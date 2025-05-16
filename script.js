document.getElementById("agregarBtn").addEventListener("click", function () {
  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const anio = parseInt(document.getElementById("anio").value.trim());
  const color = document.getElementById("color").value;

  const advertencia = document.getElementById("advertencia");

  // Validaciones
  if (!marca || !modelo || !anio || anio < 1886 || !color) {
      advertencia.classList.remove("oculto");
      return;
  }

  advertencia.classList.add("oculto");

  // Crear fila y celdas
  const table = document.getElementById("autosTable").querySelector("tbody");
  const row = table.insertRow();

  row.insertCell().textContent = marca;
  row.insertCell().textContent = modelo;
  row.insertCell().textContent = anio;

  const colorCell = row.insertCell();
  colorCell.textContent = color;
  colorCell.classList.add("color-hover");

  // Cambiar color de fondo al pasar el mouse


    listItems.forEach(item => {
        const originalBg = item.style.backgroundColor;
      
        item.addEventListener('mouseenter', () => {
          const color = item.getAttribute('data-color');
          item.style.backgroundColor = color;
        });
      
        item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = '';
        });
      });


});
  // Limpiar formulario
  document.getElementById("autoForm").reset();
;
